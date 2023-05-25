import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface InstantiateMsg {
    internal_resolver: string;
}
export type ExecuteMsg = {
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
export type RecordKind = "domain" | "ipfs" | "ip4" | "ip6" | "kujira_addr" | "reverse";
export type QueryMsg = {
    addr: {
        name: string;
        prefix?: string | null;
    };
} | {
    kujira_addr: {
        addr: string;
    };
} | {
    name: {
        addr: string;
    };
} | {
    record: {
        name: string;
    };
} | {
    resolver: {
        name: string;
    };
};
export interface AddrResponse {
    addr: string;
}
export interface NameResponse {
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
    addr: ({ name, prefix, }: {
        name: string;
        prefix?: string;
    }) => Promise<AddrResponse>;
    kujiraAddr: ({ addr }: {
        addr: string;
    }) => Promise<NameResponse>;
    name: ({ addr }: {
        addr: string;
    }) => Promise<NameResponse>;
    record: ({ name }: {
        name: string;
    }) => Promise<RecordResponse>;
    resolver: ({ name }: {
        name: string;
    }) => Promise<ResolverResponse>;
}
export declare class RegistryQueryClient implements RegistryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    addr: ({ name, prefix, }: {
        name: string;
        prefix?: string | undefined;
    }) => Promise<AddrResponse>;
    kujiraAddr: ({ addr }: {
        addr: string;
    }) => Promise<NameResponse>;
    name: ({ addr }: {
        addr: string;
    }) => Promise<NameResponse>;
    record: ({ name }: {
        name: string;
    }) => Promise<RecordResponse>;
    resolver: ({ name }: {
        name: string;
    }) => Promise<ResolverResponse>;
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
