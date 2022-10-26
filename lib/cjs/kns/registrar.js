"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarClient = exports.RegistrarQueryClient = void 0;
class RegistrarQueryClient {
    constructor(client, contractAddress) {
        this.ownerOf = ({ includeExpired, tokenId, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                owner_of: {
                    include_expired: includeExpired,
                    token_id: tokenId,
                },
            });
        });
        this.approval = ({ includeExpired, spender, tokenId, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                approval: {
                    include_expired: includeExpired,
                    spender,
                    token_id: tokenId,
                },
            });
        });
        this.approvals = ({ includeExpired, tokenId, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                approvals: {
                    include_expired: includeExpired,
                    token_id: tokenId,
                },
            });
        });
        this.allOperators = ({ includeExpired, limit, owner, startAfter, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                all_operators: {
                    include_expired: includeExpired,
                    limit,
                    owner,
                    start_after: startAfter,
                },
            });
        });
        this.numTokens = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                num_tokens: {},
            });
        });
        this.contractInfo = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                contract_info: {},
            });
        });
        this.nftInfo = ({ tokenId, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                nft_info: {
                    token_id: tokenId,
                },
            });
        });
        this.allNftInfo = ({ includeExpired, tokenId, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                all_nft_info: {
                    include_expired: includeExpired,
                    token_id: tokenId,
                },
            });
        });
        this.tokens = ({ limit, owner, startAfter, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                tokens: {
                    limit,
                    owner,
                    start_after: startAfter,
                },
            });
        });
        this.allTokens = ({ limit, startAfter, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                all_tokens: {
                    limit,
                    start_after: startAfter,
                },
            });
        });
        this.minter = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                minter: {},
            });
        });
        this.config = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                config: {},
            });
        });
        this.domainInfo = ({ name, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                domain_info: {
                    name,
                },
            });
        });
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
}
exports.RegistrarQueryClient = RegistrarQueryClient;
class RegistrarClient extends RegistrarQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        this.transferNft = ({ recipient, tokenId, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                transfer_nft: {
                    recipient,
                    token_id: tokenId,
                },
            }, fee, memo, funds);
        });
        this.sendNft = ({ contract, msg, tokenId, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                send_nft: {
                    contract,
                    msg,
                    token_id: tokenId,
                },
            }, fee, memo, funds);
        });
        this.approve = ({ expires, spender, tokenId, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                approve: {
                    expires,
                    spender,
                    token_id: tokenId,
                },
            }, fee, memo, funds);
        });
        this.revoke = ({ spender, tokenId, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                revoke: {
                    spender,
                    token_id: tokenId,
                },
            }, fee, memo, funds);
        });
        this.approveAll = ({ expires, operator, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                approve_all: {
                    expires,
                    operator,
                },
            }, fee, memo, funds);
        });
        this.revokeAll = ({ operator, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                revoke_all: {
                    operator,
                },
            }, fee, memo, funds);
        });
        this.mint = ({ extension, owner, tokenId, tokenUri, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                mint: {
                    extension,
                    owner,
                    token_id: tokenId,
                    token_uri: tokenUri,
                },
            }, fee, memo, funds);
        });
        this.burn = ({ tokenId, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                burn: {
                    token_id: tokenId,
                },
            }, fee, memo, funds);
        });
        this.extension = ({ msg, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                extension: {
                    msg,
                },
            }, fee, memo, funds);
        });
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
}
exports.RegistrarClient = RegistrarClient;
