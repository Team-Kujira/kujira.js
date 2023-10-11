import {
  GovParamsType,
  GovProposalId,
  QueryClient,
  createProtobufRpcClient,
} from "@cosmjs/stargate";
import { longify } from "@cosmjs/stargate/build/queryclient";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { ProposalStatus } from "cosmjs-types/cosmos/gov/v1/gov";
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
} from "cosmjs-types/cosmos/gov/v1/query";

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
      params: async (
        parametersType: GovParamsType
      ): Promise<QueryParamsResponse> => {
        const response = await queryService.Params({
          paramsType: parametersType,
        });
        return response;
      },
      proposal: async (
        proposalId: GovProposalId
      ): Promise<QueryProposalResponse> => {
        const response = await queryService.Proposal({
          proposalId: longify(proposalId),
        });
        return response;
      },

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
      deposit: async (
        proposalId: GovProposalId,
        depositorAddress: string
      ): Promise<QueryDepositResponse> => {
        const response = await queryService.Deposit({
          proposalId: longify(proposalId),
          depositor: depositorAddress,
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
      vote: async (
        proposalId: GovProposalId,
        voterAddress: string
      ): Promise<QueryVoteResponse> => {
        const response = await queryService.Vote({
          proposalId: longify(proposalId),
          voter: voterAddress,
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
      tally: async (
        proposalId: GovProposalId
      ): Promise<QueryTallyResultResponse> => {
        const response = await queryService.TallyResult({
          proposalId: longify(proposalId),
        });
        return response;
      },
    },
  };
}
