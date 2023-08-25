"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { atom, qAtom } from "@image/index";
import Validator from "@/components/staking/validator";
import Allocate from "@/components/staking/allocate";
import { useChain, useWallet, useWalletClient } from "@cosmos-kit/react";
import { useDispatch, useSelector } from "react-redux";
import { _loadValsAsync, validatorListSelector } from "@/slices/validatorList";
import { cosmos } from "juno-network";
import { selectedNetworkSelector } from "@/slices/selectedNetworks";

function Staking() {
  const dispatch = useDispatch();
  let selectedNetwork = useSelector(selectedNetworkSelector);
  const apy = selectedNetwork?.selectedNetwork?.apy || 0;
  selectedNetwork =
    selectedNetwork?.selectedNetwork?.value || selectedNetwork.selectedNetwork;

  const [step, setStep] = useState(1);
  const [stakingAmount, setStakingAmount] = useState();
  const [qatomAmount, setQatomAmount] = useState();

  let localChain;
  if (typeof window !== "undefined") {
    localChain = localStorage.getItem("selected-chain");
  }
  const { isWalletConnected, chain, address, openView, getRpcEndpoint } =
    useChain(localChain || "elgafar-1");

  let walletData;
  if (typeof window !== "undefined") {
    walletData = localStorage.getItem("cosmos-kit@1:core//current-wallet");
  }
  const { mainWallet, chainWallets, wallet, status, message } =
    useWallet(walletData);
  console.log("isWalletconnected", isWalletConnected, chain, address);
  console.log(
    "Yesssssssssss",
    mainWallet,
    chainWallets,
    wallet,
    status,
    message,
    walletData
  );

  //////////////////////////////////////////

  const chainName = localChain || "elgafar-1";
  const coin = chain.staking.staking_tokens[0] || {};

  const [balance, setBalance] = useState(0);
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const getBalance = async () => {
    if (!address) {
      setBalance(0);
      setFetchingBalance(false);
      return;
    }

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.info("no rpc endpoint — using a fallback");
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint:
        typeof rpcEndpoint === "string" ? rpcEndpoint : rpcEndpoint.url,
    });
    // fetch balance
    const balance = await client.cosmos.bank.v1beta1.balance({
      address,
      // denom: "uatom",
      denom: coin.minimal_denom,
    });

    const exp = coin.decimals;
    const a = balance.balance?.amount || 0;
    const amount = a * Math.pow(10, -exp);
    setBalance(amount);
    setFetchingBalance(false);
  };

  //////////////////////////////////////

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    if (isWalletConnected) {
      dispatch(_loadValsAsync(chain.chain_id));
    }
  }, [isWalletConnected]);

  useEffect(() => {
    if (isWalletConnected) {
      getBalance();
    }
  }, [isWalletConnected, selectedNetwork.chain_id]);

  useEffect(() => {
    if (stakingAmount && selectedNetwork && selectedNetwork.redemption_rate) {
      setQatomAmount(
        ((1 / selectedNetwork?.redemption_rate) * stakingAmount).toFixed(2)
      );
    } else {
      setQatomAmount("");
    }
  }, [stakingAmount]);
  return (
    <>
      {step == 1 ? (
        <>
          {/* Site Header Start here  */}
          <div
            class="site-header"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div class="site-header__active-network">
              <div class="active-network">
                {/* Active Network - About  */}
                <div class="active-network__each active-network__each--about">
                  <div class="network">
                    <div class="image-wrapper">
                      <div class="image-ratio image-ratio--square">
                        <Image src={atom} alt="atom" />
                      </div>
                    </div>
                    <h5 class="font-demi">
                      {selectedNetwork &&
                      selectedNetwork != "Select a network" ? (
                        <>{selectedNetwork.base_denom.slice(1).toUpperCase()}</>
                      ) : (
                        "ATOM"
                      )}
                    </h5>
                  </div>
                  <div class="network__stats text-end">
                    <h5 class="font-demi mb-2 text-lightgray">~{apy}%</h5>
                    <p class="copy-v-sm font-light text-uppercase">
                      QUICKSILVER APY
                    </p>
                  </div>
                </div>
                {/* Active Network - Portfolio  */}
                <div class="active-network__each active-network__each--portfolio">
                  <h6 class="active-network__each--title">My portfolio</h6>
                  {/* Add a class [ include-pt ] to [ ul ] if needed  */}
                  {/* And it will be based on the text existance  */}
                  <ul class="list-reset">
                    <li>
                      {/* Toggle classes of [ p ] b/w [ text-lightgray ] and [ text-gray-50 ]  */}
                      {/* And it will be based on the text existance  */}
                      <p
                        class={`copy-lg font-demi ${
                          isWalletConnected ? "text-lightgray" : "text-gray-50"
                        } `}
                      >
                        {isWalletConnected ? (
                          <>
                            {balance.toFixed(2)}{" "}
                            {selectedNetwork &&
                            selectedNetwork != "Select a network" ? (
                              <>
                                {selectedNetwork.base_denom
                                  .slice(1)
                                  .toUpperCase()}
                              </>
                            ) : (
                              <>ATOM</>
                            )}
                          </>
                        ) : (
                          <>----</>
                        )}
                      </p>
                      <span
                        class="copy-v-sm text-orange"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="Tokens in your wallet <br> available to stake"
                      >
                        Available to Stake
                      </span>
                    </li>
                    <li>
                      {/* Toggle classes of [ p ] b/w [ text-lightgray ] and [ text-gray-50 ]  */}
                      {/* And it will be based on the text existance  */}
                      <p class="copy-lg font-demi text-gray-50">----</p>
                      <span
                        class="copy-v-sm text-orange"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="qAssets are liquid <br> representatives of <br> your staked Assets"
                      >
                        Total Staked
                      </span>
                    </li>
                    <li>
                      {/* Toggle classes of [ p ] b/w [ text-lightgray ] and [ text-gray-50 ]  */}
                      {/* And it will be based on the text existance  */}
                      <p class="copy-lg font-demi text-gray-50">----</p>
                      <span
                        class="copy-v-sm text-orange"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="Tokens being unbonded <br> from a validator"
                      >
                        Total Unstaking
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Active Network - Stats  */}
                <div class="active-network__each active-network__each--stats">
                  <h6 class="active-network__each--title">STATS</h6>
                  <ul class="list-reset include-pt">
                    <li>
                      <p class="copy-lg font-demi text-lightgray">$ 383.12M</p>
                      <span
                        class="copy-v-sm text-orange"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="TVL is equal to the USD <br> value of all assets held by <br> the protocol."
                      >
                        Total Value Locked
                      </span>
                    </li>
                    <li>
                      <p class="copy-lg font-demi text-lightgray">$ 383.12M</p>
                      <span
                        class="copy-v-sm text-orange"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="TVL is equal to the USD <br> value of all assets held <br> by the protocol."
                      >
                        Monthly Rewards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Site Header Ends here  */}

          {/* Staking Start here  */}
          <div class="staking">
            <div class="container">
              <div class="staking__inner">
                {/* Tabs Filters [ Stake/Unstake ] [ If you are using Loop, replace (_1) (_2) with index respectively ]  */}
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="staking_1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#staking_1"
                      type="button"
                      role="tab"
                      aria-controls="staking_1"
                      aria-selected="true"
                    >
                      Stake
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      id="staking_2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#staking_2"
                      type="button"
                      role="tab"
                      aria-controls="staking_2"
                      aria-selected="false"
                    >
                      Unstake
                    </button>
                  </li>
                </ul>
                {/* Tabs Content [ Stake/Unstake ] [ If you are using Loop, replace (_1) (_2) with index respectively ]  */}
                <div class="tab-content__staking tab-content">
                  <div
                    class="staking_tab tab-pane fade show active"
                    id="staking_1"
                    role="tabpanel"
                    aria-labelledby="staking_1-tab"
                  >
                    <div class="staking_tab--amount staking_tab--amount__to-stake">
                      <p class="copy-lg font-medium mb-1">Amount to Stake</p>
                      <div class="staking_tab--amount__network">
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <Image src={atom} alt="atom" />
                            </div>
                          </div>
                          <h6 class="font-medium">
                            {selectedNetwork &&
                            selectedNetwork != "Select a network" ? (
                              <>
                                {selectedNetwork.base_denom
                                  .slice(1)
                                  .toUpperCase()}
                              </>
                            ) : (
                              <>ATOM</>
                            )}
                          </h6>
                        </div>
                        <div class="network__stats text-end">
                          <input
                            type="number"
                            class="input-lg"
                            placeholder="0.00"
                            value={stakingAmount}
                            onChange={(e) => {
                              setStakingAmount(e.target.value);
                            }}
                          />
                          <p>$0.00</p>
                        </div>
                      </div>
                      <div class="staking_tab--amount__balance mt-2">
                        <p class="copy-sm text-uppercase">
                          BALANCE: {balance.toFixed(2)}{" "}
                          {selectedNetwork &&
                          selectedNetwork != "Select a network" ? (
                            <>
                              {selectedNetwork.base_denom
                                .slice(1)
                                .toUpperCase()}
                            </>
                          ) : (
                            <>ATOM</>
                          )}
                        </p>
                        <ul class="list-reset staking_tab--amount__balance--options">
                          <li>
                            <button
                              class="tag"
                              type="button"
                              onClick={() => {
                                setStakingAmount((balance / 2).toFixed(2));
                              }}
                            >
                              Half
                            </button>
                          </li>
                          <li>
                            <button
                              class="tag"
                              type="button"
                              onClick={() => {
                                setStakingAmount(balance.toFixed(2));
                              }}
                            >
                              Max
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="staking_tab--amount staking_tab--amount__to-received">
                      <p class="copy-lg font-medium mb-1">Amount Received</p>
                      <div class="staking_tab--amount__network">
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <Image src={qAtom} alt="qAtom" />
                            </div>
                          </div>
                          <h6 class="font-medium">
                            {selectedNetwork &&
                            selectedNetwork != "Select a network" ? (
                              <>
                                {selectedNetwork.local_denom[1] +
                                  selectedNetwork.local_denom
                                    .slice(2)
                                    .toUpperCase()}
                              </>
                            ) : (
                              <>qATOM</>
                            )}
                          </h6>
                        </div>
                        <div class="network__stats text-end">
                          <input
                            type="number"
                            class="input-lg"
                            placeholder="0.00"
                            value={qatomAmount}
                            disabled
                          />
                          {/* <h5 class="font-normal">
                            {qatomAmount ? qatomAmount : "0.00"}
                          </h5> */}
                          <p>$0.00</p>
                        </div>
                      </div>
                      <div class="staking_tab--amount__balance mt-2">
                        <p class="copy-sm text-uppercase">
                          BALANCE: 0.00{" "}
                          {selectedNetwork &&
                          selectedNetwork != "Select a network" ? (
                            <>
                              {selectedNetwork.local_denom[1] +
                                selectedNetwork.local_denom
                                  .slice(2)
                                  .toUpperCase()}
                            </>
                          ) : (
                            <>qATOM</>
                          )}
                        </p>
                      </div>
                    </div>
                    <div class="staking_tab--additional-costs">
                      <ul class="list-reset">
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Transactions take place <br> on the native chain."
                          >
                            Transaction Cost
                          </span>
                          <p class="copy-normal font-medium text-lightgray ms-auto">
                            <span>14,103.281212</span>{" "}
                            {selectedNetwork &&
                            selectedNetwork != "Select a network" ? (
                              <>
                                {selectedNetwork.base_denom
                                  .slice(1)
                                  .toUpperCase()}
                              </>
                            ) : (
                              "ATOM"
                            )}
                          </p>
                        </li>
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Redemption rate is the value of 1 qATOM <br> if redeemed for ATOM on the Quicksilver <br> protocol. The value of qATOM increases <br> over time as rewards accrue."
                          >
                            Redemption rate
                          </span>
                          <p class="copy-normal font-medium text-lightgray ms-auto">
                            {selectedNetwork &&
                            selectedNetwork != "Select a network" ? (
                              <span>
                                1{" "}
                                {selectedNetwork.base_denom
                                  .slice(1)
                                  .toUpperCase()}{" "}
                                ={" "}
                                {parseFloat(
                                  1 / selectedNetwork?.redemption_rate
                                ).toFixed(4)}{" "}
                                {selectedNetwork.local_denom[1] +
                                  selectedNetwork.local_denom
                                    .slice(2)
                                    .toUpperCase()}{" "}
                              </span>
                            ) : (
                              <>
                                <span>1 ATOM = 1.243222</span> qATOM
                              </>
                            )}
                          </p>
                        </li>
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Length of time to unstake tokens from a <br> validator. Unbonding time is set by the <br> native chain. To exit a position faster, <br> sell qAsset for Asset on Osmosis."
                          >
                            Unbonding Period
                          </span>
                          {selectedNetwork &&
                          selectedNetwork != "Select a network" ? (
                            <p class="copy-normal font-medium text-lightgray ms-auto">
                              {selectedNetwork.unbonding_period /
                                (8.64 * Math.pow(10, 13))}{" "}
                              days
                            </p>
                          ) : (
                            <p class="copy-normal font-medium text-lightgray ms-auto">
                              7 days
                            </p>
                          )}
                        </li>
                      </ul>
                    </div>
                    <div class="staking_tab--confirmation">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckChecked"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Click here to use <br> your existing stake <br> allocation intent."
                        >
                          Proceed with Existing Intent
                        </label>
                      </div>
                    </div>
                    <div class="staking_tab--btn mt-4">
                      {isWalletConnected ? (
                        <button
                          class={`btn btn-primary w-100 ${
                            (balance < stakingAmount && "disabled") ||
                            (!stakingAmount && "disabled")
                          } `}
                          data-bs-toggle="modal"
                          data-bs-target="#modal_connect-wallet"
                          role="button"
                          disabled={balance < stakingAmount}
                          onClick={() => {
                            setStep(2);
                          }}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          class="btn btn-primary w-100"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_connect-wallet"
                          role="button"
                          onClick={() => {
                            openView();
                          }}
                        >
                          Connect Wallet
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    class="staking_tab tab-pane fade"
                    id="staking_2"
                    role="tabpanel"
                    aria-labelledby="staking_2-tab"
                  >
                    <div class="staking_tab--amount staking_tab--amount__to-stake">
                      <p class="copy-lg font-medium mb-1">Amount to Stake</p>
                      <div class="staking_tab--amount__network">
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <Image src={atom} alt="atom" />
                            </div>
                          </div>
                          <h6 class="font-medium">ATOM</h6>
                        </div>
                        <div class="network__stats text-end">
                          <input
                            type="number"
                            class="input-lg"
                            placeholder="0.00"
                          />
                          <p>$0.00</p>
                        </div>
                      </div>
                      <div class="staking_tab--amount__balance mt-2">
                        <p class="copy-sm text-uppercase">BALANCE: 0.00 ATOM</p>
                        <ul class="list-reset staking_tab--amount__balance--options">
                          <li>
                            <button class="tag" type="button">
                              Half
                            </button>
                          </li>
                          <li>
                            <button class="tag" type="button">
                              Max
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="staking_tab--amount staking_tab--amount__to-received">
                      <p class="copy-lg font-medium mb-1">Amount Received</p>
                      <div class="staking_tab--amount__network">
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <Image src={qAtom} alt="qAtom" />
                            </div>
                          </div>
                          <h6 class="font-medium">qATOM</h6>
                        </div>
                        <div class="network__stats text-end">
                          <h5 class="font-normal">0.00</h5>
                          <p>$0.00</p>
                        </div>
                      </div>
                      <div class="staking_tab--amount__balance mt-2">
                        <p class="copy-sm text-uppercase">
                          BALANCE: 0.00 qATOM
                        </p>
                      </div>
                    </div>
                    <div class="staking_tab--additional-costs">
                      <ul class="list-reset">
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Transactions take place <br> on the native chain."
                          >
                            Transaction Cost
                          </span>
                          <p class="copy-normal font-medium text-lightgray ms-auto">
                            <span>14,103.281212</span> ATOM
                          </p>
                        </li>
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Redemption rate is the value of 1 qATOM <br> if redeemed for ATOM on the Quicksilver <br> protocol. The value of qATOM increases <br> over time as rewards accrue."
                          >
                            Redemption rate
                          </span>
                          <p class="copy-normal font-medium text-lightgray ms-auto">
                            <span>1 ATOM = 1.243222</span> qATOM
                          </p>
                        </li>
                        <li>
                          <span
                            class="copy-normal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-html="true"
                            title="Length of time to unstake tokens from a <br> validator. Unbonding time is set by the <br> native chain. To exit a position faster, <br> sell qAsset for Asset on Osmosis."
                          >
                            Unbonding Period
                          </span>
                          <p class="copy-normal font-medium text-lightgray ms-auto">
                            7 days
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div class="staking_tab--btn mt-4">
                      <button
                        class="btn btn-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#modal_connect-wallet"
                        role="button"
                      >
                        Unstake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Staking Ends here  */}
        </>
      ) : step == 2 ? (
        <Validator
          setStep={setStep}
          stakingAmount={stakingAmount}
          coin={coin}
        />
      ) : (
        <Allocate setStep={setStep} stakingAmount={stakingAmount} coin={coin} />
      )}
    </>
  );
}

export default Staking;
