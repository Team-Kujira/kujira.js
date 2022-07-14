"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.txClient = exports.registry = exports.MissingWalletError = exports.types = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
Object.defineProperty(exports, "Api", { enumerable: true, get: function () { return rest_1.Api; } });
const query_1 = require("./types/ethermint/evm/v1/query");
const tx_1 = require("./types/ethermint/evm/v1/tx");
exports.types = [
    ["/ethermint.types.v1.EthAccount", query_1.QueryAccountResponse],
    ["/ethermint.evm.v1.MsgEthereumTx", tx_1.MsgEthereumTx],
];
exports.MissingWalletError = new Error("wallet is required");
exports.registry = new proto_signing_1.Registry(exports.types);
exports.txClient = {
    msgEthereumTx: (data) => ({
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: tx_1.MsgEthereumTx.fromPartial(data),
    }),
};
