/* eslint-disable */
export const protobufPackage = "gravity.v1";
/** SignType defines messages that have been signed by an orchestrator */
export var SignType;
(function (SignType) {
    /** SIGN_TYPE_UNSPECIFIED - An unspecified type */
    SignType[SignType["SIGN_TYPE_UNSPECIFIED"] = 0] = "SIGN_TYPE_UNSPECIFIED";
    /** SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE - A type for multi-sig updates */
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE"] = 1] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
    /** SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH - A type for batches */
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH"] = 2] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
    SignType[SignType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignType || (SignType = {}));
export function signTypeFromJSON(object) {
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
export function signTypeToJSON(object) {
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
