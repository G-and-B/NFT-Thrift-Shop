//require('dotenv').config();


interface Window {
    ethereum: any
}

export async function getStaticProps(){
    const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(alchemyKey); 
}


//const contractAddress = "0x2990AA37Ce6559b4a48897205015965102392102"
//const contractABI = require('../NFTMinter-abi.json')

export const connectWallet = async() => {
    if(window.ethereum){
        console.log('window ethereum')
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        }catch(err){
        return{
            address: "",
            status: "😥 " + err.message,
            };
        }
    }else{
        console.log('there is no ethereum window')
    }
};
