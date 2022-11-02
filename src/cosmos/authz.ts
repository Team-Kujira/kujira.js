import { AminoConverters } from "@cosmjs/stargate";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";

export interface AminoMsgGrant {
  /** Bech32 account address */
  readonly granter: string;
  /** Bech32 account address */
  readonly grantee: string;
  readonly grant: {
    authorization: {};
    expiration: string;
  };
}

export function createAuthzAminoConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos-sdk/MsgGrant",
      toAmino: ({ granter, grantee, grant }: MsgGrant): AminoMsgGrant => ({
        grantee: grantee,
        granter: granter,
        grant: {
          authorization: {},
          expiration: new Date(
            (grant?.expiration?.seconds.toNumber() || 0) * 1000
          ).toISOString(),
        },
      }),
      fromAmino: ({ granter, grantee, grant }: AminoMsgGrant): MsgGrant => ({
        grantee: grantee,
        granter: granter,
        grant: {
          expiration: Timestamp.fromJSON(grant.expiration),
        },
      }),
    },
  };
}
