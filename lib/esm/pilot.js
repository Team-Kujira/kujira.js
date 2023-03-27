var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import contracts from "./resources/contracts.json";
export const castSale = (res) => ({
    label: Denom.from(res.amount.denom).symbol,
    collateralDenom: Denom.from(res.amount.denom),
    bidDenom: Denom.from(res.orca_config.bid_denom),
    address: res.orca_address,
    bidThreshold: BigNumber.from(res.orca_config.bid_threshold),
    maxSlot: res.orca_config.max_slot,
    premiumRatePerSlot: parseFloat(res.orca_config.premium_rate_per_slot),
    premiumRatePerSlotInt: parseFixed(res.orca_config.premium_rate_per_slot, 18),
    waitingPeriod: res.orca_config.waiting_period,
    markets: res.orca_config.markets,
    sale: {
        idx: res.idx,
        title: res.title,
        owner: res.owner,
        beneficiary: res.beneficiary,
        description: res.description,
        price: parseFloat(res.price),
        amount: BigNumber.from(res.amount.amount),
        opens: new Date(parseInt(res.opens) / 1000000),
        closes: new Date(parseInt(res.closes) / 1000000),
        executed: res.executed ? new Date(parseInt(res.executed) / 1000000) : null,
        retracted: res.retracted
            ? new Date(parseInt(res.retracted) / 1000000)
            : null,
    },
    liquidationFee: parseFloat(res.orca_config.liquidation_fee),
    withdrawalFee: parseFloat(res.orca_config.withdrawal_fee),
});
const castPilot = (res) => ({
    address: res.address,
    owner: res.config.owner,
    deposit: res.config.deposit,
    orcaCodeId: res.config.orca_code_id,
    saleFee: parseFloat(res.config.sale_fee),
    withdrawalFee: parseFloat(res.config.withdrawal_fee),
});
export const config = (network) => {
    const contract = contracts[network].pilot[0];
    if (!contract)
        return null;
    return castPilot(contract);
};
export const getMarkets = (query, network) => __awaiter(void 0, void 0, void 0, function* () {
    const contract = contracts[network].pilot.reverse()[0];
    if (!contract)
        return {};
    return query.wasm
        .queryContractSmart(contract.address, { sales: {} })
        .then((x) => x.sales.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.orca_address]: castSale(v) })), {}));
});
