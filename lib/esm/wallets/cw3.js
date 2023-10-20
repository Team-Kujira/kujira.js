var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { msg } from "../msg";
import { registry } from "../registry";
const toCosmosMsg = (encodeObject) => {
    const any = registry.encodeAsAny(encodeObject);
    return {
        stargate: {
            type_url: any.typeUrl,
            value: Buffer.from(any.value).toString("base64"),
        },
    };
};
export class CW3Wallet {
    constructor(contract, wallet) {
        this.contract = contract;
        this.wallet = wallet;
        this.onChange = (fn) => { };
        this.disconnect = () => { };
        this.signAndBroadcast = (rpc, encodeObjects, gas, memo, title, description, deposit) => __awaiter(this, void 0, void 0, function* () {
            const proposal = {
                propose: {
                    title,
                    description,
                    msgs: encodeObjects.map(toCosmosMsg),
                },
            };
            const msgs = [
                msg.wasm.msgExecuteContract({
                    sender: this.wallet.account.address,
                    contract: this.contract,
                    msg: Buffer.from(JSON.stringify(proposal)),
                    funds: deposit ? [deposit] : [],
                }),
            ];
            return this.wallet.signAndBroadcast(rpc, msgs, gas, memo);
        });
        this.account = {
            address: contract,
            algo: "secp256k1",
            pubkey: new Uint8Array(),
        };
    }
}
