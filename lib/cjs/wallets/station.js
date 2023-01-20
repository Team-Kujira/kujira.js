"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const encoding_1 = require("@cosmjs/encoding");
const stargate_1 = require("@cosmjs/stargate");
const feather_js_1 = require("@terra-money/feather.js");
const wallet_controller_1 = require("@terra-money/wallet-controller");
const registry_1 = require("../registry");
class Station {
    constructor(controller, wallet, account, config) {
        this.controller = controller;
        this.wallet = wallet;
        this.account = account;
        this.config = config;
        this.disconnect = () => {
            this.controller.disconnect();
        };
        this.onChange = (fn) => { };
        this.signAndBroadcast = (msgs) => __awaiter(this, void 0, void 0, function* () {
            const terraMsgs = msgs.map((m) => feather_js_1.Msg.fromProto({ typeUrl: m.typeUrl, value: registry_1.registry.encode(m) }));
            const res = yield this.controller.sign({
                msgs: terraMsgs,
                chainID: this.config.chainId,
            });
            const stargate = yield stargate_1.StargateClient.connect(this.config.rpc);
            const result = yield stargate.broadcastTx(res.result.toBytes());
            return result;
        });
    }
}
exports.Station = Station;
_a = Station;
Station.connect = (config, opts) => __awaiter(void 0, void 0, void 0, function* () {
    const { controller } = opts;
    yield controller.connect(wallet_controller_1.ConnectType.EXTENSION);
    const wallet = yield new Promise((r) => controller.connectedWallet().subscribe((next) => {
        next && r(next);
    }));
    if (!wallet.addresses[config.chainId])
        throw new Error(`${config.chainId} not available on Station`);
    const account = {
        address: (0, encoding_1.toBech32)("kujira", (0, encoding_1.fromBech32)(wallet.addresses[config.chainId]).data),
        algo: "secp256k1",
        pubkey: Buffer.from(""),
    };
    return new Station(controller, wallet, account, config);
});
