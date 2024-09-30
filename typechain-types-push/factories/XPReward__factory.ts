/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { XPReward, XPRewardInterface } from "../XPReward";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "XPClaimed",
    type: "event",
  },
  {
    inputs: [],
    name: "claimXP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyXP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeUntilNextClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timesSigned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timesUpdated",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateTimeSigned",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateTimeUpdated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "xpBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260008055600060015534801561001957600080fd5b50610754806100296000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636dd73944116100665780636dd73944146101205780639770f0131461013e578063a55675d61461015c578063c58ce0c014610166578063dfe35b041461017057610093565b806302ee0efb146100985780631acf282e146100c857806329f1eba3146100e657806349d147d414610116575b600080fd5b6100b260048036038101906100ad91906104db565b61018e565b6040516100bf9190610521565b60405180910390f35b6100d06101a6565b6040516100dd9190610521565b60405180910390f35b61010060048036038101906100fb91906104db565b6101ac565b60405161010d9190610521565b60405180910390f35b61011e6101c4565b005b6101286101de565b6040516101359190610521565b60405180910390f35b610146610298565b6040516101539190610521565b60405180910390f35b61016461029e565b005b61016e6102b7565b005b610178610431565b6040516101859190610521565b60405180910390f35b60036020528060005260406000206000915090505481565b60005481565b60026020528060005260406000206000915090505481565b600160008154809291906101d79061056b565b9190505550565b6000603c600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461022c91906105b3565b421061023b5760009050610295565b42603c600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461028891906105b3565b61029291906105e7565b90505b90565b60015481565b6000808154809291906102b09061056b565b9190505550565b603c600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461030391906105b3565b421015610345576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033c9061069e565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103d991906105b3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f7b62bb2cd98fa42d3b236fc7ed5382f42a1f206651d2f594c1411c305a91cd2860016040516104279190610703565b60405180910390a2565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104a88261047d565b9050919050565b6104b88161049d565b81146104c357600080fd5b50565b6000813590506104d5816104af565b92915050565b6000602082840312156104f1576104f0610478565b5b60006104ff848285016104c6565b91505092915050565b6000819050919050565b61051b81610508565b82525050565b60006020820190506105366000830184610512565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061057682610508565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036105a8576105a761053c565b5b600182019050919050565b60006105be82610508565b91506105c983610508565b92508282019050808211156105e1576105e061053c565b5b92915050565b60006105f282610508565b91506105fd83610508565b92508282039050818111156106155761061461053c565b5b92915050565b600082825260208201905092915050565b7f596f752063616e206f6e6c7920636c61696d206f6e636520657665727920312060008201527f6d696e7574652e00000000000000000000000000000000000000000000000000602082015250565b600061068860278361061b565b91506106938261062c565b604082019050919050565b600060208201905081810360008301526106b78161067b565b9050919050565b6000819050919050565b6000819050919050565b60006106ed6106e86106e3846106be565b6106c8565b610508565b9050919050565b6106fd816106d2565b82525050565b600060208201905061071860008301846106f4565b9291505056fea264697066735822122043953b9f814c1e2940b25796c0c5d55e605170c99adaddffe97a02050c7a4d0a64736f6c63430008140033";

type XPRewardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XPRewardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XPReward__factory extends ContractFactory {
  constructor(...args: XPRewardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      XPReward & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): XPReward__factory {
    return super.connect(runner) as XPReward__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XPRewardInterface {
    return new Interface(_abi) as XPRewardInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): XPReward {
    return new Contract(address, _abi, runner) as unknown as XPReward;
  }
}