import { Rpc } from "cosmjs-types/helpers";

/* eslint-disable */
export const protobufPackage = "kujira.cwica";
/** Msg defines the cwica Msg service. */
export interface Msg {}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}
