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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkets = void 0;
const types_1 = require("./types");
// import * as Acala from "@acala-network/contracts/utils/AcalaAddress";
// import * as Karura from "@acala-network/contracts/utils/KaruraAddress";
const bignumber_1 = require("@ethersproject/bignumber");
const denom_1 = require("../denom");
const network_1 = require("../network");
__exportStar(require("./types"), exports);
const getMarkets = (network) => {
    return network === network_1.TESTNET
        ? [
            {
                label: "DEMO",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1exd7mzv8azf7tpqukm6fzxnvdt7a8kddyz2puwzk9lm7qmlx3vxq0thezm",
                collateralDenom: denom_1.DEMO,
                bidDenom: denom_1.Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                repayDenom: denom_1.Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey",
                ],
            },
            {
                label: "NBTC",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira10m49vm0fevhqh56szka8hv7j6lumns8ly3h950hf5s8putn6k0usz7m2qh",
                collateralDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                bidDenom: denom_1.Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                repayDenom: denom_1.Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira186hf4u6wq2yxjhrddgsu60jual4mkpqyfjy7l60qqp2302tw5vpqy6l58s",
                ],
            },
            // {
            //   label: "LDOT",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Mandala,
            //   address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   // address: "0xF19F13399d89Dd5aF4856b5b7b8Bc7316E9767CE",
            //   // address: "0x8E9a8bC9Aa27dfb699Ce6997BEcC254748DB6F9F",
            //   collateralDenom: new Denom("acala", Acala.LDOT),
            //   bidDenom: new Denom("acala", Acala.AUSD),
            //   repayDenom: new Denom("acala", Acala.AUSD),
            // },
        ]
        : [
            {
                label: "ATOM",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1q8y46xg993cqg3xjycyw2334tepey7dmnh5jk2psutrz3fc69teskctgfc",
                collateralDenom: denom_1.Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
                bidDenom: denom_1.USK,
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf",
                    "kujira1m0z0kk0qqug74n9u9ul23e28x5fszr628h20xwt6jywjpp64xn4qkxmjq3",
                ],
            },
            {
                label: "DOT",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1p748kkq6qmhcml0ycm0g8n4vns7rnch2jtw7mzsrcyudjmpqzzvsy4clw6",
                bidDenom: denom_1.USK,
                collateralDenom: denom_1.Denom.from("ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"),
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1eydneup86kyhew5zqt5r7tkxefr3w5qcsn3ssrpcw9hm4npt3wmqa7as3u",
                    "kujira1hjyjafrt09p4hwsnwch29nrrs40lprfgesqdy44wnp27td872hsse2rree",
                ],
            },
            {
                label: "wBNB",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira12n6yghp8l2gwz9zxnle6e7gm9d0hz4uvnlyaadw5y05ch50c6qrqg4k7r3",
                bidDenom: denom_1.USK,
                collateralDenom: denom_1.Denom.from("ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"),
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1f2jt3f9gzajp5uupeq6xm20h90uzy6l8klvrx52ujaznc8xu8d7s6av27t",
                    "kujira1pep6vkkjexjlsw3y5h4tj27g7s58vkypy8zg7f9qdvlh2992pncqduz84n",
                ],
            },
            {
                label: "wETH",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1xc4mksfgs9cww7mlth3gqp6dfx9wh8znvdps5xt4yasxnkhd7kcq2nvxl4",
                bidDenom: denom_1.USK,
                collateralDenom: denom_1.Denom.from("ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"),
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1fjews4jcm2yx7una77ds7jjjzlx5vgsessguve8jd8v5rc4cgw9s8rlff8",
                    "kujira1m4ves3ymz5hyrj3war3t7uxu9ewt8rwpunja87960n0gre3a5pzspgry4g",
                ],
            },
            {
                label: "LUNA",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1sdlp8eqp4md6waqv2x9vlvt9dtzyx9ztt0zvkfxaw9kxh3t5gdvqypxlwz",
                bidDenom: denom_1.USK,
                collateralDenom: denom_1.Denom.from("ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"),
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from(10).pow(6 + 6),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1r80rh4t7zrlt8d6da4k8xptwywuv39esnt4ax7p7ca7ga7646xssrcu5uf",
                    "kujira1722g2rudg0rlw45nuuvjhg4a365xztfrdfjgyyfuzlmqmtu2plas34y6x3",
                ],
            },
            {
                label: "gPAXG",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                address: "kujira1rn99882aqqy6zcs6clua7zn6zsl74hamqchacg8d9gxh304hequsflxfjt",
                bidDenom: denom_1.USK,
                collateralDenom: denom_1.Denom.from("ibc/B4DCACF7753C05040AF0A7BF2B583402C4B8C9B0A86FCECE32EF63CB7F0A46B3"),
                repayDenom: denom_1.USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
                bidThreshold: bignumber_1.BigNumber.from("10000000000"),
                maxSlot: 30,
                premiumRatePerSlot: 0.01,
                waitingPeriod: 600,
                markets: [
                    "kujira1twc28l5njc07xuxrs85yahy44y9lw5euwa7kpajc2zdh98w6uyksvjvruq",
                ],
            },
            {
                label: "NBTC",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.USK,
                collateralDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                bidDenom: denom_1.USK,
                repayDenom: denom_1.USK,
            },
            {
                label: "ATOM Short",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.PERP,
                collateralDenom: denom_1.USK,
                bidDenom: denom_1.Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
                repayDenom: denom_1.Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
            },
            {
                label: "NBTC Short",
                chain: types_1.Chain.Kujira,
                protocol: types_1.Protocol.PERP,
                collateralDenom: denom_1.USK,
                bidDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                repayDenom: denom_1.Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
            },
            // {
            //   label: "KSM",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xf11dD615fA938F7b43209DA472F80d62ac1c7900",
            //   address: "",
            //   collateralDenom: new Denom("acala", Karura.KSM),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // bidThreshold: BigNumber.from(10).pow(12 + 6),
            // maxSlot: 10,
            // premiumRatePerSlot: 0.005,
            // waitingPeriod: 30, // 2 blocks
            // markets: [],
            // },
            // {
            //   label: "LKSM",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   collateralDenom: new Denom("acala", Karura.LKSM),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // bidThreshold: BigNumber.from(10000000000),
            // maxSlot: 10,
            // premiumRatePerSlot: 0.005,
            // waitingPeriod: 30, // 2 blocks
            // markets: [],
            // },
            // {
            //   label: "KAR",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   collateralDenom: new Denom("acala", Karura.KAR),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // },
        ];
};
exports.getMarkets = getMarkets;
