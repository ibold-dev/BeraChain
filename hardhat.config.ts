import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.WALLET_KEY_TESTNET) {
  throw new Error("Provide Testnet Wallet API Key");
}

const WALLET_KEY_TESTNET = process.env.WALLET_KEY_TESTNET as string;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      bartio_testnet: "bartio_testnet", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "bartio_testnet",
        chainId: 80084,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan",
          browserURL: "https://bartio.beratrail.io",
        },
      },
    ],
  },
  networks: {
    // for devnet
    bartio_testnet: {
      url: `https://bartio.rpc.berachain.com/`,
      accounts: [WALLET_KEY_TESTNET],
      gasPrice: 1000000000,
    },
  },
};

export default config;
