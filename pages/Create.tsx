import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(){
  return (
    <div className="flex justify-center items-center h-screen">
      
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
      </div>
    </div>
  )
}

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