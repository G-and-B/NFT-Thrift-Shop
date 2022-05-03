import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {pinataKeys} from '../pages/Create'

// export const getStaticProps: GetStaticProps = async () =>{
//     //require('dotenv').config();
//     const key = process.env.REACT_APP_PINATA_KEY;
//     const secret = process.env.REACT_APP_PINATA_KEY_SECRET;
//     const axios = require('axios');    
//     return {
//         props: {key: "test"}
//     }
// }

const axios = require('axios');        

export const pinJSONToIPFS = async(JSONBody: object, pinataKeys: pinataKeys)=>{
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    console.log(pinataKeys.pinataKey)
    console.log(pinataKeys.pinataSecret)
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: pinataKeys.pinataKey,
                pinata_secret_api_key: pinataKeys.pinataSecret,
            }
        })
        .then(function (response: any) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error: any) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
    });
};
