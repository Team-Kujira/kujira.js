"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketType = exports.Protocol = exports.Chain = void 0;
var Chain;
(function (Chain) {
    Chain["Avalanche"] = "Avalanche";
    Chain["Kujira"] = "Kujira";
    Chain["Polkadot"] = "Polkadot";
})(Chain = exports.Chain || (exports.Chain = {}));
var Protocol;
(function (Protocol) {
    Protocol["Acala"] = "Acala";
    Protocol["Karura"] = "Karura";
    Protocol["Mandala"] = "Mandala";
    Protocol["USK"] = "USK";
    Protocol["FIN"] = "FIN Margin";
    Protocol["BOW"] = "FIN Perpetuals";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var MarketType;
(function (MarketType) {
    MarketType["Acala"] = "Lending";
    MarketType["Karura"] = "Lending";
    MarketType["Mandala"] = "Lending";
    MarketType["USK"] = "Lending";
    MarketType["FIN"] = "Margin";
    MarketType["BOW"] = "Perpetuals";
})(MarketType = exports.MarketType || (exports.MarketType = {}));
