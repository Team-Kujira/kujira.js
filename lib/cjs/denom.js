"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factor = exports.wFTM = exports.wGLMR = exports.wAVAX = exports.wBNB = exports.wMATIC = exports.wETH = exports.USDT = exports.USDC = exports.ATOM = exports.DEMO = exports.KUJI = exports.USK = exports.USK_TESTNET = exports.Denom = void 0;
const contracts_json_1 = __importDefault(require("./resources/contracts.json"));
const tokens_json_1 = __importDefault(require("./resources/tokens.json"));
const labels = {
    wei: "OKT",
    ugraviton: "GRAV",
    usdt: "USDT",
    usat: "nBTC",
    uausdc: "axlUSDC",
    uusdc: "axlUSDC",
    uausdt: "axlUSDT",
    uusdt: "axlUSDT",
    atevmos: "EVMOS",
    "wavax-wei": "wAVAX",
    basecro: "CRO",
    "weth-wei": "wETH",
    "link-wei": "LINK",
    "dot-planck": "DOT",
    aevmos: "EVMOS",
    demo: "DEMO",
    local: "LOCAL",
    swth: "SWTH",
    aacre: "ACRE",
    aplanq: "PLQ",
    "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo": "DEMO",
    "factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local": "LOCAL",
    "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local": "LOCAL",
    "factory/kujira1503w3cjnzpd06m4apje4v0nx47h5gevkywxar8r25gce8r727jxqe4cehk/LOCAL": "LOCAL",
    "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk": "USK",
    "factory:kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll:uusk": "USK",
    "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk": "USK",
    "factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk": "USK",
    gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78: "gPAXG",
    gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006: "gPSTAKE",
    gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: "gwETH",
    gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: "gUSDC",
    gravity0xdAC17F958D2ee523a2206206994597C13D831ec7: "gUSDT",
    gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: "gwBTC",
    gravity0x6B175474E89094C44Da98b954EedeAC495271d0F: "gDAI",
    gravity0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44: "wTAO",
    gravity0xa0b93B9e90aB887E53F9FB8728c009746e989B53: "gTST",
    gravity0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30: "gINJ",
    gravity0x912CE59144191C1204E64559FE8253a0e49E6548: "ARB",
    "erc20/0xAE6D3334989a22A65228732446731438672418F2": "CNTO",
    "frax-wei": "FRAX",
    inj: "INJ",
    "dai-wei": "DAI",
    "wbtc-satoshi": "wBTC",
    "wbnb-wei": "wBNB",
    "wftm-wei": "wFTM",
    "wmatic-wei": "wMATIC",
    "wglmr-wei": "wGLMR",
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": "LOOP",
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": "FURY",
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": "AQUA",
    "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr": "NETA",
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": "ampLUNA",
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": "whLOCAL",
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": "ASTRO",
    "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8": "xASTRO",
    "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": "SHD",
    "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": "dUST",
    terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a: "bATOM",
    terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun: "bETH",
    terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp: "bLUNA",
    terra1c00vskhyzdv0z63z2tyetzx2qma67n2z3vzyn0: "bSOL",
    terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58: "sAVAX",
    "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE": "ampWHALE",
};
const terra = {
    uaud: "AUT",
    ucad: "CAT",
    uchf: "CHT",
    ucny: "CNT",
    udkk: "DKT",
    ueur: "EUT",
    ugbp: "GBT",
    uhkd: "HKT",
    uidr: "IDT",
    uinr: "INT",
    ujpy: "JPT",
    umnt: "MNT",
    umyr: "MYT",
    unok: "NOT",
    uphp: "PHT",
    usdr: "SDT",
    usek: "SET",
    usgd: "SGT",
    uthb: "THT",
    utwd: "TWT",
    uusd: "UST",
};
const baseDenomToSymbol = (denom) => {
    var _a;
    const baseDenom = denom.startsWith("ibc/")
        ? (_a = tokens_json_1.default[denom]) === null || _a === void 0 ? void 0 : _a.base_denom
        : denom.startsWith("factory/")
            ? denom.split("/")[2]
            : denom.startsWith("factory:")
                ? denom.split(":")[2]
                : denom;
    if (!baseDenom)
        return "Unknown";
    const label = labels[baseDenom];
    if (label)
        return label;
    const t = terra[denom];
    if (t)
        return t;
    return baseDenom.startsWith("u")
        ? baseDenom.replace(/^u/, "").toUpperCase()
        : // Stride
            baseDenom.startsWith("stu")
                ? `st${baseDenomToSymbol(baseDenom.replace(/^st/, ""))}`
                : baseDenom;
};
const avalanche = {
    // Mainnet
    "0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be": "sAVAX",
};
const ics20 = {
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": {
        contract: "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": {
        contract: "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": {
        contract: "juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97",
    },
    // whLOCAL
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": {
        contract: "terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
    // ASTRO
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": {
        contract: "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
    // xASTRO
    "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8": {
        contract: "terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
    // ampLUNA
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": {
        contract: "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28",
    },
    // SHD
    // "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": {
    //   contract: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
    //   router: "secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
    //   channel: "channel-46",
    // },
    // dUST
    "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": {
        contract: "terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34",
    },
};
class Denom {
    constructor(reference, underlying) {
        var _a, _b;
        this.reference = reference;
        this.underlying = underlying;
        this.decimals = 6;
        this.eq = (other) => this.reference == other.reference;
        this.compare = (other) => this.symbol
            .replace(/[a-z]+/, "")
            .localeCompare(other.symbol.replace(/[a-z]+/, ""));
        if (this.reference.startsWith("ibc/")) {
            this.trace = tokens_json_1.default[this.reference];
        }
        this.symbol = baseDenomToSymbol(this.reference);
        if (this.underlying) {
            this.symbol = `${this.symbol} ${this.underlying
                .map((d) => d.symbol)
                .join("-")}`;
        }
        this.decimals = 6;
        if ((((_a = this.trace) === null || _a === void 0 ? void 0 : _a.base_denom) || this.reference).endsWith("wei"))
            this.decimals = 18;
        if ((((_b = this.trace) === null || _b === void 0 ? void 0 : _b.base_denom) || this.reference).endsWith("-satoshi"))
            this.decimals = 8;
        if (this.symbol === "gPAXG")
            this.decimals = 18;
        if (this.symbol === "EVMOS")
            this.decimals = 18;
        if (this.symbol === "wAVAX")
            this.decimals = 18;
        if (this.symbol === "wETH")
            this.decimals = 18;
        if (this.symbol === "CRO")
            this.decimals = 8;
        if (this.symbol === "EL1")
            this.decimals = 18;
        if (this.symbol === "nBTC")
            this.decimals = 14;
        if (this.symbol === "BOOT")
            this.decimals = 0;
        if (this.symbol === "DOT")
            this.decimals = 10;
        if (this.symbol === "SHD")
            this.decimals = 8;
        if (this.symbol === "INJ")
            this.decimals = 18;
        if (this.symbol === "gINJ")
            this.decimals = 18;
        if (this.symbol === "CNTO")
            this.decimals = 18;
        if (this.symbol === "wTAO")
            this.decimals = 9;
        if (this.symbol === "ACRE")
            this.decimals = 18;
        if (this.symbol === "PLQ")
            this.decimals = 18;
        if (this.symbol === "SWTH")
            this.decimals = 8;
        if (this.symbol === "gTST")
            this.decimals = 18;
        if (this.symbol === "ARB")
            this.decimals = 18;
        // OKX USDT
        if (this.reference ===
            "ibc/EA20485E9BEBF77BB3638A79F60A0E1D0A12A6289972F30E475529C80BF5C960")
            this.decimals = 18;
        this.ics20 = ics20[this.reference];
    }
    static from(string) {
        const underlying = Object.values(contracts_json_1.default)
            .flatMap((x) => x.bow)
            .find((x) => `factory/${x.address}/ulp` === string);
        return new Denom(string, underlying === null || underlying === void 0 ? void 0 : underlying.config.denoms.map(Denom.from));
    }
}
exports.Denom = Denom;
exports.USK_TESTNET = Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk");
exports.USK = Denom.from("factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk");
exports.KUJI = Denom.from("ukuji");
exports.DEMO = Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo");
exports.ATOM = Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2");
exports.USDC = Denom.from("ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F");
exports.USDT = Denom.from("ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045");
exports.wETH = Denom.from("ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7");
exports.wMATIC = Denom.from("ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6");
exports.wBNB = Denom.from("ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833");
exports.wAVAX = Denom.from("ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2");
exports.wGLMR = Denom.from("ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1");
exports.wFTM = Denom.from("ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2");
const factor = ([base, quote]) => {
    return Math.pow(10, (base.decimals - quote.decimals));
};
exports.factor = factor;
