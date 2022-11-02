"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee }) => ({
                grantee: grantee,
                granter: granter,
            }),
            fromAmino: ({ granter, grantee }) => ({
                grantee: grantee,
                granter: granter,
            }),
        },
    };
}
exports.createAuthzAminoConverters = createAuthzAminoConverters;
