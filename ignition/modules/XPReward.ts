// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const XPRewardModule = buildModule("XPRewardModule", (m) => {
  const xPReward = m.contract("XPReward");

  return { xPReward };
});

export default XPRewardModule;
