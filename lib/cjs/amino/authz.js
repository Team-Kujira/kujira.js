"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
const authz_1 = require("cosmjs-types/cosmwasm/wasm/v1/authz");
const long_1 = __importDefault(require("long"));
const grantToAmino = (grant) => {
    var _a, _b, _c;
    console.log({ original: grant });
    const expiration = new Date(Math.floor(((_a = grant.expiration) === null || _a === void 0 ? void 0 : _a.seconds.toNumber()) || 0) * 1000)
        .toISOString()
        .replace(/\.\d+Z/, "Z");
    switch ((_b = grant.authorization) === null || _b === void 0 ? void 0 : _b.typeUrl) {
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            const contractExecutionAuthorization = authz_1.ContractExecutionAuthorization.decode(grant.authorization.value);
            const grants = contractExecutionAuthorization.grants.map((g) => ({
                contract: g.contract,
                filter: g.filter && {
                    type: "wasm/AcceptedMessageKeysFilter",
                    value: {
                        keys: authz_1.AcceptedMessageKeysFilter.decode(g.filter.value).keys,
                    },
                },
                limit: g.limit && {
                    type: "wasm/MaxFundsLimit",
                    value: {
                        amounts: authz_1.MaxFundsLimit.decode(g.limit.value).amounts,
                    },
                },
            }));
            return {
                expiration,
                authorization: {
                    type: "wasm/ContractExecutionAuthorization",
                    value: { grants },
                },
            };
        default:
            throw new Error(`${(_c = grant.authorization) === null || _c === void 0 ? void 0 : _c.typeUrl} not supported for Ledger`);
    }
};
const grantFromAmino = (grant) => {
    var _a;
    console.log({ amino: grant });
    const expiration = grant.expiration &&
        long_1.default.fromNumber(new Date(grant.expiration).getTime() / 1000);
    switch (grant.authorization.type) {
        case "wasm/ContractExecutionAuthorization":
            console.log(grant.authorization);
            return {
                expiration: expiration ? { seconds: expiration, nanos: 0 } : undefined,
                authorization: {
                    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                    value: authz_1.ContractExecutionAuthorization.encode({
                        grants: grant.authorization.value.grants.map((g) => ({
                            contract: g.contract,
                            filter: {
                                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                                value: authz_1.AcceptedMessageKeysFilter.encode({
                                    keys: g.filter.value.keys,
                                }).finish(),
                            },
                            limit: {
                                typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                                value: authz_1.MaxFundsLimit.encode({
                                    amounts: g.limit.value.amounts,
                                }).finish(),
                            },
                        })),
                    }).finish(),
                },
            };
        default:
            throw new Error(`${(_a = grant.authorization) === null || _a === void 0 ? void 0 : _a.type} not supported from Ledger`);
    }
};
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant, }) => ({
                granter: granter,
                grantee: grantee,
                grant: grant && grantToAmino(grant),
            }),
            fromAmino: ({ granter, grantee, grant, }) => {
                console.log({ returned: grant && grantFromAmino(grant) });
                return {
                    granter: granter,
                    grantee: grantee,
                    grant: grant && grantFromAmino(grant),
                };
            },
        },
        "/cosmos.authz.v1beta1.MsgRevoke": {
            aminoType: "cosmos-sdk/MsgRevoke",
            toAmino: ({ granter, grantee, msgTypeUrl, }) => ({
                granter: granter,
                grantee: grantee,
                msgTypeUrl,
            }),
            fromAmino: ({ granter, grantee, msgTypeUrl, }) => ({
                granter: granter,
                grantee: grantee,
                msgTypeUrl,
            }),
        },
    };
}
exports.createAuthzAminoConverters = createAuthzAminoConverters;
