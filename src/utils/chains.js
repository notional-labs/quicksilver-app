import { devChains } from "./chains/dev";
import { customChain } from "./chains/customChains";

const Chains = {
  //   "preprod": ProdChainInfos,
  prod: customChain,
  //   "test": TestChainInfos,
  dev: devChains,
};

export const ChainInfos = Chains[process.env.NEXT_PUBLIC_REACT_APP_ENV];
