"use client";
import { useManager } from "@cosmos-kit/react";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { ConnectWalletButton } from "./wallet-connect";
import { ChainName } from "@cosmos-kit/core";
import { WalletCardSection } from "./card";

export const WalletSection = () => {
  const [chainName, setChainName] = useState("cosmoshub");
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  useEffect(() => {
    setChainName(window.localStorage.getItem("selected-chain") || "cosmoshub");
  }, []);

  const onChainChange = async (selectedValue) => {
    setChainName(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem("selected-chain", selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem("selected-chain");
    }
  };

  //   const chooseChain = (
  //     <ChooseChain
  //       chainName={chainName}
  //       chainInfos={chainOptions}
  //       onChange={onChainChange}
  //     />
  //   );

  return (
    <Center p={0}>
      <Grid
        w="full"
        maxW="sm"
        templateColumns="1fr"
        alignItems="center"
        justifyContent="center"
        p={0}
      >
        {/* <GridItem>{chooseChain}</GridItem> */}
        {chainName ? (
          <WalletCardSection chainName={chainName}></WalletCardSection>
        ) : (
          <ConnectWalletButton buttonText={"Connect Wallet"} isDisabled />
        )}
      </Grid>
    </Center>
  );
};
