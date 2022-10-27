# Canonical W-KLAY

The lack of canonical wklay has caused friction for dApp users to wrap and unwrap when moving between dApps. 

In the interest of standardisation across dApps and safer smart contract coding conventions, we created this standard for wrapped klay. We want our partners also to join us in utilising this shared implementation of wklay so that its easy to be used across dApps. 

## Usage

```sh
npm install --save truffle-contract canonical-wklay
```

and

```js
const contract = require('truffle-contract');
const wklayArtifact = require('canonical-wklay');

const wklay = contract(wklayArtifact);
```

## Deployed contract addresses

- Mainnet - Cypress: [0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432](https://scope.klaytn.com/account/0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432?tabId=internalTx)
- Testnet - Boabab: [0x043c471bEe060e00A56CcD02c0Ca286808a5A436](https://baobab.scope.klaytn.com/account/0x043c471bEe060e00A56CcD02c0Ca286808a5A436?tabId=internalTx)