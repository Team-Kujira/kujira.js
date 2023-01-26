export declare const protobufPackage = "gravity.v1";
/** SignType defines messages that have been signed by an orchestrator */
export declare enum SignType {
    /** SIGN_TYPE_UNSPECIFIED - An unspecified type */
    SIGN_TYPE_UNSPECIFIED = 0,
    /** SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE - A type for multi-sig updates */
    SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE = 1,
    /** SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH - A type for batches */
    SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH = 2,
    UNRECOGNIZED = -1
}
export declare function signTypeFromJSON(object: any): SignType;
export declare function signTypeToJSON(object: SignType): string;
