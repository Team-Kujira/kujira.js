"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthzAminoConverters = void 0;
const tx_1 = require("cosmjs-types/cosmos/authz/v1beta1/tx");
function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee }) => ({
                grantee: grantee,
                granter: granter,
            }),
            fromAmino: ({ granter, grantee }) => tx_1.MsgGrant.fromPartial({
                grantee: grantee,
                granter: granter,
            }),
        },
    };
}
exports.createAuthzAminoConverters = createAuthzAminoConverters;
