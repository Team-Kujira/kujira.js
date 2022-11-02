import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
export function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant }) => {
                var _a;
                return ({
                    grantee: grantee,
                    granter: granter,
                    grant: {
                        authorization: {},
                        expiration: new Date((((_a = grant === null || grant === void 0 ? void 0 : grant.expiration) === null || _a === void 0 ? void 0 : _a.seconds.toNumber()) || 0) * 1000).toISOString(),
                    },
                });
            },
            fromAmino: ({ granter, grantee, grant }) => ({
                grantee: grantee,
                granter: granter,
                grant: {
                    expiration: Timestamp.fromJSON(grant.expiration),
                },
            }),
        },
    };
}
