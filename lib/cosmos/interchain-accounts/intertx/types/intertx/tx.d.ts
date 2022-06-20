import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";
export declare const protobufPackage = "intertx";
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccount {
    owner: string;
    connection_id: string;
}
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    owner: string;
    connection_id: string;
    msg: Any | undefined;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgRegisterAccount;
    fromJSON(object: any): MsgRegisterAccount;
    toJSON(message: MsgRegisterAccount): unknown;
    fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgRegisterAccountResponse;
    fromJSON(_: any): MsgRegisterAccountResponse;
    toJSON(_: MsgRegisterAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgSubmitTx;
    fromJSON(object: any): MsgSubmitTx;
    toJSON(message: MsgSubmitTx): unknown;
    fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgSubmitTxResponse;
    fromJSON(_: any): MsgSubmitTxResponse;
    toJSON(_: MsgSubmitTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};
/** Msg defines the intertx Msg service. */
export interface Msg {
    /** Register defines a rpc handler for MsgRegisterAccount */
    RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    /** SubmitTx defines a rpc handler for MsgSubmitTx */
    SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
