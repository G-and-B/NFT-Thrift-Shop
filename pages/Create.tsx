import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { connectWallet, getCurrentWalletConnected } from '../components/interact'
import {pinJSONToIPFS} from '../components/pinata';
import React, { useEffect,useState } from 'react'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
// import {task} from "hardhat/config";
// import "@nomiclabs/hardhat-waffle";
import Web3 from "web3";
// /import { string } from 'hardhat/internal/core/params/argumentTypes'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");


export type createVars = {
  apiKey: string
  pinataKey: string
  pinataSecret: string
}

export type pinataKeys = {
  pinataKey: string
  pinataSecret: string
}

export const getStaticProps: GetStaticProps = async () => {
  const alchemyKey   = process.env.REACT_APP_ALCHEMY_KEY?.toString();
  const pinataKey    = process.env.REACT_APP_PINATA_KEY?.toString();;
  const pinataSecret = process.env.REACT_APP_PINATA_KEY_SECRET?.toString();;

  const createVars:createVars = {apiKey:"",pinataKey:"",pinataSecret:""}

  if(typeof alchemyKey === 'string'){
    console.log('the alchemy key:')
    console.log(alchemyKey)
    return {
        props: {createVars: {alchemyKey,pinataKey,pinataSecret}}
      }
  }else{
    console.log('what do I do here....')
    return {
      props: {createVars}
    }
  }
}

const contractAddress = "0x2990AA37Ce6559b4a48897205015965102392102"
const contractABI = require('../NFTMinter-abi.json')

export default function Create({createVars}: InferGetStaticPropsType<typeof getStaticProps>){

  const [walletAddress, setWallet]   = useState("");
  const [status,setStatus]           = useState("");
  const [name,setName]               = useState("");
  const [description,setDescription] = useState("");
  const [url,setURL]                 = useState("");

  const connectWalletHandler = async () => {
    console.log('callback for connect wallet...')
    const walletResponse = await connectWallet();
    if(typeof walletResponse?.address === 'string'
      && typeof walletResponse?.status === 'string'
      ){
        setWallet(walletResponse?.address)
        setStatus(walletResponse?.status)
    }else{
      console.log('things were returned incorrectly...')
    }
    console.log(walletResponse)
  }
  

  useEffect(() => {
    async function asyncGetCurrentWallet() {
      let retObj  = await getCurrentWalletConnected();
      console.log('here')
      if(typeof retObj?.address === 'string' ){
        setWallet(retObj.address);
      }
      console.log('here1')
      if(typeof retObj?.status === 'string' ){
        setWallet(retObj.status);
      }
      console.log('here2')
      addWalletListener();
    }
  },[]);

  const onMintPressed = async () => {
    //e.preventDefault();
    console.log('we\'re supposed to be minting the NFT here.')
    const{status} = await mintNFT(url,name,description);
    setStatus(status);
  };

  function addWalletListener() {
    console.log('here3')
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      console.log('not sure what to do here')
      // setStatus(
      //   <p>
      //     {" "}
      //     🦊{" "}
      //     <a target="_blank" href={`https://metamask.io/download.html`}>
      //       You must install Metamask, a virtual Ethereum wallet, in your
      //       browser.
      //     </a>
      //   </p>
      // );
    }
  }

  const mintNFT = async(url:string, name:string, description:string) => {
    //error handling
    if (url.trim() == "" || (name.trim() == "" || description.trim() == "")) { 
           return {
               success: false,
               status: "❗Please make sure all fields are completed before minting.",
           }
     }
     //make metadata
     console.log(url)
     const metadata: NFT_t = {name:"",image:"",description:""}
     metadata.name = name;
     metadata.image = url;
     metadata.description = description;
   
     console.log('the prop type.')
     console.log(createVars)

     //make pinata call
     const k = createVars.pinataKey;
     const sk = createVars.pinataSecret;
     const keys: pinataKeys = {pinataKey: k, pinataSecret:sk} 
     const pinataResponse = await pinJSONToIPFS(metadata,keys);
     if (!pinataResponse.success){
         return {
             success: false,
             status: "😢 Something went wrong while uploading your tokenURI.",
         }
     } 
     const tokenURI = pinataResponse.pinataUrl;  
     const web3 = createAlchemyWeb3(createVars.alchemyKey);     
     console.log(web3)
     window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  
    //set up your Ethereum transaction
    const transactionParameters = {
        to:   contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI()//make call to NFT smart contract 
    };
  
    //sign the transaction via Metamask
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
            return {
                success: true,
                status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            }
        } catch (error: any) {
            return {
                success: false,
                status: "😥 Something went wrong: " + error.message
            }
      }
   }

  return (
    <div>
      
      <h1 
        id={styles.header1} 
        >🧙‍♂️ 
        Alchemy NFT Minter
      </h1>
      
      <button 
        id={styles.walletButton}
        onClick={connectWalletHandler}
        >
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
      
      <p id={styles.p1}>
        Simply add your asset&apos;s link, name, and description, then press &quot;Mint.&quot;
      </p>
      
      <form id={styles.form1}>
        <h2 id={styles.form_header1}>🖼 Link to asset</h2>
        <input
              type="text"
              placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
              onChange={(event) => setURL(event.target.value)}
            />
      <h2 id={styles.form_header2}>🤔 Name: </h2>
            <input
              type="text"
              placeholder="e.g. My first NFT!"
              onChange={(event) => setName(event.target.value)}
            />
            <h2 id={styles.form_header2}>✍️ Description: </h2>
            <input
              type="text"
              placeholder="e.g. Even cooler than cryptokitties ;)"
              onChange={(event) => setDescription(event.target.value)}
            />
      </form>
        <button id={styles.mintButton} onClick={onMintPressed}>
            Mint NFT
          </button>
          <p id="status">
            {status}
          </p>
    </div>
  )
}