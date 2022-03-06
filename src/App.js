import './App.css';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import contract from "./contracts/GameItem.json";

// Set the contract address and its ABI in order for us to connect and communicate with the smart contract
const CONTRACT_ADDRESS = "0x53E0111741076cDF614c48ca8Addde3BC6917BFb";
const ABI = contract.abi;

function App() {
  // Track if an account is already connected
  const [currentAccount, setCurrentAccount] = useState(null);

  /**
   * Called by connectWalletButton. 
   * Prompts user to connect to an account on Metamask.
   * Set as currentAccount when connected.
   */
  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Please install Metamask to mint an NFT');
    }
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      appendLog('Account set to ' + accounts[0]);
      setCurrentAccount(accounts[0]);
    }
    catch (err) {
      appendLog(err.message);
    }
  }

  /**
   * Called by mintNftButton.
   * Prompts user to make payment for the NFT and mints an NFT.
   */
  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        appendLog("Initialize payment");
        let nftTxn = await nftContract.awardItem(currentAccount, { value: ethers.utils.parseEther("0.001") });
        appendLog("Minting... please wait");
        await nftTxn.wait();
        appendLog(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
      } else {
        appendLog("Ethereum object does not exist");
      }
    } catch (err) {
      appendLog(err.message);
    }
  }

  // Component for Connect Wallet button
  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  // Compoennt for Mint NFT button
  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  // Compoennt to show logs
  const logTextArea = () => {
    return (
      <textarea id="log" rows="45" cols="200" disabled />
    )
  }

  // Append message to log on screen
  const appendLog = (msg) => {
    document.getElementById("log").append(msg + "\r\n");
  }

  useEffect(() => {
    // Check if Metamask wallet exists, and if we already have a connected account
    const checkWalletIsConnected = async () => {
      const { ethereum } = window;

      if (!ethereum) {
        appendLog('Please install Metamask to mint an NFT');
      } else {
        appendLog('Metamask wallet found. All good.');
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        appendLog("Found an authorized account: " + account);
        setCurrentAccount(account);
      } else {
        appendLog("No authorized account found");
      }
    }

    // Listen for events emitted from the smart contract
    const start = () => {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        provider.once("block", () => {
          nftContract.on("GameItemMinted", (tokenId, tokenURI) => {
            let metadata = JSON.parse(atob(tokenURI.split(",")[1]));
            if (metadata) {
              appendLog('Mint successful! Token Id = ' + tokenId.toNumber());
              appendLog(`Name: ${metadata.name}, Description: ${metadata.description}`);
            }
          })
        })
      }
    }
    // Check if Metamask wallet is installed and if there is a connected account
    checkWalletIsConnected();
    start(); // start listening for smart contract events
  }, []);

  return (
    <div className='main-app'>
      <h1>Rinkeby NFTs</h1>
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
      <div>
        {logTextArea()}
      </div>
    </div>
  )
}

export default App;