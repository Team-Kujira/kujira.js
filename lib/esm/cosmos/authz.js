import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
export function createAuthzAminoConverters() {
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
            fromAmino: ({ granter, grantee, grant }) => MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
                grant: {
                    authorization: grant.authorization,
                    expiration: Timestamp.fromPartial({
                        seconds: new Date(grant.expiration).getTime() / 1000,
                        nanos: 0,
                    }),
                },
            }),
        },
    };
}
