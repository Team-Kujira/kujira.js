var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WalletConnect from "@walletconnect/client";
import { getClientMeta } from "@walletconnect/utils";
import { MAINNET } from "../network";
import { registry } from "../registry";
export class Sonar {
    constructor(connector, account) {
        this.connector = connector;
        this.account = account;
        this.onChange = (fn) => {
            this.connector.on("disconnect", (error, payload) => {
                if (error)
                    throw error;
                fn(null);
            });
        };
        this.disconnect = () => {
            this.connector.killSession();
        };
        this.signAndBroadcast = (msgs, gas, memo) => __awaiter(this, void 0, void 0, function* () {
            const x = yield this.connector.sendCustomRequest({
                id: 0,
                jsonrpc: "2.0",
                method: "sign_tx",
                params: [
                    {
                        clientMeta: getClientMeta(),
                        gas: gas.reference,
                        memo,
                        msgs: msgs
                            .map((m) => registry.encodeAsAny(m))
                            .map((x) => (Object.assign(Object.assign({}, x), { value: Buffer.from(x.value).toString("base64") }))),
                    },
                ],
            });
            return x;
        });
    }
}
Sonar.connect = (network = MAINNET, options) => {
    const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org",
        storageId: "kujirawalletconnect",
        qrcodeModal: {
            open(uri, cb) {
                options.request(uri);
            },
            close: () => { },
        },
    });
    return new Promise((resolve, reject) => {
        if (connector.session.connected) {
            const [account] = connector.session.accounts.map((address) => ({
                address,
                pubkey: new Uint8Array(),
                algo: "secp256k1",
            }));
            resolve(new Sonar(connector, account));
        }
        // Only create a new session from an explicit action
        if (!connector.connected && !options.auto) {
            // create new session
            connector.createSession();
        }
        connector.on("connect", (error, payload) => {
            if (error)
                throw error;
            const [account] = connector.session.accounts.map((address) => ({
                address,
                pubkey: new Uint8Array(),
                algo: "secp256k1",
            }));
            resolve(new Sonar(connector, account));
        });
        connector.on("session_update", (error, payload) => {
            if (error)
                reject(error);
        });
    });
};
