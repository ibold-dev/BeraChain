import { Abi } from "abitype";

export type AbiMapValue = {
  abi: Abi;
  defaultAddress?: string;
};

export type AbiMap = {
  [key: string]: AbiMapValue;
};

export type TypeChainObj = {
  [K: `${string}__factory`]: TypeChainFactory;
};

export type TypeChainFactory = {
  abi: Abi;
};
