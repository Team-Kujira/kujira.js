import {
  QueryClient,
  createProtobufRpcClient,
  GovParamsType,
  GovProposalId,
  setupGovExtension as original,
} from "@cosmjs/stargate";
import { longify } from "@cosmjs/stargate/build/queryclient";
import {
  QueryClientImpl,
  QueryDepositResponse,
  QueryDepositsResponse,
  QueryParamsResponse,
  QueryProposalResponse,
  QueryProposalsResponse,
  QueryTallyResultResponse,
  QueryVoteResponse,
  QueryVotesResponse,
} from "cosmjs-types/cosmos/gov/v1beta1/query";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { ProposalStatus } from "cosmjs-types/cosmos/gov/v1beta1/gov";

export interface GovExtension {
  readonly gov: {
    readonly params: (
      parametersType: GovParamsType
    ) => Promise<QueryParamsResponse>;
    readonly proposals: (
      proposalStatus: ProposalStatus,
      depositor: string,
      voter: string,
      pagination?: PageRequest
    ) => Promise<QueryProposalsResponse>;
    readonly proposal: (
      proposalId: GovProposalId
    ) => Promise<QueryProposalResponse>;
    readonly deposits: (
      proposalId: GovProposalId,
      pagination?: PageRequest
    ) => Promise<QueryDepositsResponse>;
    readonly deposit: (
      proposalId: GovProposalId,
      depositorAddress: string
    ) => Promise<QueryDepositResponse>;
    readonly tally: (
      proposalId: GovProposalId
    ) => Promise<QueryTallyResultResponse>;
    readonly votes: (
      proposalId: GovProposalId,
      pagination?: PageRequest
    ) => Promise<QueryVotesResponse>;
    readonly vote: (
      proposalId: GovProposalId,
      voterAddress: string
    ) => Promise<QueryVoteResponse>;
  };
}

export function setupGovExtension(base: QueryClient): GovExtension {
  const rpc = createProtobufRpcClient(base);

  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    gov: {
      ...original(base).gov,
      proposals: async (
        proposalStatus: ProposalStatus,
        depositorAddress: string,
        voterAddress: string,
        pagination?: PageRequest
      ) => {
        const response = await queryService.Proposals({
          proposalStatus,
          depositor: depositorAddress,
          voter: voterAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      deposits: async (proposalId: GovProposalId, pagination?: PageRequest) => {
        const response = await queryService.Deposits({
          proposalId: longify(proposalId),
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      votes: async (proposalId: GovProposalId, pagination?: PageRequest) => {
        const response = await queryService.Votes({
          proposalId: longify(proposalId),
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
    },
  };
}
