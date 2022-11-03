import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
export function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant }) => {
                var _a, _b;
                return ({
                    grantee: grantee,
                    granter: granter,
                    grant: {
                        authorization: GenericAuthorization.decode(((_a = grant === null || grant === void 0 ? void 0 : grant.authorization) === null || _a === void 0 ? void 0 : _a.value) || new Uint8Array()).msg,
                        expiration: new Date(((_b = grant === null || grant === void 0 ? void 0 : grant.expiration) === null || _b === void 0 ? void 0 : _b.seconds.toNumber()) || 0).toISOString(),
                    },
                });
            },
            fromAmino: ({ granter, grantee, grant }) => MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
                grant: {
                    authorization: {
                        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                        value: GenericAuthorization.encode(GenericAuthorization.fromPartial({
                            msg: "/cosmos.staking.v1beta1.MsgDelegate",
                        })).finish(),
                    },
                    expiration: Timestamp.fromPartial({
                        seconds: new Date(grant.expiration).getTime() / 1000,
                        nanos: 0,
                    }),
                },
            }),
        },
    };
}
