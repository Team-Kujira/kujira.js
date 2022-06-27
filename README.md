# kujira.js

JS interface for the Kujira Blockchain

## Quickstart

Install required packages via your preferred package manager

- `kujira.js` (via GitHub)
- `@cosmjs/stargage`
- `@cosmjs/proto-signing`

Import tx client `tx` and type registry `registry` from `kujira.js`

```js
import { tx, registry } from "kujira.js";
```

Create a signing client with Stargate

```js
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const RPC_ENDPOINT = "https://rpc-harpoon.kujira.app";
const MNEMONIC = "...";

const signer = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, { prefix: 'kujira' });

const client = await SigningStargateClient.connectWithSigner(
  RPC_ENDPOINT,
  signer,
  {
    registry,
    gasPrice: GasPrice.fromString("0.00125ukuji"),
  }
);
```

Finally construct and send txs

```js
const FIN_KUJI_DEMO =
  "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh";

const [account] = await signer.getAccounts();

const msg = tx.wasm.msgExecuteContract({
  sender: account.address,
  contract: FIN_KUJI_DEMO,
  msg: Buffer.from(JSON.stringify({ submit_order: { price: "210.5" } })),
  funds: coins(1000000, "ukuji"),
});

await client.signAndBroadcast(account.address, [msg], "auto");
```
