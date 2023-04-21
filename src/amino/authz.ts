import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";

export interface AminoMsgGrant extends AminoMsg {
  readonly type: "cosmos-sdk/MsgGrant";
  readonly value: {
    readonly granter: string;
    readonly grantee: string;
    readonly grant?: Grant;
  };
}

export interface AminoMsgRevoke extends AminoMsg {
  readonly type: "cosmos-sdk/MsgRevoke";
  readonly value: {
    readonly granter: string;
    readonly grantee: string;
    readonly msgTypeUrl: string;
  };
}

export function createAuthzAminoConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos-sdk/MsgGrant",
      toAmino: ({
        granter,
        grantee,
        grant,
      }: MsgGrant): AminoMsgGrant["value"] => ({
        granter: granter,
        grantee: grantee,
        grant,
      }),
      fromAmino: ({
        granter,
        grantee,
        grant,
      }: AminoMsgGrant["value"]): MsgGrant => ({
        granter: granter,
        grantee: grantee,
        grant,
      }),
    },
    "/cosmos.authz.v1beta1.MsgRevoke": {
      aminoType: "cosmos-sdk/MsgRevoke",
      toAmino: ({
        granter,
        grantee,
        msgTypeUrl,
      }: MsgRevoke): AminoMsgRevoke["value"] => ({
        granter: granter,
        grantee: grantee,
        msgTypeUrl,
      }),
      fromAmino: ({
        granter,
        grantee,
        msgTypeUrl,
      }: AminoMsgRevoke["value"]): MsgRevoke => ({
        granter: granter,
        grantee: grantee,
        msgTypeUrl,
      }),
    },
  };
}
