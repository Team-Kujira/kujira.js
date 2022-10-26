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
exports.AuctionsClient = exports.AuctionsQueryClient = void 0;
class AuctionsQueryClient {
    constructor(client, contractAddress) {
        this.bidsByDomain = ({ domain, limit, startAfter, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                bids_by_domain: {
                    domain,
                    limit,
                    start_after: startAfter,
                },
            });
        });
        this.bidsByBidder = ({ bidder, limit, startAfter, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                bids_by_bidder: {
                    bidder,
                    limit,
                    start_after: startAfter,
                },
            });
        });
        this.auction = ({ domain }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                auction: {
                    domain,
                },
            });
        });
        this.auctions = ({ limit, startAfter, state, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                auctions: {
                    limit,
                    start_after: startAfter,
                    state,
                },
            });
        });
        this.config = () => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                config: {},
            });
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.bidsByDomain = this.bidsByDomain.bind(this);
        this.bidsByBidder = this.bidsByBidder.bind(this);
        this.auction = this.auction.bind(this);
        this.auctions = this.auctions.bind(this);
        this.config = this.config.bind(this);
    }
}
exports.AuctionsQueryClient = AuctionsQueryClient;
class AuctionsClient extends AuctionsQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        this.placeBid = ({ domain, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                place_bid: {
                    domain,
                },
            }, fee, memo, funds);
        });
        this.increaseBid = ({ domain, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                increase_bid: {
                    domain,
                },
            }, fee, memo, funds);
        });
        this.withdrawBid = ({ domain, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                withdraw_bid: {
                    domain,
                },
            }, fee, memo, funds);
        });
        this.claimAuction = ({ domain, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                claim_auction: {
                    domain,
                },
            }, fee, memo, funds);
        });
        this.openAuction = (fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                open_auction: {},
            }, fee, memo, funds);
        });
        this.configure = ({ admin, canBid, denom, depositDuration, maxOpen, openDuration, registrar, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                configure: {
                    admin,
                    can_bid: canBid,
                    denom,
                    deposit_duration: depositDuration,
                    max_open: maxOpen,
                    open_duration: openDuration,
                    registrar,
                },
            }, fee, memo, funds);
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.placeBid = this.placeBid.bind(this);
        this.increaseBid = this.increaseBid.bind(this);
        this.withdrawBid = this.withdrawBid.bind(this);
        this.claimAuction = this.claimAuction.bind(this);
        this.openAuction = this.openAuction.bind(this);
        this.configure = this.configure.bind(this);
    }
}
exports.AuctionsClient = AuctionsClient;
