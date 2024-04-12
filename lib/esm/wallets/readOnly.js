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
export class ReadOnly {
    constructor(account) {
        this.account = account;
        this.onChange = (fn) => { };
        this.disconnect = () => { };
        this.signAndBroadcast = (rpc, msgs, gas, memo) => __awaiter(this, void 0, void 0, function* () {
            throw new Error("Transaction signing not available in read-only mode");
        });
    }
}
_a = ReadOnly;
ReadOnly.connect = (address) => __awaiter(void 0, void 0, void 0, function* () {
    return new ReadOnly({
        address,
        algo: "secp256k1",
        pubkey: new Uint8Array(),
    });
});
