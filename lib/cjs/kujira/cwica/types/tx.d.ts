import { Rpc } from "cosmjs-types/helpers";
export declare const protobufPackage = "kujira.cwica";
/** Msg defines the cwica Msg service. */
export interface Msg {
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
}
