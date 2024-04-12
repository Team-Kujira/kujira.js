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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.castSigner = void 0;
const long_1 = __importDefault(require("long"));
const castSigner = (old) => "signAmino" in old ? old : castDirectSigner(old);
exports.castSigner = castSigner;
const castDirectSigner = (old) => (Object.assign(Object.assign({}, old), { signDirect: (signerAddress, signDoc) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield old.signDirect(signerAddress, Object.assign(Object.assign({}, signDoc), { accountNumber: long_1.default.fromNumber(Number(signDoc.accountNumber)) }));
        return Object.assign(Object.assign({}, res), { signed: Object.assign(Object.assign({}, res.signed), { accountNumber: BigInt(res.signed.accountNumber.toString()) }) });
    }) }));
