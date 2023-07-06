import React from "react";
import Image from "next/image";
import {
  atom,
  qAtom,
  favicon,
  kaplrCircle,
  leap,
  cosmos,
  osmosis,
  regen,
  stargaze1,
  evmosSvg,
  junoSvg,
} from "@image/index";
import Validator from "@/components/staking/validator";
function Staking() {
  return (
    <>
      {true ? (
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
                    <h5 class="font-demi">ATOM</h5>
                  </div>
                  <div class="network__stats text-end">
                    <h5 class="font-demi mb-2 text-lightgray">~26.82%</h5>
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
                      <p class="copy-lg font-demi text-gray-50">----</p>
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
                      <button
                        class="btn btn-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#modal_connect-wallet"
                        role="button"
                      >
                        Connect Wallet
                      </button>
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

          {/* Connect Wallet Modal Start Here  */}
          <div
            class="modal fade"
            id="modal_connect-wallet"
            aria-hidden="true"
            aria-labelledby="modal_connect-walletLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title" id="modal_connect-walletLabel">
                    <div class="image-wrapper">
                      <div class="image-ratio image-ratio--square">
                        <Image src={favicon} alt="favicon" />
                      </div>
                    </div>
                    <h6 class="h6-lg font-bold text-lightgray">
                      Connect Your Wallet
                    </h6>
                  </div>
                  <div class="modal-description">
                    <p class="copy-sm text-almostwhite">
                      Select your preferred wallet below.
                    </p>
                  </div>
                  <div class="modal-addition-info">
                    <p class="copy-v-sm font-demi">
                      Don't have a wallet? <a href="#">See supported wallets</a>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {/* Add class [ include-p ] if option are more then 8  */}
                  <div class="preferred_options">
                    <div class="row gx-0">
                      <div class="col-md-6">
                        {/* Preferred Option # 1  */}
                        <div class="preferred_options--each">
                          <input
                            id="option-1"
                            class="option"
                            type="checkbox"
                            // checked
                          />
                          <label for="option-1">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image
                                      src={kaplrCircle}
                                      alt="kaplrCircle"
                                    />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Keplr
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 2  */}
                        <div class="preferred_options--each">
                          <input id="option-2" class="option" type="checkbox" />
                          <label for="option-2">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={leap} alt="leap" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">Leap</p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 3  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input id="option-3" class="option" type="checkbox" />
                          <label for="option-3">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={cosmos} alt="cosmos" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Cosmostation
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Connect Wallet Modal Start Here  */}

          {/* Switch Network Modal Start Here  */}
          <div
            class="modal modal__switch-network fade"
            id="modal_switch-network"
            aria-hidden="true"
            aria-labelledby="modal_switch-networkLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title" id="modal_switch-networkLabel">
                    <div class="image-wrapper">
                      <div class="image-ratio image-ratio--square">
                        <Image src={favicon} alt="favicon" />
                      </div>
                    </div>
                    <h6 class="h6-lg font-bold text-lightgray">
                      Switch Network
                    </h6>
                  </div>
                  <div class="modal-description">
                    <p>
                      Stake Cosmos assets with your preferred validator and
                      receive a qAsset for use in DeFi while earning staking
                      yield. Select a network to get started with liquid
                      staking.
                    </p>
                    <p>
                      By selecting a network, you confirm you accept the
                      Quicksilver Terms of Service.
                    </p>
                  </div>
                  <div class="modal-addition-info">
                    <p class="copy-v-sm font-demi">
                      Don’t see your preferred network?{" "}
                      <a href="#">Request a network</a>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* Add class [ modal-body--include-p ] if option are more then 6  */}
                <div class="modal-body modal-body--include-p">
                  <div class="preferred_options">
                    <div class="row gx-0">
                      <div class="col-md-6">
                        {/* Preferred Option # 1  */}
                        <div class="preferred_options--each">
                          <input
                            id="option-11"
                            class="option"
                            type="checkbox"
                            // checked
                          />
                          <label for="option-11">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={atom} alt="atom" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Cosmos Hub
                                  </p>
                                  <p class="copy-v-sm font-normal">ATOM</p>
                                </div>
                              </div>
                              <div class="content-wrapper__detail">
                                <h6 class="copy-lg font-medium text-lightgray">
                                  25%
                                </h6>
                                <p class="copy-v-sm fw-light text-almostwhite">
                                  APY
                                </p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 2  */}
                        <div class="preferred_options--each">
                          <input
                            id="option-22"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-22">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={osmosis} alt="osmosis" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Osmosis
                                  </p>
                                  <p class="copy-v-sm font-normal">OSMO</p>
                                </div>
                              </div>
                              <div class="content-wrapper__detail">
                                <h6 class="copy-lg font-medium text-lightgray">
                                  25%
                                </h6>
                                <p class="copy-v-sm fw-light text-almostwhite">
                                  APY
                                </p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 3  */}
                        <div class="preferred_options--each">
                          <input
                            id="option-33"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-33">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={regen} alt="regen" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Regen
                                  </p>
                                  <p class="copy-v-sm font-normal">REGEN</p>
                                </div>
                              </div>
                              <div class="content-wrapper__detail">
                                <h6 class="copy-lg font-medium text-lightgray">
                                  25%
                                </h6>
                                <p class="copy-v-sm fw-light text-almostwhite">
                                  APY
                                </p>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 4  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-44"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-44">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="stargaze1" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium">Stargaze</p>
                                  <p class="copy-v-sm font-normal">
                                    <span>Stars</span> - Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 5  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-55"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-55">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={evmosSvg} alt="evomsSvg" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium">Evmos</p>
                                  <p class="copy-v-sm font-normal">
                                    <span>Evmos</span> - Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 6  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-66"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-66">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={junoSvg} alt="junoSvg" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">Juno</p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 7  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-77"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-77">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="stargaze1" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 8  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-88"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-88">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 9  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-99"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-99">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="stargaze1" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 10  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-12"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-12">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="atargaze1" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 11  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-13"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-13">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="stargaze1" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        {/* Preferred Option # 12  */}
                        {/* [ disabled ] class disable the option  */}
                        <div class="preferred_options--each disabled">
                          <input
                            id="option-14"
                            class="option"
                            type="checkbox"
                          />
                          <label for="option-14">
                            <div class="content-wrapper">
                              <div class="content-wrapper__intro">
                                <div class="image-wrapper">
                                  <div class="image-ratio image-ratio--square">
                                    <Image src={stargaze1} alt="stargaze" />
                                  </div>
                                </div>
                                <div class="text-wrapper">
                                  <p class="font-medium text-lightgray">
                                    Stargaze
                                  </p>
                                  <p class="copy-v-sm font-normal text-lightgray">
                                    Coming Soon
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Switch Network Modal Start Here  */}
        </>
      ) : (
        <Validator />
      )}
    </>
  );
}

export default Staking;
