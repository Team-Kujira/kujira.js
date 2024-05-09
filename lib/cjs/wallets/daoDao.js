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
exports.DaoDao = void 0;
const math_1 = require("@cosmjs/math");
const stargate_1 = require("@cosmjs/stargate");
const cosmiframe_1 = require("@dao-dao/cosmiframe");
const amino_1 = require("../amino");
const registry_1 = require("../registry");
const cosmiframe = new cosmiframe_1.Cosmiframe([
    "https://daodao.zone",
    "https://dao.daodao.zone",
]);
class DaoDao {
    constructor(account, config, options) {
        this.account = account;
        this.config = config;
        this.options = options;
        this.onChange = (fn) => { };
        this.disconnect = () => { };
        this.signAndBroadcast = (rpc, msgs) => __awaiter(this, void 0, void 0, function* () {
            const signer = cosmiframe.getOfflineSigner("kaiyo-1");
            const gasPrice = new stargate_1.GasPrice(math_1.Decimal.fromUserInput("0.00125", 18), this.options
                ? this.options.feeDenom
                : this.config.feeCurrencies[0].coinDenom);
            const client = yield stargate_1.SigningStargateClient.connectWithSigner(rpc, signer, {
                registry: registry_1.registry,
                gasPrice,
                aminoTypes: (0, amino_1.aminoTypes)(this.config.bech32Config.bech32PrefixAccAddr),
                accountParser: registry_1.accountParser,
            });
            return client.signAndBroadcast(this.account.address, msgs, 1.7);
        });
    }
}
exports.DaoDao = DaoDao;
_a = DaoDao;
DaoDao.connect = (config, opts) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield cosmiframe.isReady())) {
        throw new Error("DAO DAO Cosmiframe not ready");
    }
    return cosmiframe.p
        .connect(config.chainId)
        .then(() => cosmiframe.p
        .getAccount(config.chainId)
        .then((account) => new DaoDao(Object.assign(Object.assign({}, account), { label: account.username }), config, opts)));
});
