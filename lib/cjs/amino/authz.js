"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
const authz_1 = require("cosmjs-types/cosmwasm/wasm/v1/authz");
const grantToAmino = (grant) => {
    var _a, _b, _c;
    const expiration = new Date(Math.floor(Number(((_a = grant.expiration) === null || _a === void 0 ? void 0 : _a.seconds) || 0)) * 1000)
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
    const expiration = grant.expiration && BigInt(new Date(grant.expiration).getTime() / 1000);
    switch (grant.authorization.type) {
        case "wasm/ContractExecutionAuthorization":
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
                return {
                    granter: granter,
                    grantee: grantee,
                    grant: grantFromAmino(grant),
                };
            },
        },
        "/cosmos.authz.v1beta1.MsgRevoke": {
            aminoType: "cosmos-sdk/MsgRevoke",
            toAmino: ({ granter, grantee, msgTypeUrl, }) => ({
                granter: granter,
                grantee: grantee,
                msg_type_url: msgTypeUrl,
            }),
            fromAmino: ({ granter, grantee, msg_type_url, }) => ({
                granter: granter,
                grantee: grantee,
                msgTypeUrl: msg_type_url,
            }),
        },
    };
}
exports.createAuthzAminoConverters = createAuthzAminoConverters;
