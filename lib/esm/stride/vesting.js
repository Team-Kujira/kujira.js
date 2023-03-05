import { BaseVestingAccount, Period, } from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
function createBaseStridePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        vestingPeriods: [],
    };
}
export const StridePeriodicVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStridePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStridePeriodicVestingAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        message.vestingPeriods =
            ((_a = object.vestingPeriods) === null || _a === void 0 ? void 0 : _a.map((e) => Period.fromPartial(e))) || [];
        return message;
    },
};
