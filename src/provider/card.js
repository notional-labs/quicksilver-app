"use client";
import { useChain } from "@cosmos-kit/react";
import {
  Box,
  GridItem,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiAlertTriangle } from "react-icons/fi";
import { RejectedWarn, ConnectStatusWarn } from "./warn-block";
import { CopyAddressBtn, ConnectedShowAddress } from "./address-card";
import { ConnectedUserInfo } from "./user-card";
import { Astronaut } from "./astronaut";
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
  const {
    connect,
    openView,
    disconnect,
    status,
    username,
    address,
    message,
    wallet,
    chain,
  } = useChain(chainName);

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

  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={status}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
      error={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
    />
  );

  const userInfo = username && (
    <ConnectedUserInfo username={username} icon={<Astronaut />} />
  );
  const addressBtn = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  return (
    <>
      {/* {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>} */}
      <GridItem px={6}>
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          // bg={useColorModeValue("white", "blackAlpha.400")}
          // boxShadow={useColorModeValue(
          //   "0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3",
          //   "0 0 2px #363636, 0 0 8px -2px #4f4f4f"
          // )}
          spacing={0}
          p={0}
        >
          {/* {userInfo} */}
          {/* {addressBtn} */}
          <Box w="full" maxW={{ base: 52, md: 64 }}>
            {connectWalletButton}
          </Box>
        </Stack>
      </GridItem>
    </>
  );
};

// export default WalletCardSection;
