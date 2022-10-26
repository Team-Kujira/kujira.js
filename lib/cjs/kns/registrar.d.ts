import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr } from "./common";
export declare type Uint64 = string;
export declare type Decimal = string;
export declare type Uint128 = string;
export interface InstantiateMsg {
    base_duration: Uint64;
    can_register: boolean;
    collection_uri: string;
    default_funds_split: [string, Decimal][];
    grace_duration: Uint64;
    minter: string;
    name: string;
    price_denom: string;
    price_tier_amounts: Uint128[];
    price_tier_lengths: Uint64[];
    registry: string;
    root: string;
    symbol: string;
    token_uri_base: string;
}
export declare type ExecuteMsg = {
    transfer_nft: {
        recipient: string;
        token_id: string;
    };
} | {
    send_nft: {
        contract: string;
        msg: Binary;
        token_id: string;
    };
} | {
    approve: {
        expires?: Expiration | null;
        spender: string;
        token_id: string;
    };
} | {
    revoke: {
        spender: string;
        token_id: string;
    };
} | {
    approve_all: {
        expires?: Expiration | null;
        operator: string;
    };
} | {
    revoke_all: {
        operator: string;
    };
} | {
    mint: MintMsgForRecordInfo;
} | {
    burn: {
        token_id: string;
    };
} | {
    extension: {
        msg: RegistrarExecuteMsg;
    };
};
export declare type Binary = string;
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {};
};
export declare type Timestamp = Uint64;
export declare type RegistrarExecuteMsg = {
    configure: {
        admin?: string | null;
        base_duration?: Uint64 | null;
        can_register?: boolean | null;
        collection_uri?: string | null;
        default_funds_split?: [string, Decimal][] | null;
        grace_duration?: Uint64 | null;
        minter?: string | null;
        price_denom?: string | null;
        price_tier_amounts?: Uint128[] | null;
        price_tier_lengths?: Uint64[] | null;
        registry?: string | null;
        token_uri_base?: string | null;
    };
} | {
    extend: {
        duration: Uint64;
        token_id: string;
    };
} | {
    register: {
        record_data: string;
        record_kind: RecordKind;
        token_id: string;
    };
};
export declare type RecordKind = "domain" | "ipfs" | "ip4" | "ip6" | "kujira_addr" | "reverse";
export interface MintMsgForRecordInfo {
    extension: RecordInfo;
    owner: string;
    token_id: string;
    token_uri?: string | null;
}
export interface RecordInfo {
    expiration: Uint64;
}
export declare type QueryMsg = {
    owner_of: {
        include_expired?: boolean | null;
        token_id: string;
    };
} | {
    approval: {
        include_expired?: boolean | null;
        spender: string;
        token_id: string;
    };
} | {
    approvals: {
        include_expired?: boolean | null;
        token_id: string;
    };
} | {
    all_operators: {
        include_expired?: boolean | null;
        limit?: number | null;
        owner: string;
        start_after?: string | null;
    };
} | {
    num_tokens: {};
} | {
    contract_info: {};
} | {
    nft_info: {
        token_id: string;
    };
} | {
    all_nft_info: {
        include_expired?: boolean | null;
        token_id: string;
    };
} | {
    tokens: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
    };
} | {
    all_tokens: {
        limit?: number | null;
        start_after?: string | null;
    };
} | {
    minter: {};
} | {
    config: {};
} | {
    domain_info: {
        name: string;
    };
};
export interface AllNftInfoResponseForRecordInfo {
    access: OwnerOfResponse;
    info: NftInfoResponseForRecordInfo;
}
export interface OwnerOfResponse {
    approvals: Approval[];
    owner: string;
}
export interface Approval {
    expires: Expiration;
    spender: string;
}
export interface NftInfoResponseForRecordInfo {
    extension: RecordInfo;
    token_uri?: string | null;
}
export interface OperatorsResponse {
    operators: Approval[];
}
export interface TokensResponse {
    tokens: string[];
}
export interface ApprovalResponse {
    approval: Approval;
}
export interface ApprovalsResponse {
    approvals: Approval[];
}
export interface ConfigResponse {
    admin: string;
    base_duration: Uint64;
    can_register: boolean;
    default_funds_split: FundsRecipient[];
    grace_duration: Uint64;
    price_denom: string;
    price_tier_amounts: Uint128[];
    price_tier_lengths: Uint64[];
    registry: string;
    root: string;
}
export interface FundsRecipient {
    fraction: Decimal;
    recipient: Addr;
}
export interface ContractInfoResponse {
    collection_uri: string;
    name: string;
    symbol: string;
}
export interface DomainInfoResponse {
    base_price: Uint128;
    is_available: boolean;
}
export interface MinterResponse {
    minter: string;
}
export interface NumTokensResponse {
    count: number;
}
export interface RegistrarReadOnlyInterface {
    contractAddress: string;
    ownerOf: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId, }: {
        includeExpired?: boolean;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter, }: {
        includeExpired?: boolean;
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<OperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId, }: {
        tokenId: string;
    }) => Promise<NftInfoResponseForRecordInfo>;
    allNftInfo: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean;
        tokenId: string;
    }) => Promise<AllNftInfoResponseForRecordInfo>;
    tokens: ({ limit, owner, startAfter, }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<TokensResponse>;
    minter: () => Promise<MinterResponse>;
    config: () => Promise<ConfigResponse>;
    domainInfo: ({ name }: {
        name: string;
    }) => Promise<DomainInfoResponse>;
}
export declare class RegistrarQueryClient implements RegistrarReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    ownerOf: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean | undefined;
        tokenId: string;
    }) => Promise<OwnerOfResponse>;
    approval: ({ includeExpired, spender, tokenId, }: {
        includeExpired?: boolean | undefined;
        spender: string;
        tokenId: string;
    }) => Promise<ApprovalResponse>;
    approvals: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean | undefined;
        tokenId: string;
    }) => Promise<ApprovalsResponse>;
    allOperators: ({ includeExpired, limit, owner, startAfter, }: {
        includeExpired?: boolean | undefined;
        limit?: number | undefined;
        owner: string;
        startAfter?: string | undefined;
    }) => Promise<OperatorsResponse>;
    numTokens: () => Promise<NumTokensResponse>;
    contractInfo: () => Promise<ContractInfoResponse>;
    nftInfo: ({ tokenId, }: {
        tokenId: string;
    }) => Promise<NftInfoResponseForRecordInfo>;
    allNftInfo: ({ includeExpired, tokenId, }: {
        includeExpired?: boolean | undefined;
        tokenId: string;
    }) => Promise<AllNftInfoResponseForRecordInfo>;
    tokens: ({ limit, owner, startAfter, }: {
        limit?: number | undefined;
        owner: string;
        startAfter?: string | undefined;
    }) => Promise<TokensResponse>;
    allTokens: ({ limit, startAfter, }: {
        limit?: number | undefined;
        startAfter?: string | undefined;
    }) => Promise<TokensResponse>;
    minter: () => Promise<MinterResponse>;
    config: () => Promise<ConfigResponse>;
    domainInfo: ({ name, }: {
        name: string;
    }) => Promise<DomainInfoResponse>;
}
export interface RegistrarInterface extends RegistrarReadOnlyInterface {
    contractAddress: string;
    sender: string;
    transferNft: ({ recipient, tokenId, }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId, }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId, }: {
        expires?: Expiration;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId, }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator, }: {
        expires?: Expiration;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator, }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri, }: {
        extension: RecordInfo;
        owner: string;
        tokenId: string;
        tokenUri?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId, }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    extension: ({ msg, }: {
        msg: RegistrarExecuteMsg;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class RegistrarClient extends RegistrarQueryClient implements RegistrarInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    transferNft: ({ recipient, tokenId, }: {
        recipient: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    sendNft: ({ contract, msg, tokenId, }: {
        contract: string;
        msg: Binary;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approve: ({ expires, spender, tokenId, }: {
        expires?: Expiration | undefined;
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revoke: ({ spender, tokenId, }: {
        spender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    approveAll: ({ expires, operator, }: {
        expires?: Expiration | undefined;
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    revokeAll: ({ operator, }: {
        operator: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    mint: ({ extension, owner, tokenId, tokenUri, }: {
        extension: RecordInfo;
        owner: string;
        tokenId: string;
        tokenUri?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ tokenId, }: {
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    extension: ({ msg, }: {
        msg: RegistrarExecuteMsg;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
