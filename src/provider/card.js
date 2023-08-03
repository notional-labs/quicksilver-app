"use client";
import { useChain } from "@cosmos-kit/react";
import { Box, GridItem, Stack } from "@chakra-ui/react";
import {
  Error,
  Connected,
  Connecting,
  Disconnected,
  NotExist,
  Rejected,
  WalletConnectComponent,
} from "./wallet-connect";

export const WalletCardSection = ({ chainName }) => {
  const { connect, openView, disconnect, status, address, wallet, chain } =
    useChain(chainName);

  // Events
  const onClickConnect = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView = (e) => {
    e.preventDefault();
    // openView();
    disconnect();
  };

  // Components
  const connectWalletButton = (
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected
          onClick={onClickOpenView}
          wallet={wallet}
          address={address}
          chain={chain}
        />
      }
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );

  return (
    <>
      <GridItem px={6}>
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          spacing={0}
          p={0}
        >
          <Box w="full" maxW={{ base: 52, md: 64 }}>
            {connectWalletButton}
          </Box>
        </Stack>
      </GridItem>
    </>
  );
};
