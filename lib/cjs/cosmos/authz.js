"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const timestamp_1 = require("cosmjs-types/google/protobuf/timestamp");
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant }) => {
                var _a;
                return ({
                    type: "cosmos-sdk/MsgGrant",
                    grantee: grantee,
                    granter: granter,
                    grant: {
                        authorization: grant === null || grant === void 0 ? void 0 : grant.authorization,
                        expiration: (grant === null || grant === void 0 ? void 0 : grant.expiration)
                            ? new Date(((_a = grant === null || grant === void 0 ? void 0 : grant.expiration) === null || _a === void 0 ? void 0 : _a.seconds.toNumber()) * 1000).toISOString()
                            : new Date().toISOString(),
                    },
                });
            },
            fromAmino: ({ granter, grantee, grant }) => tx_1.MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
                grant: {
                    authorization: grant.authorization,
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
