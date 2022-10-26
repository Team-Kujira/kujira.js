import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface InstantiateMsg {
    internal_resolver: string;
}
export declare type ExecuteMsg = {
    set_resolver: {
        admin: string;
        allowed_kinds: RecordKind[];
        name: string;
    };
} | {
    remove_resolver: {
        name: string;
    };
} | {
    set_record: {
        data: string;
        kind: RecordKind;
        name: string;
    };
} | {
    remove_record: {
        name: string;
    };
} | {
    set_kujira_addr: {
        name?: string | null;
    };
};
export declare type RecordKind = "domain" | "ipfs" | "ip4" | "ip6" | "kujira_addr" | "reverse";
export declare type QueryMsg = {
    resolver: {
        name: string;
    };
} | {
    record: {
        name: string;
    };
} | {
    kujira_addr: {
        addr: string;
    };
};
export interface KujiraAddrResponse {
    name: string;
}
export interface RecordResponse {
    data: string;
    kind: RecordKind;
    name: string;
}
export interface ResolverResponse {
    admin: string;
    allowed_kinds: RecordKind[];
    name: string;
}
export interface RegistryReadOnlyInterface {
    contractAddress: string;
    resolver: ({ name }: {
        name: string;
    }) => Promise<ResolverResponse>;
    record: ({ name }: {
        name: string;
    }) => Promise<RecordResponse>;
    kujiraAddr: ({ addr }: {
        addr: string;
    }) => Promise<KujiraAddrResponse>;
}
export declare class RegistryQueryClient implements RegistryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    resolver: ({ name }: {
        name: string;
    }) => Promise<ResolverResponse>;
    record: ({ name }: {
        name: string;
    }) => Promise<RecordResponse>;
    kujiraAddr: ({ addr, }: {
        addr: string;
    }) => Promise<KujiraAddrResponse>;
}
export interface RegistryInterface extends RegistryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    setResolver: ({ admin, allowedKinds, name, }: {
        admin: string;
        allowedKinds: RecordKind[];
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeResolver: ({ name, }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setRecord: ({ data, kind, name, }: {
        data: string;
        kind: RecordKind;
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeRecord: ({ name, }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setKujiraAddr: ({ name, }: {
        name?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class RegistryClient extends RegistryQueryClient implements RegistryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    setResolver: ({ admin, allowedKinds, name, }: {
        admin: string;
        allowedKinds: RecordKind[];
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeResolver: ({ name, }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setRecord: ({ data, kind, name, }: {
        data: string;
        kind: RecordKind;
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeRecord: ({ name, }: {
        name: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setKujiraAddr: ({ name, }: {
        name?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
