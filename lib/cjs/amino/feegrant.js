"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeegrantAminoConverters = void 0;
const feegrant_1 = require("cosmjs-types/cosmos/feegrant/v1beta1/feegrant");
const allowanceToAmino = (allowance) => {
    switch (allowance.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance": {
            const basicAllowance = feegrant_1.BasicAllowance.decode(allowance.value);
            const aminoBasicAllowance = {
                type: "cosmos-sdk/BasicAllowance",
                value: {
                    spend_limit: basicAllowance.spendLimit,
                    expiration: basicAllowance.expiration,
                },
            };
            return aminoBasicAllowance;
        }
        default:
            throw new Error(`${allowance.typeUrl} not supported for Ledger`);
    }
};
const allowanceFromAmino = (allowance) => {
    switch (allowance.type) {
        case "cosmos-sdk/BasicAllowance": {
            const basicAllowance = {
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: feegrant_1.BasicAllowance.encode(feegrant_1.BasicAllowance.fromPartial({
                    spendLimit: allowance.value.spend_limit,
                    expiration: allowance.value.expiration,
                })).finish(),
            };
            return basicAllowance;
        }
        default:
            throw new Error(`${allowance.type} not supported from Ledger`);
    }
};
function createFeegrantAminoConverters() {
    return {
        "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
            aminoType: "cosmos-sdk/MsgGrantAllowance",
            toAmino: ({ granter, grantee, allowance, }) => {
                return {
                    granter,
                    grantee,
                    allowance: allowanceToAmino(allowance),
                };
            },
            fromAmino: ({ granter, grantee, allowance, }) => {
                return {
                    granter,
                    grantee,
                    allowance: allowance && allowanceFromAmino(allowance),
                };
            },
        },
        "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
            aminoType: "cosmos-sdk/MsgRevokeAllowance",
            toAmino: ({ granter, grantee, }) => {
                return {
                    granter,
                    grantee,
                };
            },
            fromAmino: ({ granter, grantee, }) => {
                return {
                    granter,
                    grantee,
                };
            },
        },
    };
}
exports.createFeegrantAminoConverters = createFeegrantAminoConverters;
