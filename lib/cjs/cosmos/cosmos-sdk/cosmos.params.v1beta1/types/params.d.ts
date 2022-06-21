import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmos.params.v1beta1";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ParameterChangeProposal;
    fromJSON(object: any): ParameterChangeProposal;
    toJSON(message: ParameterChangeProposal): unknown;
    fromPartial(object: DeepPartial<ParameterChangeProposal>): ParameterChangeProposal;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ParamChange;
    fromJSON(object: any): ParamChange;
    toJSON(message: ParamChange): unknown;
    fromPartial(object: DeepPartial<ParamChange>): ParamChange;
};
