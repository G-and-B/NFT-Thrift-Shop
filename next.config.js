const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// webpack: (config,{isServer}) => {
//   if(isServer){
//     config.node = {
//       fs: 'empty'
//     }
//   }
//   return config
// }

module.exports = nextConfig
