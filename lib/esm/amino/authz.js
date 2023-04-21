import { AcceptedMessageKeysFilter, ContractExecutionAuthorization, MaxFundsLimit, } from "cosmjs-types/cosmwasm/wasm/v1/authz";
import Long from "long";
const grantToAmino = (grant) => {
    var _a, _b, _c;
    console.log({ original: grant });
    const expiration = new Date(Math.floor(((_a = grant.expiration) === null || _a === void 0 ? void 0 : _a.seconds.toNumber()) || 0) * 1000)
        .toISOString()
        .replace(/\.\d+Z/, "Z");
    switch ((_b = grant.authorization) === null || _b === void 0 ? void 0 : _b.typeUrl) {
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            const contractExecutionAuthorization = ContractExecutionAuthorization.decode(grant.authorization.value);
            const grants = contractExecutionAuthorization.grants.map((g) => ({
                contract: g.contract,
                filter: g.filter && {
                    type: "wasm/AcceptedMessageKeysFilter",
                    value: {
                        keys: AcceptedMessageKeysFilter.decode(g.filter.value).keys,
                    },
                },
                limit: g.limit && {
                    type: "wasm/MaxFundsLimit",
                    value: {
                        amounts: MaxFundsLimit.decode(g.limit.value).amounts,
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
        Long.fromNumber(new Date(grant.expiration).getTime() / 1000);
    switch (grant.authorization.type) {
        case "wasm/ContractExecutionAuthorization":
            console.log(grant.authorization);
            return {
                expiration: expiration ? { seconds: expiration, nanos: 0 } : undefined,
                authorization: {
                    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                    value: ContractExecutionAuthorization.encode({
                        grants: grant.authorization.value.grants.map((g) => ({
                            contract: g.contract,
                            filter: {
                                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                                value: AcceptedMessageKeysFilter.encode({
                                    keys: g.filter.value.keys,
                                }).finish(),
                            },
                            limit: {
                                typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                                value: MaxFundsLimit.encode({
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
export function createAuthzAminoConverters() {
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
