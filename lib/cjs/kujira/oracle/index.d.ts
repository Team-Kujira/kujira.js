import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote } from "./types/tx";
import { MsgAggregateExchangeRatePrevote } from "./types/tx";
import { MsgDelegateFeedConsent } from "./types/tx";
import { OracleExtension, setupOracleExtension } from "./queries";
export declare const types: ((string | {
    encode(message: MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgAggregateExchangeRateVote;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    toJSON(message: MsgAggregateExchangeRateVote): unknown;
    fromPartial(object: {
        salt?: string | undefined;
        exchange_rates?: string | undefined;
        feeder?: string | undefined;
        validator?: string | undefined;
    }): MsgAggregateExchangeRateVote;
})[] | (string | {
    encode(message: MsgAggregateExchangeRatePrevote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgAggregateExchangeRatePrevote;
    fromJSON(object: any): MsgAggregateExchangeRatePrevote;
    toJSON(message: MsgAggregateExchangeRatePrevote): unknown;
    fromPartial(object: {
        hash?: string | undefined;
        feeder?: string | undefined;
        validator?: string | undefined;
    }): MsgAggregateExchangeRatePrevote;
})[] | (string | {
    encode(message: MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
    decode(input: import("protobufjs").Reader | Uint8Array, length?: number | undefined): MsgDelegateFeedConsent;
    fromJSON(object: any): MsgDelegateFeedConsent;
    toJSON(message: MsgDelegateFeedConsent): unknown;
    fromPartial(object: {
        operator?: string | undefined;
        delegate?: string | undefined;
    }): MsgDelegateFeedConsent;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const msg: {
    msgAggregateExchangeRateVote: (data: MsgAggregateExchangeRateVote) => EncodeObject;
    msgAggregateExchangeRatePrevote: (data: MsgAggregateExchangeRatePrevote) => EncodeObject;
    msgDelegateFeedConsent: (data: MsgDelegateFeedConsent) => EncodeObject;
};
export { msg, OracleExtension, setupOracleExtension };
