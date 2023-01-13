"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBC = void 0;
const chains_json_1 = __importDefault(require("./resources/chains.json"));
const connections_json_1 = __importDefault(require("./resources/connections.json"));
const tokens_json_1 = __importDefault(require("./resources/tokens.json"));
exports.IBC = {
    chains: chains_json_1.default,
    connections: connections_json_1.default,
    tokens: tokens_json_1.default,
};
