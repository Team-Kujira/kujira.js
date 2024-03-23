import { Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote } from "./types/tx";
import { MsgAggregateExchangeRatePrevote } from "./types/tx";
import { MsgDelegateFeedConsent } from "./types/tx";
import { setupOracleExtension } from "./queries";
export const types = [
    ["/kujira.oracle.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote],
    [
        "/kujira.oracle.MsgAggregateExchangeRatePrevote",
        MsgAggregateExchangeRatePrevote,
    ],
    ["/kujira.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const msg = {
    msgAggregateExchangeRateVote: (data) => ({
        typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromPartial(data),
    }),
    msgAggregateExchangeRatePrevote: (data) => ({
        typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.fromPartial(data),
    }),
    msgDelegateFeedConsent: (data) => ({
        typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromPartial(data),
    }),
};
export { msg, setupOracleExtension };
