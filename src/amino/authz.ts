import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters, Coin } from "@cosmjs/stargate";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import {
  AcceptedMessageKeysFilter,
  ContractExecutionAuthorization,
  MaxFundsLimit,
} from "cosmjs-types/cosmwasm/wasm/v1/authz";
import Long from "long";

type AminoGrant = {
  expiration?: string;
  authorization: { type: string; value: any };
};

export interface AminoMsgGrant extends AminoMsg {
  readonly type: "cosmos-sdk/MsgGrant";
  readonly value: {
    readonly granter: string;
    readonly grantee: string;
    readonly grant?: AminoGrant;
  };
}

export interface AminoMsgRevoke extends AminoMsg {
  readonly type: "cosmos-sdk/MsgRevoke";
  readonly value: {
    readonly granter: string;
    readonly grantee: string;
    readonly msg_type_url: string;
  };
}

const grantToAmino = (grant: Grant): AminoGrant => {
  const expiration = new Date(
    Math.floor(grant.expiration?.seconds.toNumber() || 0) * 1000
  )
    .toISOString()
    .replace(/\.\d+Z/, "Z");

  switch (grant.authorization?.typeUrl) {
    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      const contractExecutionAuthorization =
        ContractExecutionAuthorization.decode(grant.authorization.value);

      const grants = contractExecutionAuthorization.grants.map((g) => ({
        contract: g.contract,
        filter: g.filter && {
          type: "wasm/AcceptedMessageKeysFilter",
          value: {
            keys: AcceptedMessageKeysFilter.decode(g.filter.value).keys,
          },
        },
        limit: g.limit && {
          type: "wasm/MaxFundsLimit",
          value: {
            amounts: MaxFundsLimit.decode(g.limit.value).amounts,
          },
        },
      }));

      return {
        expiration,
        authorization: {
          type: "wasm/ContractExecutionAuthorization",
          value: { grants },
        },
      };
    default:
      throw new Error(
        `${grant.authorization?.typeUrl} not supported for Ledger`
      );
  }
};

const grantFromAmino = (grant: AminoGrant): Grant => {
  const expiration =
    grant.expiration &&
    Long.fromNumber(new Date(grant.expiration).getTime() / 1000);

  switch (grant.authorization.type) {
    case "wasm/ContractExecutionAuthorization":
      return {
        expiration: expiration ? { seconds: expiration, nanos: 0 } : undefined,
        authorization: {
          typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
          value: ContractExecutionAuthorization.encode({
            grants: grant.authorization.value.grants.map(
              (g: {
                contract: any;
                filter: { value: { keys: string[] } };
                limit: { value: { amounts: Coin[] } };
              }) => ({
                contract: g.contract,
                filter: {
                  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                  value: AcceptedMessageKeysFilter.encode({
                    keys: g.filter.value.keys,
                  }).finish(),
                },
                limit: {
                  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                  value: MaxFundsLimit.encode({
                    amounts: g.limit.value.amounts,
                  }).finish(),
                },
              })
            ),
          }).finish(),
        },
      };
    default:
      throw new Error(`${grant.authorization?.type} not supported from Ledger`);
  }
};

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
        grant: grant && grantToAmino(grant),
      }),
      fromAmino: ({
        granter,
        grantee,
        grant,
      }: AminoMsgGrant["value"]): MsgGrant => {
        return {
          granter: granter,
          grantee: grantee,
          grant: grant && grantFromAmino(grant),
        };
      },
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
        msg_type_url: msgTypeUrl,
      }),
      fromAmino: ({
        granter,
        grantee,
        msg_type_url,
      }: AminoMsgRevoke["value"]): MsgRevoke => ({
        granter: granter,
        grantee: grantee,
        msgTypeUrl: msg_type_url,
      }),
    },
  };
}
