import { Params, State } from "../../../ethermint/evm/v1/evm";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../../../../types";
export declare const protobufPackage = "ethermint.evm.v1";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccount[];
    /** params defines all the parameters of the module. */
    params: Params | undefined;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccount {
    /** address defines an ethereum hex formated address of an account */
    address: string;
    /** code defines the hex bytes of the account code. */
    code: string;
    /** storage defines the set of state key values for the account. */
    storage: State[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisAccount: {
    encode(message: GenesisAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisAccount;
    fromJSON(object: any): GenesisAccount;
    toJSON(message: GenesisAccount): unknown;
    fromPartial(object: DeepPartial<GenesisAccount>): GenesisAccount;
};
