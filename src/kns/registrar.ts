import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Addr } from "./common";

export type Uint64 = string;
export type Decimal = string;
export type Uint128 = string;
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
export type ExecuteMsg =
  | {
      transfer_nft: {
        recipient: string;
        token_id: string;
      };
    }
  | {
      send_nft: {
        contract: string;
        msg: Binary;
        token_id: string;
      };
    }
  | {
      approve: {
        expires?: Expiration | null;
        spender: string;
        token_id: string;
      };
    }
  | {
      revoke: {
        spender: string;
        token_id: string;
      };
    }
  | {
      approve_all: {
        expires?: Expiration | null;
        operator: string;
      };
    }
  | {
      revoke_all: {
        operator: string;
      };
    }
  | {
      mint: MintMsgForRecordInfo;
    }
  | {
      burn: {
        token_id: string;
      };
    }
  | {
      extension: {
        msg: RegistrarExecuteMsg;
      };
    };
export type Binary = string;
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {};
    };
export type Timestamp = Uint64;
export type RegistrarExecuteMsg =
  | {
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
    }
  | {
      extend: {
        duration: Uint64;
        token_id: string;
      };
    }
  | {
      register: {
        record_data: string;
        record_kind: RecordKind;
        token_id: string;
      };
    };
export type RecordKind =
  | "domain"
  | "ipfs"
  | "ip4"
  | "ip6"
  | "kujira_addr"
  | "reverse";
export interface MintMsgForRecordInfo {
  extension: RecordInfo;
  owner: string;
  token_id: string;
  token_uri?: string | null;
}
export interface RecordInfo {
  expiration: Uint64;
}
export type QueryMsg =
  | {
      owner_of: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      approval: {
        include_expired?: boolean | null;
        spender: string;
        token_id: string;
      };
    }
  | {
      approvals: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      all_operators: {
        include_expired?: boolean | null;
        limit?: number | null;
        owner: string;
        start_after?: string | null;
      };
    }
  | {
      num_tokens: {};
    }
  | {
      contract_info: {};
    }
  | {
      nft_info: {
        token_id: string;
      };
    }
  | {
      all_nft_info: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      tokens: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
      };
    }
  | {
      all_tokens: {
        limit?: number | null;
        start_after?: string | null;
      };
    }
  | {
      minter: {};
    }
  | {
      config: {};
    }
  | {
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
  ownerOf: ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<OwnerOfResponse>;
  approval: ({
    includeExpired,
    spender,
    tokenId,
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }) => Promise<ApprovalResponse>;
  approvals: ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<ApprovalsResponse>;
  allOperators: ({
    includeExpired,
    limit,
    owner,
    startAfter,
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<OperatorsResponse>;
  numTokens: () => Promise<NumTokensResponse>;
  contractInfo: () => Promise<ContractInfoResponse>;
  nftInfo: ({
    tokenId,
  }: {
    tokenId: string;
  }) => Promise<NftInfoResponseForRecordInfo>;
  allNftInfo: ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<AllNftInfoResponseForRecordInfo>;
  tokens: ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  allTokens: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  minter: () => Promise<MinterResponse>;
  config: () => Promise<ConfigResponse>;
  domainInfo: ({ name }: { name: string }) => Promise<DomainInfoResponse>;
}
export class RegistrarQueryClient implements RegistrarReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.ownerOf = this.ownerOf.bind(this);
    this.approval = this.approval.bind(this);
    this.approvals = this.approvals.bind(this);
    this.allOperators = this.allOperators.bind(this);
    this.numTokens = this.numTokens.bind(this);
    this.contractInfo = this.contractInfo.bind(this);
    this.nftInfo = this.nftInfo.bind(this);
    this.allNftInfo = this.allNftInfo.bind(this);
    this.tokens = this.tokens.bind(this);
    this.allTokens = this.allTokens.bind(this);
    this.minter = this.minter.bind(this);
    this.config = this.config.bind(this);
    this.domainInfo = this.domainInfo.bind(this);
  }

  ownerOf = async ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<OwnerOfResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_of: {
        include_expired: includeExpired,
        token_id: tokenId,
      },
    });
  };
  approval = async ({
    includeExpired,
    spender,
    tokenId,
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }): Promise<ApprovalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approval: {
        include_expired: includeExpired,
        spender,
        token_id: tokenId,
      },
    });
  };
  approvals = async ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<ApprovalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approvals: {
        include_expired: includeExpired,
        token_id: tokenId,
      },
    });
  };
  allOperators = async ({
    includeExpired,
    limit,
    owner,
    startAfter,
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<OperatorsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_operators: {
        include_expired: includeExpired,
        limit,
        owner,
        start_after: startAfter,
      },
    });
  };
  numTokens = async (): Promise<NumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      num_tokens: {},
    });
  };
  contractInfo = async (): Promise<ContractInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      contract_info: {},
    });
  };
  nftInfo = async ({
    tokenId,
  }: {
    tokenId: string;
  }): Promise<NftInfoResponseForRecordInfo> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_info: {
        token_id: tokenId,
      },
    });
  };
  allNftInfo = async ({
    includeExpired,
    tokenId,
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<AllNftInfoResponseForRecordInfo> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_nft_info: {
        include_expired: includeExpired,
        token_id: tokenId,
      },
    });
  };
  tokens = async ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<TokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      tokens: {
        limit,
        owner,
        start_after: startAfter,
      },
    });
  };
  allTokens = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<TokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_tokens: {
        limit,
        start_after: startAfter,
      },
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      minter: {},
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  domainInfo = async ({
    name,
  }: {
    name: string;
  }): Promise<DomainInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      domain_info: {
        name,
      },
    });
  };
}
export interface RegistrarInterface extends RegistrarReadOnlyInterface {
  contractAddress: string;
  sender: string;
  transferNft: (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  sendNft: (
    {
      contract,
      msg,
      tokenId,
    }: {
      contract: string;
      msg: Binary;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  approve: (
    {
      expires,
      spender,
      tokenId,
    }: {
      expires?: Expiration;
      spender: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  revoke: (
    {
      spender,
      tokenId,
    }: {
      spender: string;
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  approveAll: (
    {
      expires,
      operator,
    }: {
      expires?: Expiration;
      operator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  revokeAll: (
    {
      operator,
    }: {
      operator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  mint: (
    {
      extension,
      owner,
      tokenId,
      tokenUri,
    }: {
      extension: RecordInfo;
      owner: string;
      tokenId: string;
      tokenUri?: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  burn: (
    {
      tokenId,
    }: {
      tokenId: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  extension: (
    {
      msg,
    }: {
      msg: RegistrarExecuteMsg;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class RegistrarClient
  extends RegistrarQueryClient
  implements RegistrarInterface
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
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.extension = this.extension.bind(this);
  }

  transferNft = async (
    {
      recipient,
      tokenId,
    }: {
      recipient: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        transfer_nft: {
          recipient,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  sendNft = async (
    {
      contract,
      msg,
      tokenId,
    }: {
      contract: string;
      msg: Binary;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        send_nft: {
          contract,
          msg,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  approve = async (
    {
      expires,
      spender,
      tokenId,
    }: {
      expires?: Expiration;
      spender: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        approve: {
          expires,
          spender,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  revoke = async (
    {
      spender,
      tokenId,
    }: {
      spender: string;
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        revoke: {
          spender,
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  approveAll = async (
    {
      expires,
      operator,
    }: {
      expires?: Expiration;
      operator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        approve_all: {
          expires,
          operator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  revokeAll = async (
    {
      operator,
    }: {
      operator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        revoke_all: {
          operator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  mint = async (
    {
      extension,
      owner,
      tokenId,
      tokenUri,
    }: {
      extension: RecordInfo;
      owner: string;
      tokenId: string;
      tokenUri?: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        mint: {
          extension,
          owner,
          token_id: tokenId,
          token_uri: tokenUri,
        },
      },
      fee,
      memo,
      funds
    );
  };
  burn = async (
    {
      tokenId,
    }: {
      tokenId: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        burn: {
          token_id: tokenId,
        },
      },
      fee,
      memo,
      funds
    );
  };
  extension = async (
    {
      msg,
    }: {
      msg: RegistrarExecuteMsg;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg,
        },
      },
      fee,
      memo,
      funds
    );
  };
}
