import { AminoConverters } from "@cosmjs/stargate";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";

export interface AminoMsgGrant {
  /** Bech32 account address */
  readonly granter: string;
  /** Bech32 account address */
  readonly grantee: string;
}

export function createAuthzAminoConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos-sdk/MsgGrant",
      toAmino: ({ granter, grantee }: MsgGrant): AminoMsgGrant => ({
        grantee: grantee,
        granter: granter,
      }),
      fromAmino: ({ granter, grantee }: AminoMsgGrant): MsgGrant =>
        MsgGrant.fromPartial({
          grantee: grantee,
          granter: granter,
        }),
    },
  };
}
