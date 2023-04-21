"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant, }) => ({
                granter: granter,
                grantee: grantee,
                grant,
            }),
            fromAmino: ({ granter, grantee, grant, }) => ({
                granter: granter,
                grantee: grantee,
                grant,
            }),
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
