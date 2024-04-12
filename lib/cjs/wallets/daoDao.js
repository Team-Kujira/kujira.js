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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoDao = void 0;
const math_1 = require("@cosmjs/math");
const stargate_1 = require("@cosmjs/stargate");
const iframe_1 = require("@cosmos-kit/core/esm/iframe");
const amino_1 = require("../amino");
const registry_1 = require("../registry");
const iframeClient = new iframe_1.IframeClient(iframe_1.iframeWallet);
class DaoDao {
    constructor(account, config, options) {
        this.account = account;
        this.config = config;
        this.options = options;
        this.onChange = (fn) => { };
        this.disconnect = () => { };
        this.signAndBroadcast = (rpc, msgs) => __awaiter(this, void 0, void 0, function* () {
            const signer = iframeClient.getOfflineSigner("kaiyo-1");
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
DaoDao.connect = (config, opts) => iframeClient
    .connect(config.chainId)
    .then(() => iframeClient
    .getAccount(config.chainId)
    .then((account) => new DaoDao(Object.assign(Object.assign({}, account), { label: account.username }), config, opts)));
