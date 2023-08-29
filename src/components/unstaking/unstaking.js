"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { atom, qAtom } from "@image/index";
import { useChain } from "@cosmos-kit/react";
import { QuickSilverChainInfo } from "@/utils/chains";
import { cosmos } from "juno-network";
import { useSelector } from "react-redux";
import { quicksilverSelector } from "@/slices/quicksilver";

function Unstaking({ selectedNetwork, quickSilverBalance, balance }) {
  let quicksilverAddress = useSelector(quicksilverSelector);
  quicksilverAddress = quicksilverAddress.quicksilverAddress || "";
  console.log("Here is the data", quicksilverAddress);
  const [unStakingAmount, setUnStakingAmount] = useState();
  const [atomAmount, setAtomAmount] = useState();
  const qAtomAmount =
    quickSilverBalance && quickSilverBalance.amount
      ? (Number(quickSilverBalance.amount) * Math.pow(10, -6)).toFixed(2)
      : Number(0).toFixed(2);

  let localChain;
  if (typeof window !== "undefined") {
    localChain = localStorage.getItem("selected-chain");
  }
  const { isWalletConnected, address, openView, getSigningStargateClient } =
    useChain(localChain || "elgafar-1");
  //   const { getSigningStargateClient } = useChain(QuickSilverChainInfo.chainId);

  useEffect(() => {
    if (unStakingAmount && selectedNetwork && selectedNetwork.redemption_rate) {
      setAtomAmount(
        (selectedNetwork?.redemption_rate * unStakingAmount).toFixed(2)
      );
    } else {
      setAtomAmount("");
    }
  }, [unStakingAmount]);

  const sendTokens = (getSigningStargateClient, address) => {
    return async () => {
      const stargateClient = await getSigningStargateClient();
      if (!stargateClient || !address) {
        console.error("stargateClient undefined or address undefined.");
        return;
      }

      const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

      const msg = {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: {
          amount: [
            {
              denom: "uqatom",
              amount: String(unStakingAmount * Math.pow(10, 6)),
            },
          ],
          toAddress: address,
          fromAddress: quicksilverAddress,
        },
      };

      const fee = {
        amount: [
          {
            denom: "uqatom",
            amount: String(unStakingAmount * Math.pow(10, 6)),
          },
        ],
        gas: "86364",
      };
      try {
        const response = await stargateClient.signAndBroadcast(
          address,
          [msg],
          fee
        );
        console.log("response", response);
        return response;
        // setResp(JSON.stringify(response, null, 2));
      } catch (error) {
        console.log("error", error);
      }
    };
  };
  async function unstake() {
    const val = sendTokens(getSigningStargateClient, address);
    console.log("val", val);
    try {
      //   setIsLoading(true);
      //   setShowSummaryModal(false);
      //   setShowStatusModal(true);
      const broadCastResult = await val();
      console.log("val 2", broadCastResult);
      if (broadCastResult.code === 0) {
        // setIsLoading(false);
        // setIsSuccess(true);
        // setTransactionHash(broadCastResult.transactionHash);
        console.log(broadCastResult);
      } else {
        console.log(broadCastResult);
        // setIsLoading(false);
        // setIsSuccess(false);
        // setError("The transaction failed! Please try again.");
      }
    } catch (err) {
      //   setIsLoading(false);
      //   setIsSuccess(false);
      //   setShowSummaryModal(false);
      //   setShowStatusModal(true);
      console.log(err);
      //   setError("The transaction failed! Please try again.");
    }
  }
  return (
    <div
      class="staking_tab tab-pane fade show active"
      id="staking_2"
      role="tabpanel"
      aria-labelledby="staking_2-tab"
    >
      <div class="staking_tab--amount staking_tab--amount__to-stake">
        <p class="copy-lg font-medium mb-1">Amount to Unstake</p>
        <div class="staking_tab--amount__network">
          <div class="network">
            <div class="image-wrapper">
              <div class="image-ratio image-ratio--square">
                <Image src={qAtom} alt="qAtom" />
              </div>
            </div>
            <h6 class="font-medium">
              {selectedNetwork && selectedNetwork != "Select a network" ? (
                <>
                  {selectedNetwork.local_denom[1] +
                    selectedNetwork.local_denom.slice(2).toUpperCase()}
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
              value={unStakingAmount}
              onChange={(e) => {
                setUnStakingAmount(e.target.value);
              }}
            />
            <p>$0.00</p>
          </div>
        </div>
        <div class="staking_tab--amount__balance mt-2">
          <p class="copy-sm text-uppercase">
            BALANCE: {qAtomAmount}{" "}
            {selectedNetwork && selectedNetwork != "Select a network" ? (
              <>
                {selectedNetwork.local_denom[1] +
                  selectedNetwork.local_denom.slice(2).toUpperCase()}
              </>
            ) : (
              <>qATOM</>
            )}
          </p>
          <ul class="list-reset staking_tab--amount__balance--options">
            <li>
              <button
                class="tag"
                type="button"
                onClick={() => {
                  setUnStakingAmount(Number(qAtomAmount / 2).toFixed(2));
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
                  setUnStakingAmount(Number(qAtomAmount).toFixed(2));
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
                <Image src={atom} alt="atom" />
              </div>
            </div>
            <h6 class="font-medium">
              {selectedNetwork && selectedNetwork != "Select a network" ? (
                <>{selectedNetwork.base_denom.slice(1).toUpperCase()}</>
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
              value={atomAmount}
              disabled
            />
            {/* <h5 class="font-normal">0.00</h5> */}
            <p>$0.00</p>
          </div>
        </div>
        <div class="staking_tab--amount__balance mt-2">
          <p class="copy-sm text-uppercase">
            BALANCE: {balance.toFixed(2)}{" "}
            {selectedNetwork && selectedNetwork != "Select a network" ? (
              <>{selectedNetwork.base_denom.slice(1).toUpperCase()}</>
            ) : (
              <>ATOM</>
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
              {selectedNetwork && selectedNetwork != "Select a network" ? (
                <>{selectedNetwork.base_denom.slice(1).toUpperCase()}</>
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
              {selectedNetwork && selectedNetwork != "Select a network" ? (
                <span>
                  1{" "}
                  {selectedNetwork.local_denom[1] +
                    selectedNetwork.local_denom.slice(2).toUpperCase()}
                  = {parseFloat(selectedNetwork?.redemption_rate).toFixed(4)}{" "}
                  {selectedNetwork.base_denom.slice(1).toUpperCase()}
                </span>
              ) : (
                <>
                  <span>1 qATOM = 1.243222</span> ATOM
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
            {selectedNetwork && selectedNetwork != "Select a network" ? (
              <p class="copy-normal font-medium text-lightgray ms-auto">
                {selectedNetwork.unbonding_period / (8.64 * Math.pow(10, 13))}{" "}
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
      <div class="staking_tab--btn mt-4">
        {isWalletConnected ? (
          <button
            class={`btn btn-primary w-100 ${
              (!unStakingAmount && "disabled") ||
              (qAtomAmount < unStakingAmount && "disabled")
            }`}
            data-bs-toggle="modal"
            data-bs-target="#modal_connect-wallet"
            role="button"
            onClick={() => {
              unstake();
            }}
          >
            Unstake
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
  );
}

export default Unstaking;
