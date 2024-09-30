import {
  ethers,
  JsonRpcProvider,
  Contract,
  Signer,
  NonceManager,
} from "ethers";
import { processTypechainAbis } from "./process-typechain-abis";
import * as typechain from "../typechain-types";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.WALLET_KEY_TESTNET) {
  throw new Error("Provide Wallet Key");
}

const abiMap = processTypechainAbis(typechain, {
  XPReward: "0x456fc3A1FD5f8E0df686b2151e001065d78eDE0c",
});

const provider = new JsonRpcProvider(`https://bartio.rpc.berachain.com/`);

const WALLET_KEY_TESTNET = process.env.WALLET_KEY_TESTNET as string;

const privateKey = WALLET_KEY_TESTNET;

const wallet = new ethers.Wallet(privateKey, provider);

const signer: Signer = new NonceManager(wallet);

const xpReward = new Contract(
  abiMap.XPReward.defaultAddress,
  abiMap.XPReward.abi,
  signer
);

async function runInteractions() {
  console.log("CLAIMING __ XP");
  let tx = await xpReward.claimXP();
  tx.wait();
  console.log("CLAIMED __ XP");

  console.log("UPDATE __ TIME __ SIGNED __ XP");
  tx = await xpReward.updateTimeSigned();
  tx.wait();
  console.log("UPDATED __ TIME __ SIGNED __ XP");

  console.log("UPDATE __ TIME __ UPDATED __ XP");
  tx = await xpReward.updateTimeUpdated();
  tx.wait();
  console.log("UPDATED __ TIME __ UPDATED __ XP");
}

async function main() {
  console.log("Function executed at", new Date().toLocaleTimeString());
  await runInteractions();
}

// Set interval to run the function every 3 minutes (180,000 milliseconds)
const intervalId = setInterval(main, 180000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Function execution stopped after 30 minutes.");
}, 1800000); // 30 minutes in milliseconds
