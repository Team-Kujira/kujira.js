"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orca = exports.kns = exports.FinQueryClient = exports.FinClient = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = require("protobufjs/minimal");
__exportStar(require("./amino"), exports);
__exportStar(require("./denom"), exports);
var fin_1 = require("./fin");
Object.defineProperty(exports, "FinClient", { enumerable: true, get: function () { return fin_1.FinClient; } });
Object.defineProperty(exports, "FinQueryClient", { enumerable: true, get: function () { return fin_1.FinQueryClient; } });
__exportStar(require("./ibc"), exports);
exports.kns = __importStar(require("./kns"));
__exportStar(require("./msg"), exports);
__exportStar(require("./network"), exports);
exports.orca = __importStar(require("./orca"));
__exportStar(require("./pairs"), exports);
__exportStar(require("./queryClient"), exports);
__exportStar(require("./registry"), exports);
__exportStar(require("./usk"), exports);
__exportStar(require("./wallets"), exports);
if (minimal_1.util.Long !== long_1.default) {
    minimal_1.util.Long = long_1.default;
    (0, minimal_1.configure)();
}
