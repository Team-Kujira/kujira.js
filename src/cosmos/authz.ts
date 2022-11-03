import { AminoConverters } from "@cosmjs/stargate";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";

export interface AminoMsgGrant {
  type: "cosmos-sdk/MsgGrant";

  /** Bech32 account address */
  readonly granter: string;
  /** Bech32 account address */
  readonly grantee: string;

  readonly grant: {
    // authorization: {
    //   "@type": "/cosmos.authz.v1beta1.GenericAuthorization";
    //   msg: string;
    // };
    authorization?: Any;
    expiration: string;
  };
}

export function createAuthzAminoConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos-sdk/MsgGrant",
      toAmino: ({ granter, grantee, grant }: MsgGrant): AminoMsgGrant => ({
        type: "cosmos-sdk/MsgGrant",
        grantee: grantee,
        granter: granter,
        grant: {
          authorization: grant?.authorization,

          expiration: grant?.expiration
            ? new Date(
                grant?.expiration?.seconds.toNumber() * 1000
              ).toISOString()
            : new Date().toISOString(),
        },
      }),
      fromAmino: ({ granter, grantee, grant }: AminoMsgGrant): MsgGrant =>
        MsgGrant.fromPartial({
          grantee: grantee,
          granter: granter,
          grant: {
            authorization: grant.authorization,
            expiration: Timestamp.fromPartial({
              seconds: new Date(grant.expiration).getTime() / 1000,
              nanos: 0,
            }),
          },
        }),
    },
  };
}
