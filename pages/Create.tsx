import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { connectWallet } from '../components/interact'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const connectWalletHandler = async () => {
  console.log('callback for connect wallet...')
  const walletResponse = await connectWallet();
  console.log(walletResponse)
}


export default function Create(){
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
        <span> Connect Wallet</span>
      </button>
      
      <p id={styles.p1}>
        Simply add your asset&apos;s link, name, and description, then press &quot;Mint.&quot;
      </p>
      
      <form id={styles.form1}>
        <h2 id={styles.form_header1}>🖼 Link to asset</h2>
        <input
              type="text"
              placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
              // onChange={(event) => setURL(event.target.value)}
            />
      <h2 id={styles.form_header2}>🤔 Name: </h2>
            <input
              type="text"
              placeholder="e.g. My first NFT!"
              // onChange={(event) => setName(event.target.value)}
            />
            <h2 id={styles.form_header2}>✍️ Description: </h2>
            <input
              type="text"
              placeholder="e.g. Even cooler than cryptokitties ;)"
              // onChange={(event) => setDescription(event.target.value)}
            />
      </form>
    </div>
  )
}

/*       
      <div>
          <h1 
          // id="title"
          >🧙‍♂️ 
          Alchemy NFT Minter
          </h1>
          <p>
            Simply add your asset's link, name, and description, then press "Mint."
          </p>
          <br/>
          <form>
            <h2>🖼 Link to asset: </h2>
            <input
              type="text"
              placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
              // onChange={(event) => setURL(event.target.value)}
            />
            <h2>🤔 Name: </h2>
            <input
              type="text"
              placeholder="e.g. My first NFT!"
              // onChange={(event) => setName(event.target.value)}
            />
            <h2>✍️ Description: </h2>
            <input
              type="text"
              placeholder="e.g. Even cooler than cryptokitties ;)"
              // onChange={(event) => setDescription(event.target.value)}
            />
          </form>
      </div> */
/* <div className="object-center">
      <button 
      // id="walletButton" 
      // onClick={connectWalletPressed}
      >
        {/* {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )} 
      </button>
      <br></br>
      <h1 
      // id="title"
      >🧙‍♂️ 
      Alchemy NFT Minter
      </h1>
      <p>
        Simply add your asset's link, name, and description, then press "Mint."
      </p>
      <br/>
      <form>
        <h2>🖼 Link to asset: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          // onChange={(event) => setURL(event.target.value)}
        />
        <h2>🤔 Name: </h2>
        <input
          type="text"
          placeholder="e.g. My first NFT!"
          // onChange={(event) => setName(event.target.value)}
        />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          // onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button 
        // id="mintButton" onClick={onMintPressed}
        >
        Mint NFT
      </button>
      {/* <p id="status">
        {status}
      </p> 
    </div> */