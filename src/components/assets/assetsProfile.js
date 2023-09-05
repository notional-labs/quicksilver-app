import React from "react";
import Image from "next/image";
import { quicksilverSvg } from "@image/index";

const AssetsProfile = () => {
  return (
    <div>
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
          {/* Network Actions */}
          <div class="btn-wrapper">
            <a class="btn btn--sm btn-transparent">
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
            <a class="btn btn--sm btn-transparent">
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
        </div>
      </div>
    </div>
  );
};

export default AssetsProfile;
