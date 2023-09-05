"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { atom, quicksilverSvg } from "@image/index";
// import SwiperCore, { Navigation } from "swiper";
// import "swiper/swiper-bundle.min.css";
// SwiperCore.use([Navigation]);
import Table from "../../components/assets/table";
import Card from "../../components/assets/assetsCard";
import { CardData } from "../../utils/assetsCardData";
import Reward from "../../components/assets/rewards";
import NotificationFailedModel from "../../components/assets/notificationFailedModel";
import NotificationSuccessModel from "../../components/assets/notificationSuccessModel";
import RewardClaimModel from "../../components/assets/claimRewardModel";
import PortfolioListData from "@/utils/assetsPortfolioListData";
import stakeIntentData from "@/utils/assetsstakeIntentData";

const Assets = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [claimReward, setClaimReward] = useState("1");
  const [isAssetsConnected, setIsAssetsConnected] = useState(true);
  const [isAssestsUnConnected, setIsAssetsUnConnected] = useState(false);
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  const toggleFilterDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClaimReward = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // const swiper = new SwiperCore(".swiper", {
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
  }, []);

  return (
    <div>
      <Reward
        handleClaimReward={handleClaimReward}
        claimReward={claimReward}
        isAssetsConnected={isAssetsConnected}
      />

      {/* Assets Start Here */}
      <div class="assets">
        <div class="container">
          {/* Own Assets */}
          <div class="assets__own">
            {/* Assets Profile */}

            {/* <AssetsProfile isAssetsConnected={isAssetsConnected} /> */}

            <div class="assets__profile">
              <div class="assets__profile__inner">
                {/* Network */}
                <div class="assets__profile--network">
                  <div class="image-wrapper">
                    <Image src={quicksilverSvg} alt="" />
                  </div>
                  <div class="text-wrapper">
                    <h3 class="font-bold text-lightgray">QCK</h3>
                  </div>
                </div>
                {/* Network Stats */}
                <div class="assets__profile--network-stats">
                  <h3 class="h3-sm font-bold text-lightgray">
                    12.34%
                    <span class="copy-sm font-normal text-gray-secondary text-uppercase">
                      STAKING APY
                    </span>
                  </h3>
                </div>
                {/* Network Balance */}
                {isAssetsConnected && isDataAvailable ? (
                  <div class="assets__profile--balances">
                    <ul class="list-reset">
                      <li>
                        <p class="copy-sm">Quicksilver Balance</p>
                        <span class="font-medium">10.123456</span>
                      </li>
                      <li>
                        <p class="copy-sm">Other Chain Balance</p>
                        <span class="font-medium">10.123456</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <div class="assets__profile--balances">
                      <ul class="list-reset">
                        <li>
                          <p class="copy-sm">Quicksilver Balance</p>
                          <span class="font-medium">----</span>
                        </li>
                        <li>
                          <p class="copy-sm">Other Chain Balance</p>
                          <span class="font-medium">----</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {/* Network Actions */}

                {isAssetsConnected && isDataAvailable ? (
                  <>
                    <div
                      class="btn-wrapper"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <a href="" class="btn btn--sm btn-transparent">
                        Deposit
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.5L10 4.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.58398 4.58398H10.4173V10.4173"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                      <a href="" class="btn btn--sm btn-transparent">
                        Withdraw
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.5L10 4.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.58398 4.58398H10.4173V10.4173"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      class="btn-wrapper"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      {/* If assets are disconnected, show disabled buttons or some other message */}
                      <button class="btn btn--sm btn-transparent" disabled>
                        Deposit
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.5L10 4.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.58398 4.58398H10.4173V10.4173"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <button class="btn btn--sm btn-transparent" disabled>
                        Withdraw
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.5L10 4.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.58398 4.58398H10.4173V10.4173"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
                {/* </div> */}
              </div>
            </div>
            {/* Assets Portfolio */}
            <div class="assets__portfolio">
              <div class="assets__portfolio__inner">
                {/* Title */}
                <div class="assets__portfolio--title text-gray-secondary">
                  <h6 class="copy-lg font-black text-uppercase">
                    My QUICKSILVER Portfolio
                  </h6>
                </div>
                {/* Stats */}
                {isAssestsUnConnected ? (
                  <>
                    <div class="assets__portfolio--stats">
                      <ul class="list-reset">
                        <li>
                          <p class="copy-v-sm font-medium text-lightgray">
                            TOTAL
                          </p>
                          <p class="copy-sm font-light text-lightgray">
                            AVG APY: <span class="font-bold">--</span>
                          </p>
                        </li>
                        <li>
                          <h3 class="text-lightgray font-bold">--</h3>
                          <p class="copy-sm font-light text-lightgray">
                            AVG APY: <span class="font-bold">--</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* Portfolio Items */}
                    <div class="assets__portfolio--items">
                      <ul class="list-reset">
                        {PortfolioListData.length > 0 &&
                          PortfolioListData.map((item, index) => (
                            <li key={index}>
                              {/* Row # 1 */}
                              <div class="assets__portfolio--items__each">
                                {/* Network */}
                                <div class="network">
                                  <div class="image-wrapper">
                                    <div class="image-ratio image-ratio--square">
                                      <Image src={item.image} alt="" />
                                    </div>
                                  </div>
                                  <div class="text-wrapper text-almostwhite">
                                    <p class="copy-sm font-medium">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                                {/* Network Percentage Occupied */}
                                <div class="network__occupied">
                                  {/* Progress Bar */}
                                  <div class="network__occupied--progress-bar">
                                    {/* Set default width to 10%, if more set accordingly */}
                                    <div
                                      class="network__occupied--progress-bar__value"
                                      style={{
                                        width: `${
                                          item.percentadge
                                            ? item.percentadge
                                            : "0%"
                                        }`,
                                      }}
                                    ></div>
                                  </div>
                                  {/* Occupied Percentage */}
                                  <div class="network__occupied--percentage">
                                    <p class="copy-v-sm text-lightgray">
                                      {item.percentadge}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div class="assets__portfolio--stats">
                      <ul class="list-reset">
                        <li>
                          <p class="copy-v-sm font-medium text-lightgray">
                            TOTAL
                          </p>
                          <p class="copy-sm font-light text-lightgray">
                            AVG APY: <span class="font-bold">6.56%</span>
                          </p>
                        </li>
                        <li>
                          <h3 class="text-lightgray font-bold">$ 1,222.28</h3>
                          <p class="copy-sm font-light text-lightgray">
                            AVG APY: <span class="font-bold">$3,917</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* Portfolio Items */}
                    <div class="assets__portfolio--items">
                      <ul class="list-reset">
                        {PortfolioListData.length > 0 &&
                          PortfolioListData.map((item, index) => (
                            <li key={index}>
                              {/* Row # 1 */}
                              <div class="assets__portfolio--items__each">
                                {/* Network */}
                                <div class="network">
                                  <div class="image-wrapper">
                                    <div class="image-ratio image-ratio--square">
                                      <Image src={item.image} alt="" />
                                    </div>
                                  </div>
                                  <div class="text-wrapper text-almostwhite">
                                    <p class="copy-sm font-medium">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                                {/* Network Percentage Occupied */}
                                <div class="network__occupied">
                                  {/* Progress Bar */}
                                  <div class="network__occupied--progress-bar">
                                    {/* Set default width to 10%, if more set accordingly */}
                                    <div
                                      class="network__occupied--progress-bar__value"
                                      style={{
                                        width: `${
                                          item.percentadge
                                            ? item.percentadge
                                            : "0%"
                                        }`,
                                      }}
                                    ></div>
                                  </div>
                                  {/* Occupied Percentage */}
                                  <div class="network__occupied--percentage">
                                    <p class="copy-v-sm text-lightgray">
                                      {item.percentadge}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Assets Stake Intent */}
            <div class="assets__stake">
              <div class="assets__stake__inner">
                {/* Title */}
                <div class="assets__stake--title">
                  <h6 class="copy-lg font-black text-gray-secondary text-uppercase">
                    stake INTENT
                  </h6>
                  <a
                    href="#"
                    class="copy-sm font-medium text-lightgray"
                    style={{ display: "flex" }}
                  >
                    Edit / Reset Intent
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="#FF8500"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                {/* Slider */}
                <div class="assets__stake--swiper">
                  <div class="swiper">
                    {/* If we need navigation buttons */}
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        {/* Title */}
                        <div class="assets__stake--each">
                          <div class="assets__stake--each__head">
                            {/* Network */}
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <Image src={atom} alt="" />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-lg font-bold">Cosmos</p>
                              </div>
                            </div>
                          </div>
                          <div class="assets__stake--each__body">
                            <ul class="list-reset">
                              {stakeIntentData.length > 0 &&
                                stakeIntentData.map((item, index) => (
                                  <li key={index}>
                                    {/* Row # 1 */}
                                    <div class="network-each">
                                      {/* Network */}
                                      <div class="network">
                                        <div class="image-wrapper">
                                          <div class="image-ratio image-ratio--square">
                                            <Image src={item.image} alt="" />
                                          </div>
                                        </div>
                                        <div class="text-wrapper text-almostwhite">
                                          <p class="copy-sm font-medium">
                                            {item.title}
                                          </p>
                                        </div>
                                      </div>
                                      {/* Network Percentage Occupied */}
                                      <div class="network__occupied">
                                        {/* Occupied Percentage */}
                                        <div class="network__occupied--percentage">
                                          <p class="copy-sm text-lightgray">
                                            {item.OccupiedPercentag}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        {/* Title */}
                        <div class="assets__stake--each">
                          <div class="assets__stake--each__head">
                            {/* Network */}
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <Image src={atom} alt="" />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-lg font-bold">Cosmos</p>
                              </div>
                            </div>
                          </div>
                          <div class="assets__stake--each__body">
                            <div class="set-intent text-lightgray">
                              <p>
                                You have not set the intent yet. Please click on
                                the button to ‘Set Intent’
                              </p>
                              <div class="btn-wrapper">
                                <a href="#" class="btn btn--sm btn-primary">
                                  Set Intent
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* All Assets */}

          <Card
            CardData={CardData}
            isDataAvailable={isDataAvailable}
            isAssetsConnected={isAssetsConnected}
          />

          {/* Unbonding Assets */}

          {/* Title */}

          <Table
            isDropdownOpen={isDropdownOpen}
            toggleFilterDropdown={toggleFilterDropdown}
            isAssetsConnected={isAssetsConnected}
          />
        </div>
      </div>

      {/* Assets Ends Here */}
      {/* {/* Claim Participation Rewards Start Here */}
      <RewardClaimModel
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />

      {/* {/* Claim Participation Rewards Start Here */}
      {/* {/* Notifications Starts Here */}
      {/* {/* Toggle class [ show ] to show and hide the Notification */}
      {/* {/* Notification -> Loading */}
      <div class="notification notification--loading">
        <div class="notification__inner">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="transection-details__confirmation">
            <div class="transection-details__confirmation--icon">
              <div class="loading show"></div>
            </div>
            <div class="transection-details__confirmation--text-content">
              <h6 class="copy-normal font-demi text-lightgray">
                Transaction Broadcasting
              </h6>
              <p class="copy-v-sm text-almostwhite">
                Please wait as the transaction is approved on <br />
                the blockchain.
              </p>
              <span class="transaction-hash copy-v-sm text-almostwhite text-gray font-medium mt-2">
                Transaction Hash: &nbsp;
                <a href="#" class="text-blue">
                  <span>7C543C4...2F31</span>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.29562 9.91634L10.2518 4.08301"
                      stroke="#3E73F0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.29562 4.08301H10.2518V9.91634"
                      stroke="#3E73F0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {/* Notification -> Success */}
      <NotificationSuccessModel />
      {/* {/* Notification -> Failed */}
      <NotificationFailedModel />
      {/* {/* Notifications Ends Here */}
    </div>
  );
};

export default Assets;
