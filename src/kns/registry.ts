import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";

export interface InstantiateMsg {
  internal_resolver: string;
}
export type ExecuteMsg =
  | {
      set_resolver: {
        admin: string;
        allowed_kinds: RecordKind[];
        name: string;
      };
    }
  | {
      remove_resolver: {
        name: string;
      };
    }
  | {
      set_record: {
        data: string;
        kind: RecordKind;
        name: string;
      };
    }
  | {
      remove_record: {
        name: string;
      };
    }
  | {
      set_kujira_addr: {
        name?: string | null;
      };
    };
export type RecordKind =
  | "domain"
  | "ipfs"
  | "ip4"
  | "ip6"
  | "kujira_addr"
  | "reverse";
export type QueryMsg =
  | {
      addr: {
        name: string;
        prefix?: string | null;
      };
    }
  | {
      kujira_addr: {
        addr: string;
      };
    }
  | {
      name: {
        addr: string;
      };
    }
  | {
      record: {
        name: string;
      };
    }
  | {
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
  addr: ({
    name,
    prefix,
  }: {
    name: string;
    prefix?: string;
  }) => Promise<AddrResponse>;
  kujiraAddr: ({ addr }: { addr: string }) => Promise<NameResponse>;
  name: ({ addr }: { addr: string }) => Promise<NameResponse>;
  record: ({ name }: { name: string }) => Promise<RecordResponse>;
  resolver: ({ name }: { name: string }) => Promise<ResolverResponse>;
}
export class RegistryQueryClient implements RegistryReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.addr = this.addr.bind(this);
    this.kujiraAddr = this.kujiraAddr.bind(this);
    this.name = this.name.bind(this);
    this.record = this.record.bind(this);
    this.resolver = this.resolver.bind(this);
  }

  addr = async ({
    name,
    prefix,
  }: {
    name: string;
    prefix?: string;
  }): Promise<AddrResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      addr: {
        name,
        prefix,
      },
    });
  };
  kujiraAddr = async ({ addr }: { addr: string }): Promise<NameResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      kujira_addr: {
        addr,
      },
    });
  };
  name = async ({ addr }: { addr: string }): Promise<NameResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      name: {
        addr,
      },
    });
  };
  record = async ({ name }: { name: string }): Promise<RecordResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      record: {
        name,
      },
    });
  };
  resolver = async ({ name }: { name: string }): Promise<ResolverResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      resolver: {
        name,
      },
    });
  };
}
export interface RegistryInterface extends RegistryReadOnlyInterface {
  contractAddress: string;
  sender: string;
  setResolver: (
    {
      admin,
      allowedKinds,
      name,
    }: {
      admin: string;
      allowedKinds: RecordKind[];
      name: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  removeResolver: (
    {
      name,
    }: {
      name: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  setRecord: (
    {
      data,
      kind,
      name,
    }: {
      data: string;
      kind: RecordKind;
      name: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  removeRecord: (
    {
      name,
    }: {
      name: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  setKujiraAddr: (
    {
      name,
    }: {
      name?: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class RegistryClient
  extends RegistryQueryClient
  implements RegistryInterface
{
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setResolver = this.setResolver.bind(this);
    this.removeResolver = this.removeResolver.bind(this);
    this.setRecord = this.setRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.setKujiraAddr = this.setKujiraAddr.bind(this);
  }

  setResolver = async (
    {
      admin,
      allowedKinds,
      name,
    }: {
      admin: string;
      allowedKinds: RecordKind[];
      name: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_resolver: {
          admin,
          allowed_kinds: allowedKinds,
          name,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeResolver = async (
    {
      name,
    }: {
      name: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_resolver: {
          name,
        },
      },
      fee,
      memo,
      funds
    );
  };
  setRecord = async (
    {
      data,
      kind,
      name,
    }: {
      data: string;
      kind: RecordKind;
      name: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_record: {
          data,
          kind,
          name,
        },
      },
      fee,
      memo,
      funds
    );
  };
  removeRecord = async (
    {
      name,
    }: {
      name: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_record: {
          name,
        },
      },
      fee,
      memo,
      funds
    );
  };
  setKujiraAddr = async (
    {
      name,
    }: {
      name?: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_kujira_addr: {
          name,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
