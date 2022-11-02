import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
export function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee }) => ({
                grantee: grantee,
                granter: granter,
            }),
            fromAmino: ({ granter, grantee }) => MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
            }),
        },
    };
}
