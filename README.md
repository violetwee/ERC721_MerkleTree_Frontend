# NFT Minting Demo App

This is a front end app developed in ReactJS to demonstrate the minting of NFT via Metamask.
It uses the smart contract from ERC721_MerkleTree_NFT (https://github.com/violetwee/ERC721_MerkleTree_NFT), and it is currently deployed on the Rinkeby Testnet.

Contract address: 0x53E0111741076cDF614c48ca8Addde3BC6917BFb

# Requirements

Make sure you have the following installed:

- Node JS
- npm
- Metamask

Links under Resources section

# Testing

If you modify and redeploy the smart contract from ERC721_MerkleTree_NFT, update the contract address value in App.js (ie. CONTRACT_ADDRESS) and replace the GameItem.json file in src/contracts.

1. Clone this project
2. From root directory, run `npm install` to install all dependencies
3. Start the web server by running `npm start`. You should be redirected to the index.html page on a new browser window. If not, copy and paste the URL shown on the terminal (ie. http://localhost:3000)

## Mint an NFT

Each mint costs 0.001 eth. Make sure you have sufficient eth. Otherwise, get some from the Rinkeby faucet (https://faucets.chain.link/rinkeby).

1. Click "Connect Wallet" to connect your Metamask wallet to the app. Button changes to "Mint NFT" after Metamask is connected.
2. Click "Mint NFT". Wait for minting to complete. Once done, you should see the Token Id and metadata of the item shown in the logs.
3. Check the mint transaction from the URL returned in the logs.

<img src="https://github.com/violetwee/ERC721_MerkleTree_Frontend/blob/master/images/wallet_not_connected.png" width="800px" height="auto"/>
  
<img src="https://github.com/violetwee/ERC721_MerkleTree_Frontend/blob/master/images/metamask_prompt.png" width="800px" height="auto"/>

<img src="https://github.com/violetwee/ERC721_MerkleTree_Frontend/blob/master/images/mint_logs.png" width="800px" height="auto"/>

# Resources

- [NodeJS & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Downloading and installing NodeJS and npm
- [Metamask](https://metamask.io/) - A crypto wallet & gateway to blockchain apps
- [Rinkeby Faucets](https://faucets.chain.link/rinkeby) - Request eth for Rinkeby Testnet
- [Rinkeby Etherscan](https://rinkeby.etherscan.io/) - Rinkeby Testnet block explorer
