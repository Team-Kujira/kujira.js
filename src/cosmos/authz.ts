import { AminoConverters } from "@cosmjs/stargate";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";

export interface AminoMsgGrant {
  type: "cosmos.authz.v1beta1.Grant";

  /** Bech32 account address */
  readonly granter: string;
  /** Bech32 account address */
  readonly grantee: string;

  readonly grant: {
    authorization: {
      type: "cosmos.authz.v1beta1.GenericAuthorization";
      value: {
        msg: string;
      };
    };
    expiration: string;
  };
}

export function createAuthzAminoConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos.authz.v1beta1.Grant",
      toAmino: ({ granter, grantee, grant }: MsgGrant): AminoMsgGrant => ({
        type: "cosmos.authz.v1beta1.Grant",
        grantee: grantee,
        granter: granter,
        grant: {
          authorization: {
            type: "cosmos.authz.v1beta1.GenericAuthorization",
            value: {
              msg: GenericAuthorization.decode(
                grant?.authorization?.value || new Uint8Array()
              ).msg,
            },
          },

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
            authorization: {
              typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
              value: GenericAuthorization.encode(
                GenericAuthorization.fromPartial({
                  msg: grant.authorization.value.msg,
                })
              ).finish(),
            },
            expiration: Timestamp.fromPartial({
              seconds: new Date(grant.expiration).getTime() / 1000,
              nanos: 0,
            }),
          },
        }),
    },
  };
}
