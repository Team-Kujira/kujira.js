"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
const authz_1 = require("cosmjs-types/cosmos/authz/v1beta1/authz");
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant }) => {
                var _a, _b;
                return ({
                    grantee: grantee,
                    granter: granter,
                    grant: {
                        authorization: {
                            "@type": "/cosmos.authz.v1beta1.GenericAuthorization",
                            msg: authz_1.GenericAuthorization.decode(((_a = grant === null || grant === void 0 ? void 0 : grant.authorization) === null || _a === void 0 ? void 0 : _a.value) || new Uint8Array()).msg,
                        },
                        expiration: (grant === null || grant === void 0 ? void 0 : grant.expiration)
                            ? new Date(((_b = grant === null || grant === void 0 ? void 0 : grant.expiration) === null || _b === void 0 ? void 0 : _b.seconds.toNumber()) * 1000).toISOString()
                            : new Date().toISOString(),
                    },
                });
            },
            fromAmino: ({ granter, grantee, grant }) => tx_1.MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
                grant: {
                    authorization: {
                        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                        value: authz_1.GenericAuthorization.encode(authz_1.GenericAuthorization.fromPartial({
                            msg: "/cosmos.staking.v1beta1.MsgDelegate",
                        })).finish(),
                    },
                    expiration: timestamp_1.Timestamp.fromPartial({
                        seconds: new Date(grant.expiration).getTime() / 1000,
                        nanos: 0,
                    }),
                },
            }),
        },
    };
}
exports.createAuthzAminoConverters = createAuthzAminoConverters;
