var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { StargateClient } from "@cosmjs/stargate";
import { Msg } from "@terra-money/feather.js";
import { ConnectType, } from "@terra-money/wallet-controller";
import { registry } from "../registry";
export class Station {
    constructor(controller, wallet, account, config) {
        this.controller = controller;
        this.wallet = wallet;
        this.account = account;
        this.config = config;
        this.disconnect = () => {
            this.controller.disconnect();
        };
        this.onChange = (fn) => { };
        this.signAndBroadcast = (rpc, msgs) => __awaiter(this, void 0, void 0, function* () {
            const terraMsgs = msgs.map((m) => Msg.fromProto({ typeUrl: m.typeUrl, value: registry.encode(m) }));
            const res = yield this.controller.sign({
                msgs: terraMsgs,
                chainID: this.config.chainId,
            });
            const stargate = yield StargateClient.connect(rpc);
            const result = yield stargate.broadcastTx(res.result.toBytes());
            return result;
        });
    }
}
_a = Station;
Station.connect = (config, opts) => __awaiter(void 0, void 0, void 0, function* () {
    const { controller } = opts;
    yield controller.connect(ConnectType.EXTENSION);
    const wallet = yield new Promise((r) => controller.connectedWallet().subscribe((next) => {
        next && r(next);
    }));
    if (!wallet.addresses[config.chainId])
        throw new Error(`${config.chainId} not available on Station`);
    const account = {
        address: toBech32("kujira", fromBech32(wallet.addresses[config.chainId]).data),
        algo: "secp256k1",
        pubkey: new Uint8Array(),
    };
    return new Station(controller, wallet, account, config);
});
