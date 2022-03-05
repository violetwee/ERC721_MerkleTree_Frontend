# NFT Minting Demo App
This is a front end app developed in ReactJS to demonstrate the minting of NFT via Metamask.
It uses the smart contract from <link to ERC721_MerkleTree repo>, and it is currently deployed on the Rinkeby Testnet.
Contract address: <insert contract address here>

# Requirements
Make sure you have the following installed:
- [NodeJS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Downloading and installing NodeJS and npm
- [Metamask](https://metamask.io/) - A crypto wallet & gateway to blockchain apps

# Testing
If you modify and redeploy the smart contract from <link to ERC721_MerkleTree repo>, update the contract address value in App.js (ie. CONTRACT_ADDRESS) and replace the GameItem.json file in src/contracts.
  
1. Clone this project
2. From root directory, run ```npm install``` to install all dependencies
3. Start the web server by running ```npm start```. You should be redirected to the index.html page on a new browser window. If not, copy and paste the URL shown on the terminal (ie. http://localhost:3000)

## Mint an NFT
Each mint costs 0.001 eth. Make sure you have sufficient eth. Otherwise, get some from the Rinkeby faucet (https://faucets.chain.link/rinkeby).
1. Click "Connect Wallet" to connect your Metamask wallet to the app. Button changes to "Mint NFT" after Metamask is connected.
2. Click "Mint NFT". Wait for minting to complete. Once done, you should see the Token Id and metadata of the item shown in the logs.
3. Check the mint transaction from the URL returned in the logs.


<img src="https://github.com/violetwee/ERC721_MerkleTree_Frontend/blob/master/images/wallet_not_connected.png" width="800px" height="auto"/>
  
<img src="https://github.com/violetwee/ERC721_MerkleTree_Frontend/blob/master/images/mints.png" width="800px" height="auto"/>
