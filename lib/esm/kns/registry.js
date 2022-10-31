var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class RegistryQueryClient {
    constructor(client, contractAddress) {
        this.addr = ({ name, prefix, }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                addr: {
                    name,
                    prefix,
                },
            });
        });
        this.kujiraAddr = ({ addr }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                kujira_addr: {
                    addr,
                },
            });
        });
        this.name = ({ addr }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                name: {
                    addr,
                },
            });
        });
        this.record = ({ name }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                record: {
                    name,
                },
            });
        });
        this.resolver = ({ name }) => __awaiter(this, void 0, void 0, function* () {
            return this.client.queryContractSmart(this.contractAddress, {
                resolver: {
                    name,
                },
            });
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.addr = this.addr.bind(this);
        this.kujiraAddr = this.kujiraAddr.bind(this);
        this.name = this.name.bind(this);
        this.record = this.record.bind(this);
        this.resolver = this.resolver.bind(this);
    }
}
export class RegistryClient extends RegistryQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        this.setResolver = ({ admin, allowedKinds, name, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                set_resolver: {
                    admin,
                    allowed_kinds: allowedKinds,
                    name,
                },
            }, fee, memo, funds);
        });
        this.removeResolver = ({ name, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                remove_resolver: {
                    name,
                },
            }, fee, memo, funds);
        });
        this.setRecord = ({ data, kind, name, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                set_record: {
                    data,
                    kind,
                    name,
                },
            }, fee, memo, funds);
        });
        this.removeRecord = ({ name, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                remove_record: {
                    name,
                },
            }, fee, memo, funds);
        });
        this.setKujiraAddr = ({ name, }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
            return yield this.client.execute(this.sender, this.contractAddress, {
                set_kujira_addr: {
                    name,
                },
            }, fee, memo, funds);
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.setResolver = this.setResolver.bind(this);
        this.removeResolver = this.removeResolver.bind(this);
        this.setRecord = this.setRecord.bind(this);
        this.removeRecord = this.removeRecord.bind(this);
        this.setKujiraAddr = this.setKujiraAddr.bind(this);
    }
}
