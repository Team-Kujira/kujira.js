import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters, Coin } from "@cosmjs/stargate";
import { BasicAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import Long from "long";

type AminoAllowance = {
  type: string;
  value: AminoBasicAllowance; //add other Allowance Types here
};

type AminoBasicAllowance = {
  spend_limit?: Coin[];
  expiration?: {
    seconds?: string | number | Long.Long;
    nanos?: number;
  };
};

export interface AminoMsgGrantAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: {
    granter: string;
    grantee: string;
    allowance: AminoAllowance;
  };
}
export interface AminoMsgRevokeAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: {
    granter: string;
    grantee: string;
  };
}

const allowanceToAmino = (allowance: {
  typeUrl: string;
  value: Uint8Array;
}): AminoAllowance => {
  switch (allowance.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance": {
      const basicAllowance = BasicAllowance.decode(allowance.value);
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

const allowanceFromAmino = (
  allowance: AminoAllowance
): { typeUrl: string; value: Uint8Array } => {
  switch (allowance.type) {
    case "cosmos-sdk/BasicAllowance": {
      const basicAllowance = {
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: BasicAllowance.encode(
          BasicAllowance.fromPartial({
            spendLimit: allowance.value.spend_limit,
            expiration: allowance.value.expiration,
          })
        ).finish(),
      };
      return basicAllowance;
    }
    default:
      throw new Error(`${allowance.type} not supported from Ledger`);
  }
};

export function createFeegrantAminoConverters(): AminoConverters {
  return {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
      aminoType: "cosmos-sdk/MsgGrantAllowance",
      toAmino: ({
        granter,
        grantee,
        allowance,
      }: MsgGrantAllowance): AminoMsgGrantAllowance["value"] => {
        return {
          granter,
          grantee,
          allowance: allowanceToAmino(allowance!),
        };
      },
      fromAmino: ({
        granter,
        grantee,
        allowance,
      }: AminoMsgGrantAllowance["value"]): MsgGrantAllowance => {
        return {
          granter,
          grantee,
          allowance: allowance && allowanceFromAmino(allowance),
        };
      },
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
      aminoType: "cosmos-sdk/MsgRevokeAllowance",
      toAmino: ({
        granter,
        grantee,
      }: MsgRevokeAllowance): AminoMsgRevokeAllowance["value"] => {
        return {
          granter,
          grantee,
        };
      },
      fromAmino: ({
        granter,
        grantee,
      }: AminoMsgRevokeAllowance["value"]): MsgRevokeAllowance => {
        return {
          granter,
          grantee,
        };
      },
    },
  };
}
