import Long from "long";
import { configure, util } from "protobufjs/minimal";
export * from "./amino";
export * from "./denom";
export { FinClient, FinQueryClient } from "./fin";
export * from "./ibc";
export * as kns from "./kns";
export * from "./msg";
export * from "./network";
export * from "./pairs";
export * from "./queryClient";
export * from "./registry";
export * from "./usk";
export * from "./wallets";

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
