import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { AuthzExtension } from "@cosmjs/stargate/build/modules/authz/queries";
import { FeegrantExtension, SlashingExtension } from "@cosmjs/stargate/build/modules";
import { WasmExtension } from "@cosmjs/cosmwasm-stargate";
import Long from "long";
import { DenomExtension } from "./kujira/kujira.denom";
import { OracleExtension } from "./kujira/kujira.oracle";
import { SchedulerExtension } from "./kujira/kujira.scheduler";
export declare const registry: Registry;
export { FinClient, FinQueryClient } from "./fin";
export declare const aminoTypes: (prefix: string) => s.AminoTypes;
export declare type KujiraQueryClient = s.QueryClient & s.AuthExtension & AuthzExtension & s.BankExtension & s.DistributionExtension & DenomExtension & FeegrantExtension & s.GovExtension & OracleExtension & SchedulerExtension & SlashingExtension & s.StakingExtension & s.TxExtension & WasmExtension & s.IbcExtension;
export declare const kujiraQueryClient: ({ rpc, }: {
    rpc: string;
}) => Promise<KujiraQueryClient>;
export declare const msg: {
    authz: {
        msgExec: (a: {
            grantee?: string | undefined;
            msgs?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            grantee?: string | undefined;
            msgs?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgGrant: (a: {
            granter?: string | undefined;
            grantee?: string | undefined;
            grant?: {
                authorization?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            grant?: ({
                authorization?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                authorization?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                }) | undefined;
                expiration?: ({
                    seconds?: string | number | Long.Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (Long.Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long.Long) => Long.Long;
                        and: (other: string | number | Long.Long) => Long.Long;
                        compare: (other: string | number | Long.Long) => number;
                        comp: (other: string | number | Long.Long) => number;
                        divide: (divisor: string | number | Long.Long) => Long.Long;
                        div: (divisor: string | number | Long.Long) => Long.Long;
                        equals: (other: string | number | Long.Long) => boolean;
                        eq: (other: string | number | Long.Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long.Long) => boolean;
                        gt: (other: string | number | Long.Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                        gte: (other: string | number | Long.Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | Long.Long) => boolean;
                        lt: (other: string | number | Long.Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                        lte: (other: string | number | Long.Long) => boolean;
                        modulo: (other: string | number | Long.Long) => Long.Long;
                        mod: (other: string | number | Long.Long) => Long.Long;
                        multiply: (multiplier: string | number | Long.Long) => Long.Long;
                        mul: (multiplier: string | number | Long.Long) => Long.Long;
                        negate: () => Long.Long;
                        neg: () => Long.Long;
                        not: () => Long.Long;
                        notEquals: (other: string | number | Long.Long) => boolean;
                        neq: (other: string | number | Long.Long) => boolean;
                        or: (other: string | number | Long.Long) => Long.Long;
                        shiftLeft: (numBits: number | Long.Long) => Long.Long;
                        shl: (numBits: number | Long.Long) => Long.Long;
                        shiftRight: (numBits: number | Long.Long) => Long.Long;
                        shr: (numBits: number | Long.Long) => Long.Long;
                        shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                        shru: (numBits: number | Long.Long) => Long.Long;
                        subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                        sub: (subtrahend: string | number | Long.Long) => Long.Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long.Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long.Long;
                        xor: (other: string | number | Long.Long) => Long.Long;
                    } & {
                        [x: string]: never;
                        [x: number]: never;
                        [x: symbol]: never;
                    }) | undefined;
                    nanos?: number | undefined;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                }) | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgRevoke: (a: {
            granter?: string | undefined;
            grantee?: string | undefined;
            msgTypeUrl?: string | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            msgTypeUrl?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    bank: {
        msgSend: (a: {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgMultiSend: (a: {
            inputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            outputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            inputs?: ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                })[] & {
                    [x: string]: never;
                    [x: symbol]: never;
                }) | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
            outputs?: ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                })[] & {
                    [x: string]: never;
                    [x: symbol]: never;
                }) | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    distribution: {
        msgFundCommunityPool: (a: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            depositor?: string | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
            depositor?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgSetWithdrawAddress: (a: {
            delegatorAddress?: string | undefined;
            withdrawAddress?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            withdrawAddress?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgWithdrawDelegatorReward: (a: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgWithdrawValidatorCommission: (a: {
            validatorAddress?: string | undefined;
        } & {
            validatorAddress?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    denom: {
        msgBurn: (data: import("./kujira/kujira.denom/types/tx").MsgBurn) => EncodeObject;
        msgChangeAdmin: (data: import("./kujira/kujira.denom/types/tx").MsgChangeAdmin) => EncodeObject;
        msgCreateDenom: (data: import("./kujira/kujira.denom/types/tx").MsgCreateDenom) => EncodeObject;
        msgMint: (data: import("./kujira/kujira.denom/types/tx").MsgMint) => EncodeObject;
    };
    feegrant: {
        msgGrantAllowance: (a: {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgRevokeAllowance: (a: {
            granter?: string | undefined;
            grantee?: string | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    gov: {
        msgDeposit: (a: {
            proposalId?: string | number | Long.Long | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            proposalId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            depositor?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgSubmitProposal: (a: {
            content?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            initialDeposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            proposer?: string | undefined;
        } & {
            content?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            initialDeposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
            proposer?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgVote: (a: {
            proposalId?: string | number | Long.Long | undefined;
            voter?: string | undefined;
            option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
        } & {
            proposalId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            voter?: string | undefined;
            option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgVoteWeighted: (a: {
            proposalId?: string | number | Long.Long | undefined;
            voter?: string | undefined;
            options?: {
                option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposalId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            voter?: string | undefined;
            options?: ({
                option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("cosmjs-types/cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    oracle: {
        msgAggregateExchangeRateVote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRateVote) => EncodeObject;
        msgAggregateExchangeRatePrevote: (data: import("./kujira/kujira.oracle/types/tx").MsgAggregateExchangeRatePrevote) => EncodeObject;
        msgDelegateFeedConsent: (data: import("./kujira/kujira.oracle/types/tx").MsgDelegateFeedConsent) => EncodeObject;
    };
    staking: {
        msgBeginRedelegate: (a: {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgCreateValidator: (a: {
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: {
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            pubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            value?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            commission?: ({
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } & {
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            minSelfDelegation?: string | undefined;
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            pubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            value?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgDelegate: (a: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgEditValidator: (a: {
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            validatorAddress?: string | undefined;
            commissionRate?: string | undefined;
            minSelfDelegation?: string | undefined;
        } & {
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            validatorAddress?: string | undefined;
            commissionRate?: string | undefined;
            minSelfDelegation?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgUndelegate: (a: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    vesting: {
        msgCreateVestingAccount: (a: {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            endTime?: string | number | Long.Long | undefined;
            delayed?: boolean | undefined;
        } & {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
            endTime?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            delayed?: boolean | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    wasm: {
        msgClearAdmin: (a: {
            sender?: string | undefined;
            contract?: string | undefined;
        } & {
            sender?: string | undefined;
            contract?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgExecuteContract: (a: {
            sender?: string | undefined;
            contract?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            sender?: string | undefined;
            contract?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgMigrateContract: (a: {
            sender?: string | undefined;
            contract?: string | undefined;
            codeId?: string | number | Long.Long | undefined;
            msg?: Uint8Array | undefined;
        } & {
            sender?: string | undefined;
            contract?: string | undefined;
            codeId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            msg?: Uint8Array | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgStoreCode: (a: {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: ({
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgInstantiateContract: (a: {
            sender?: string | undefined;
            admin?: string | undefined;
            codeId?: string | number | Long.Long | undefined;
            label?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            sender?: string | undefined;
            admin?: string | undefined;
            codeId?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            label?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            })[] & {
                [x: string]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
        msgUpdateAdmin: (a: {
            sender?: string | undefined;
            newAdmin?: string | undefined;
            contract?: string | undefined;
        } & {
            sender?: string | undefined;
            newAdmin?: string | undefined;
            contract?: string | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
    ibc: {
        msgTrasnfer: (a: {
            sourcePort?: string | undefined;
            sourceChannel?: string | undefined;
            token?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            sender?: string | undefined;
            receiver?: string | undefined;
            timeoutHeight?: {
                revisionNumber?: string | number | Long.Long | undefined;
                revisionHeight?: string | number | Long.Long | undefined;
            } | undefined;
            timeoutTimestamp?: string | number | Long.Long | undefined;
        } & {
            sourcePort?: string | undefined;
            sourceChannel?: string | undefined;
            token?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            sender?: string | undefined;
            receiver?: string | undefined;
            timeoutHeight?: ({
                revisionNumber?: string | number | Long.Long | undefined;
                revisionHeight?: string | number | Long.Long | undefined;
            } & {
                revisionNumber?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                }) | undefined;
                revisionHeight?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & {
                    [x: string]: never;
                    [x: number]: never;
                    [x: symbol]: never;
                }) | undefined;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
            timeoutTimestamp?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
            }) | undefined;
        } & {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
        }) => EncodeObject;
    };
};
