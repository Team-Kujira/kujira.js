"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StridePeriodicVestingAccount = void 0;
const vesting_1 = require("cosmjs-types/cosmos/vesting/v1beta1/vesting");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseStridePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        vestingPeriods: [],
    };
}
exports.StridePeriodicVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            vesting_1.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            vesting_1.Period.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.baseVestingAccount = vesting_1.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
                ? vesting_1.BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        message.vestingPeriods =
            ((_a = object.vestingPeriods) === null || _a === void 0 ? void 0 : _a.map((e) => vesting_1.Period.fromPartial(e))) || [];
        return message;
    },
};
