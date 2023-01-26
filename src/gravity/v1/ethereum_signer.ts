/* eslint-disable */
export const protobufPackage = "gravity.v1";
/** SignType defines messages that have been signed by an orchestrator */

export enum SignType {
  /** SIGN_TYPE_UNSPECIFIED - An unspecified type */
  SIGN_TYPE_UNSPECIFIED = 0,

  /** SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE - A type for multi-sig updates */
  SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE = 1,

  /** SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH - A type for batches */
  SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH = 2,
  UNRECOGNIZED = -1,
}
export function signTypeFromJSON(object: any): SignType {
  switch (object) {
    case 0:
    case "SIGN_TYPE_UNSPECIFIED":
      return SignType.SIGN_TYPE_UNSPECIFIED;

    case 1:
    case "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE":
      return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE;

    case 2:
    case "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH":
      return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignType.UNRECOGNIZED;
  }
}
export function signTypeToJSON(object: SignType): string {
  switch (object) {
    case SignType.SIGN_TYPE_UNSPECIFIED:
      return "SIGN_TYPE_UNSPECIFIED";

    case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE:
      return "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";

    case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH:
      return "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";

    case SignType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
