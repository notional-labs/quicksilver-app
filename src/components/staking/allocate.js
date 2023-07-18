import Image from "next/image";
import React, { useEffect, useState } from "react";

function Allocate({
  setStep,
  validators,
  setValidators,
  selectedValidator,
  setSelectedValidors,
}) {
  const [totalStake, setTotalStake] = useState(100);
  function handleChange(val, name, index) {
    const newObj = selectedValidator[index];
    newObj.stakingAllocation = val;
    setSelectedValidors([
      ...selectedValidator.slice(0, index),
      newObj,
      ...selectedValidator.slice(index + 1),
    ]);
    const sum = selectedValidator.reduce((total, item) => {
      return total + Number(item.stakingAllocation);
    }, 0);
    setTotalStake(sum);
  }
  function handleBlur(val, name, index) {
    console.log("val", typeof val);
    const newObj = selectedValidator[index];
    newObj.stakingAllocation = Number(val).toFixed(2);
    setSelectedValidors([
      ...selectedValidator.slice(0, index),
      newObj,
      ...selectedValidator.slice(index + 1),
    ]);
  }

  function toggleLog(index) {
    const newObj = selectedValidator[index];
    newObj.isLock = !newObj.isLock;
    setSelectedValidors([
      ...selectedValidator.slice(0, index),
      newObj,
      ...selectedValidator.slice(index + 1),
    ]);
  }

  useEffect(() => {
    const val = (100 / selectedValidator.length).toFixed(2);
    setSelectedValidors(
      selectedValidator.map((item) => {
        return { ...item, stakingAllocation: val };
      })
    );
    const sum = selectedValidator.reduce((total, item) => {
      return total + Number(item.stakingAllocation);
    }, 0);
    setTotalStake(sum);
  }, []);

  return (
    <div>
      {/*Staking Start Here */}
      <div class="staking-flow staking-flow--allocate-stake">
        <div class="container">
          <div class="staking-flow__header">
            <div
              class="go-back"
              onClick={() => {
                setStep(2);
              }}
            >
              <a href="#">Back</a>
            </div>
            <div class="staking-flow__header--title text-almostwhite">
              <h5
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-html="true"
                title="Stake is allocated through a process called Signaling Intent. <br> Each epoch, the aggregate intent of all qAsset holders for a <br> given chain are calculated and used to determine how the <br> Quicksilver protocol should rebalance their delegated tokens."
              >
                Allocate Stake
              </h5>
            </div>
          </div>
          <div class="staking-flow__body">
            {/*Allocate Stake -> Filters */}
            <div class="staking-flow__body--filters">
              <div class="row align-items-center gx-0">
                <div class="col-lg-6">
                  <div class="staking-flow__body--text text-lightgray">
                    <p class="copy-normal font-medium">
                      Selected Validators ( {selectedValidator.length} selected
                      )
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="staking-flow__body--filters__additional">
                    {/*Checkbox to toggle Inactive/Active Validators */}
                    <div class="show-inactive-validators text-almostwhite">
                      <div class="form-check">
                        <input
                          id="toggleValidators"
                          type="checkbox"
                          class="form-check-toggle"
                          checked
                        />
                        <label
                          for="toggleValidators"
                          class="text-lightgray has-text-decoration"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Set to OFF to manually determine <br> each input field for stake allocation."
                        >
                          Auto-regulate Stake Allocation Fields
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Allocate Stake -> Table */}
            <div class="staking-flow__body--all">
              <div class="staking-flow__body--all__validators">
                <div class="table text-lightgray">
                  <div class="table__head">
                    {/*Row # 1 */}
                    <div class="table__head--row">
                      {/*Leave it blank for no value */}
                      <div class="table__head--col">
                        <p></p>
                      </div>
                      <div class="table__head--col table__head--col-has-tooltip">
                        <p
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Use the input fields to signal your intent to the protocol <br> for how you would like your stake to be allocated at the <br> next epoch. All users' staking intent is aggregated and <br> the stakes redelegated to match the aggregate intent."
                        >
                          STAKE ALLOCATION %
                        </p>
                      </div>
                      {/*Add class [ sort-it ] sort it on the first click and */}
                      {/*Add class [ sort-it--down ] or [ sort-it--up ] along with it  */}
                      <div class="table__head--col table__head--col-has-tooltip">
                        <p
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="TVL is equal to the USD value of <br> all assets held by the protocol."
                        >
                          Voting Power
                        </p>
                      </div>
                      <div class="table__head--col table__head--col-has-tooltip">
                        <p
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Bonus QCK rewards boost for your <br> validator choice, based on decentralisation, <br> performance and governance participation."
                        >
                          Commission
                        </p>
                      </div>
                      <div class="table__head--col table__head--col-has-tooltip">
                        <p
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Number of proposals where <br> the validator has voted."
                        >
                          VOTING RECORD
                        </p>
                      </div>
                      <div class="table__head--col table__head--col-has-tooltip">
                        <p
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title="Sum of self-bonded and <br> delegated tokens."
                        >
                          PR SCORE
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="table__body">
                    {/*Row # 1 */}
                    {selectedValidator.map((item, index) => {
                      return (
                        <div class="table__body--row" key={item.name + index}>
                          {/*Validator */}
                          <div class="table__body--col">
                            <div class="validators__intro">
                              {/*Validator count number */}
                              <div class="count px-2">
                                <p class="copy-sm">{index + 1}</p>
                              </div>
                              {/*Validator Image */}
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <Image src={item.img} alt={item.name} />
                                </div>
                              </div>
                              {/*Validator Name */}
                              <div class="text-wrapper">
                                <p class="copy-normal">{item.name}</p>
                              </div>
                            </div>
                          </div>
                          {/*Stake Allocation */}
                          {/*
                    ------ Add class [ unlocked ] if it is unlock 
                    ------ Add class [ locked ] if it is unlock 

                    Note: Adding d-none class to anything will hide it...
                    */}
                          <div class="table__body--col unlocked">
                            <div class="stake-allocation-percentage">
                              {/*Input */}
                              <input
                                type="number"
                                class="form-control set-stake-allocation"
                                placeholder={item.stakingAllocation || 0.0}
                                value={item?.stakingAllocation}
                                disabled={item.isLock}
                                onChange={(e) => {
                                  console.log(e);
                                  handleChange(
                                    e.target.value,
                                    item.name,
                                    index
                                  );
                                }}
                                onBlur={(e) => {
                                  handleBlur(e.target.value, item.name, index);
                                }}
                              />
                              {/*Unlock Icon */}
                              <div
                                class={`${
                                  item.isLock
                                    ? "stake-allocation-percentage__lock"
                                    : "stake-allocation-percentage__unlock"
                                } `}
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-html="true"
                                title="Lock to set stake allocation."
                                onClick={() => {
                                  toggleLog(index);
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_260_465)">
                                    <path
                                      d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                                      fill="#171717"
                                      stroke="#FF8500"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M11.89 15.7801C12.9338 15.7801 13.78 14.9339 13.78 13.89C13.78 12.8462 12.9338 12 11.89 12C10.8462 12 10 12.8462 10 13.89C10 14.9339 10.8462 15.7801 11.89 15.7801Z"
                                      fill="#FF8500"
                                    />
                                    <path
                                      d="M8.25 8.25V5.25C8.25 4.25544 8.64509 3.30161 9.34835 2.59835C10.0516 1.89509 11.0054 1.5 12 1.5C13.8141 1.5 15.4022 2.78813 15.75 4.5"
                                      stroke="#FF8500"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_260_465">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              {/*Lock Icon */}
                              <div
                                class={`${
                                  item.isLock
                                    ? "stake-allocation-percentage__unlock"
                                    : "stake-allocation-percentage__lock"
                                } `}
                                onClick={() => {
                                  toggleLog(index);
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_90_3157)">
                                    <path
                                      d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
                                      fill="#FF8500"
                                      stroke="#FF8500"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M11.89 15.7801C12.9338 15.7801 13.78 14.9339 13.78 13.89C13.78 12.8462 12.9338 12 11.89 12C10.8462 12 10 12.8462 10 13.89C10 14.9339 10.8462 15.7801 11.89 15.7801Z"
                                      fill="#171717"
                                    />
                                    <path
                                      d="M8.25 8.25V5.25C8.25 4.25544 8.64509 3.30161 9.34835 2.59835C10.0516 1.89509 11.0054 1.5 12 1.5C12.9946 1.5 13.9484 1.89509 14.6517 2.59835C15.3549 3.30161 15.75 4.25544 15.75 5.25V8.25"
                                      stroke="#FF8500"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_90_3157">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                          {/*Voting Power */}
                          <div class="table__body--col">
                            <div class="voting-power">
                              <p class="copy-normal">{item.votingPower}</p>
                              <span>{item.votingPowerDiff}</span>
                            </div>
                          </div>
                          {/*Commisstion */}
                          <div class="table__body--col">
                            <p class="copy-sm">{item.commission}</p>
                          </div>
                          {/*Voting Record */}
                          <div class="table__body--col">
                            <div class="tag tag-gray">{item.votingRecord}</div>
                          </div>
                          {/*PR Score */}
                          <div class="table__body--col">
                            <div
                              class="badge badge-level-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              data-bs-html="true"
                              title='<p class="text-uppercase mb-1">PR SCORE: <span>0</span> – <span>10</span></p><p><i>Stake with validator with higher PR <br> Score to earn more rewards.</i></p>'
                            >
                              {item.PRScore}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/*if No Result Found, add class [ show ] to this */}
                    <div class="no-result-found">
                      <div class="no-result-found__text-wrapper">
                        <h6 class="font-demi text-lightgray">
                          No Results Found
                        </h6>
                        <p class="copy-sm">Try changing your search term.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Staking Ends Here */}

      {/*Stake Allocation [ Fixed ] Start Here */}
      <div class="stake-allocation">
        <div class="container">
          <div class="stake-allocation__inner">
            <div class="row align-items-center">
              <div class="col-lg-9">
                <div class="stake-allocation__details">
                  <div class="stake-allocation__text-content">
                    {/*Network */}
                    <div class="network">
                      <div class="network__inner text-lightgray">
                        <h5 class="font-demi">
                          <span>1O.123123</span>&nbsp; ATOM
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modal_edit-stake-summary"
                            role="button"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.1665 2.49895C14.3854 2.28008 14.6452 2.10646 14.9312 1.98801C15.2171 1.86956 15.5236 1.80859 15.8332 1.80859C16.1427 1.80859 16.4492 1.86956 16.7352 1.98801C17.0211 2.10646 17.281 2.28008 17.4998 2.49895C17.7187 2.71782 17.8923 2.97766 18.0108 3.26362C18.1292 3.54959 18.1902 3.85609 18.1902 4.16562C18.1902 4.47515 18.1292 4.78164 18.0108 5.06761C17.8923 5.35358 17.7187 5.61341 17.4998 5.83228L6.24984 17.0823L1.6665 18.3323L2.9165 13.749L14.1665 2.49895Z"
                                stroke="#FF8500"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </h5>
                      </div>
                    </div>
                    {/*Network Validator Count */}
                    <div class="network__validators text-almostwhite">
                      {/*Selected Validator Count */}
                      <h6 class="font-demi text-lightgray">
                        <span class="selected-allocated-percentage">
                          {totalStake}%
                        </span>{" "}
                        stake allocated
                      </h6>
                      {/*Selected Validator Instrunction */}
                      <span class="selected-validators__instructions copy-v-sm d-none">
                        Select between <span>1</span> to <span>8</span>{" "}
                        validators.
                      </span>
                      {/*[ Error ] [ Exceeds 8 ] */}
                      <span class="error-message error-message__exceeds-no-of-validators">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.14489 2.42961L0.909888 9.49961C0.822572 9.65083 0.776372 9.82226 0.775883 9.99687C0.775394 10.1715 0.820634 10.3432 0.907102 10.4949C0.993569 10.6466 1.11825 10.773 1.26874 10.8615C1.41923 10.9501 1.59029 10.9977 1.76489 10.9996H10.2349C10.4095 10.9977 10.5805 10.9501 10.731 10.8615C10.8815 10.773 11.0062 10.6466 11.0927 10.4949C11.1791 10.3432 11.2244 10.1715 11.2239 9.99687C11.2234 9.82226 11.1772 9.65083 11.0899 9.49961L6.85489 2.42961C6.76575 2.28267 6.64025 2.16117 6.49049 2.07686C6.34072 1.99254 6.17176 1.94824 5.99989 1.94824C5.82802 1.94824 5.65905 1.99254 5.50929 2.07686C5.35953 2.16117 5.23402 2.28267 5.14489 2.42961Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 5V7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 9H6.005"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Exceeds Max Number of Validators
                      </span>
                      {/*[ Error ] [ Exceeds 100% stake allocation ] */}
                      <span
                        class={`error-message error-message__exceeds-allocation ${
                          totalStake > 100 && "show"
                        }`}
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.14489 2.42961L0.909888 9.49961C0.822572 9.65083 0.776372 9.82226 0.775883 9.99687C0.775394 10.1715 0.820634 10.3432 0.907102 10.4949C0.993569 10.6466 1.11825 10.773 1.26874 10.8615C1.41923 10.9501 1.59029 10.9977 1.76489 10.9996H10.2349C10.4095 10.9977 10.5805 10.9501 10.731 10.8615C10.8815 10.773 11.0062 10.6466 11.0927 10.4949C11.1791 10.3432 11.2244 10.1715 11.2239 9.99687C11.2234 9.82226 11.1772 9.65083 11.0899 9.49961L6.85489 2.42961C6.76575 2.28267 6.64025 2.16117 6.49049 2.07686C6.34072 1.99254 6.17176 1.94824 5.99989 1.94824C5.82802 1.94824 5.65905 1.99254 5.50929 2.07686C5.35953 2.16117 5.23402 2.28267 5.14489 2.42961Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 5V7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 9H6.005"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Exceeds Stake Allocation %
                      </span>
                    </div>
                  </div>
                  <div class="stake-allocation__images-validators d-none">
                    {/*Selected Validators Images and Tooltip on Hovers */}
                    <div class="selected-validators__info">
                      {/*Selected Validator # 1 */}
                      <div class="selected-validators__info--each selected-validators__info--each-1">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/lavender-2.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/lavender-2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">
                                  Lavender.Five Nodes
                                </p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-1">
                                Level 01
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 2 */}
                      <div class="selected-validators__info--each selected-validators__info--each-2">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img src="./assets/img/networks/sanka.png" alt="" />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/sanka.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">Sanka</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-2">
                                Level 02
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 3 */}
                      <div class="selected-validators__info--each selected-validators__info--each-3">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/terravegas.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/terravegas.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">TerraVegas</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-1">
                                Level 01
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 4 */}
                      <div class="selected-validators__info--each selected-validators__info--each-4">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img src="./assets/img/networks/stir.png" alt="" />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/stir.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">Stir</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-1">
                                Level 01
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 5 */}
                      <div class="selected-validators__info--each selected-validators__info--each-5">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/lavender.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/lavender.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">
                                  Lavender.Five Nodes
                                </p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-1">
                                Level 01
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 6 */}
                      <div class="selected-validators__info--each selected-validators__info--each-6">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/smartnodes.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/smartnodes.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">SmartNodes</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-5">
                                Level 05
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 7 */}
                      <div class="selected-validators__info--each selected-validators__info--each-7">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/fishking.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/fishking.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">FishKing</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-3">
                                Level 03
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Selected Validator # 8 */}
                      <div class="selected-validators__info--each selected-validators__info--each-8">
                        {/*Image for each Validator */}
                        <div class="image-ratio image-ratio--square">
                          <img
                            src="./assets/img/networks/aurastake.png"
                            alt=""
                          />
                        </div>
                        {/*Tooltip for each Validator */}
                        <div class="selected-validators__info--each__tooltip">
                          <div class="selected-validators__info--each__tooltip-head">
                            <div class="network">
                              <div class="image-wrapper">
                                <div class="image-ratio image-ratio--square">
                                  <img
                                    src="./assets/img/networks/aurastake.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="text-wrapper text-lightgray">
                                <p class="copy-normal font-demi">AuraStake</p>
                              </div>
                            </div>
                            <div class="network-badge">
                              <div class="badge badge-sm badge-level-4">
                                Level 04
                              </div>
                            </div>
                          </div>
                          <div class="selected-validators__info--each__tooltip-body">
                            <ul class="list-reset">
                              <li>
                                <p class="th">Commission</p>
                                <p class="td">12.5%</p>
                              </li>
                              <li>
                                <p class="th">Voting Power</p>
                                <p class="td">12,793,452</p>
                              </li>
                              <li>
                                <p class="th">Voting Record</p>
                                <p class="td">12/65</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                {/*Btn to go next */}
                <div class="btn-wrapper text-end">
                  {/*<a href="#" class="btn btn-primary disabled">Next</a> */}
                  <button
                    type="submit"
                    class={`btn btn-primary ${totalStake > 100 && "disabled"}`}
                    data-bs-toggle="modal"
                    data-bs-target="#modal_stake-summary"
                    role="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*Additional Text added at the bottom of Stake Allocation */}
            <div class="stake-allocation__text-wrapper text-almostwhite mt-3">
              <p class="copy-sm">
                Stake is allocated through a process called Signaling Intent.
                Each epoch, the aggregate intent of all qAsset holders for a
                given chain are calculated and used to determine how the
                Quicksilver protocol should rebalance their delegated tokens.
                Tokens staked through the Quicksilver protocol are subject to
                the same unstaking period as the native chain.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Stake Allocation [ Fixed ] Ends Here */}

      {/*Connect Wallet Modal Start Here */}
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
                    <img src="./assets/img/favicon.png" alt="" />
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
              {/*Add class [ include-p ] if option are more then 8 */}
              <div class="preferred_options">
                <div class="row gx-0">
                  <div class="col-md-6">
                    {/*Preferred Option # 1 */}
                    <div class="preferred_options--each">
                      <input
                        id="option-1"
                        class="option"
                        type="checkbox"
                        checked
                      />
                      <label for="option-1">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/kaplr-circle.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="text-wrapper">
                              <p class="font-medium text-lightgray">Keplr</p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/*Preferred Option # 2 */}
                    <div class="preferred_options--each">
                      <input id="option-2" class="option" type="checkbox" />
                      <label for="option-2">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/leap.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 3 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-3" class="option" type="checkbox" />
                      <label for="option-3">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/cosmos.svg"
                                  alt=""
                                />
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
      {/*Connect Wallet Modal Start Here */}

      {/*Switch Network Modal Start Here */}
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
                    <img src="./assets/img/favicon.png" alt="" />
                  </div>
                </div>
                <h6 class="h6-lg font-bold text-lightgray">Switch Network</h6>
              </div>
              <div class="modal-description">
                <p>
                  Stake Cosmos assets with your preferred validator and receive
                  a qAsset for use in DeFi while earning staking yield. Select a
                  network to get started with liquid staking.
                </p>
                <p>
                  By selecting a network, you confirm you accept the Quicksilver
                  Terms of Service.
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
            {/*Add class [ modal-body--include-p ] if option are more then 6 */}
            <div class="modal-body modal-body--include-p">
              <div class="preferred_options">
                <div class="row gx-0">
                  <div class="col-md-6">
                    {/*Preferred Option # 1 */}
                    <div class="preferred_options--each">
                      <input
                        id="option-11"
                        class="option"
                        type="checkbox"
                        checked
                      />
                      <label for="option-11">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/atom.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 2 */}
                    <div class="preferred_options--each">
                      <input id="option-22" class="option" type="checkbox" />
                      <label for="option-22">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/osmosis.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="text-wrapper">
                              <p class="font-medium text-lightgray">Osmosis</p>
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
                    {/*Preferred Option # 3 */}
                    <div class="preferred_options--each">
                      <input id="option-33" class="option" type="checkbox" />
                      <label for="option-33">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/regen.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="text-wrapper">
                              <p class="font-medium text-lightgray">Regen</p>
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
                    {/*Preferred Option # 4 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 5 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-55" class="option" type="checkbox" />
                      <label for="option-55">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/evmos.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 6 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-66" class="option" type="checkbox" />
                      <label for="option-66">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/juno.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="text-wrapper">
                              <p class="font-medium">Juno</p>
                              <p class="copy-v-sm font-normal">
                                <span>Juno</span> - Coming Soon
                              </p>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    {/*Preferred Option # 7 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 8 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 9 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 10 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 11 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                    {/*Preferred Option # 12 */}
                    {/*[ disabled ] class disable the option */}
                    <div class="preferred_options--each disabled">
                      <input id="option-44" class="option" type="checkbox" />
                      <label for="option-44">
                        <div class="content-wrapper">
                          <div class="content-wrapper__intro">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <img
                                  src="./assets/img/networks/stargaze.svg"
                                  alt=""
                                />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Switch Network Modal Start Here */}

      {/*Edit Stake Summary Modal Start Here */}
      <div
        class="modal modal__stake-summary fade"
        id="modal_edit-stake-summary"
        aria-hidden="true"
        aria-labelledby="modal_edit-stake-summaryLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title" id="modal_stake-summaryLabel">
                <div class="image-wrapper">
                  <div class="image-ratio image-ratio--square">
                    <img src="./assets/img/favicon.png" alt="" />
                  </div>
                </div>
                {/*data-heading include the after approval heading text */}
                <h6
                  class="h6-lg font-bold text-lightgray heading"
                  data-heading="Unstake Initiated"
                >
                  Edit Stake Amount
                </h6>
              </div>
              <div class="modal-description">
                {/*data-description include the after approval description text */}
                <p
                  class="description"
                  data-description="Transaction successful"
                >
                  Edit Staking Amount to proceed with Stake Allocation
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
              <div class="transection-details">
                <div class="transection-details__top">
                  <ul class="list-reset">
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Total Stake:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1O.123123</span> ATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Quicksilver APY:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        12.24%
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Redemption Rate:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1</span> ATOM = <span>1.234322</span> qATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        qATOM Received
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>11.123123</span> qATOM
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Edit Stake Summery */}
              <div class="stake-summary__edit-option">
                <div class="content-wrapper">
                  <div class="stake-summary__edit-option--amount stake-summary__edit-option--amount__to-stake">
                    <p class="copy-lg font-medium mb-1">Amount to Stake</p>
                    <div class="stake-summary__edit-option--amount__network">
                      <div class="network">
                        <div class="image-wrapper">
                          <div class="image-ratio image-ratio--square">
                            <img src="./assets/img/networks/atom.svg" alt="" />
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
                    <div class="stake-summary__edit-option--amount__balance mt-2">
                      <p class="copy-sm text-uppercase">BALANCE: 0.00 ATOM</p>
                      <ul class="list-reset stake-summary__edit-option--amount__balance--options">
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
                  <div class="stake-summary__edit-option--amount stake-summary__edit-option--amount__to-received">
                    <p class="copy-lg font-medium mb-1">Amount Received</p>
                    <div class="stake-summary__edit-option--amount__network">
                      <div class="network">
                        <div class="image-wrapper">
                          <div class="image-ratio image-ratio--square">
                            <img
                              src="./assets/img/networks/q-atom.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <h6 class="font-medium">qATOM</h6>
                      </div>
                      <div class="network__stats text-end">
                        <h5 class="font-normal">0.00</h5>
                        <p>$0.00</p>
                      </div>
                    </div>
                    <div class="stake-summary__edit-option--amount__balance mt-2">
                      <p class="copy-sm text-uppercase">BALANCE: 0.00 qATOM</p>
                    </div>
                  </div>
                </div>
                <div class="btn-wrapper">
                  <a href="#" class="btn btn-primary w-100">
                    Edit Stake Amount
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Edit Stake Summary Modal Start Here */}

      {/*Stake Summary Modal Start Here */}
      <div
        class="modal modal__stake-summary fade"
        id="modal_stake-summary"
        aria-hidden="true"
        aria-labelledby="modal_stake-summaryLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title" id="modal_stake-summaryLabel">
                <div class="image-wrapper">
                  <div class="image-ratio image-ratio--square">
                    <img src="./assets/img/favicon.png" alt="" />
                  </div>
                </div>
                {/*data-heading include the after approval heading text */}
                <h6
                  class="h6-lg font-bold text-lightgray heading"
                  data-heading="Unstake Initiated"
                >
                  Stake Summary
                </h6>
              </div>
              <div class="modal-description">
                {/*data-description include the after approval description text */}
                <p
                  class="description"
                  data-description="Transaction successful"
                >
                  Confirm your staking amount and your intent for staking
                  allocation.
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
              <div class="transection-details">
                <div class="transection-details__top">
                  <ul class="list-reset">
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Total Stake:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1O.123123</span> ATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Quicksilver APY:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        12.24%
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Redemption Rate:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1</span> ATOM = <span>1.234322</span> qATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        qATOM Received
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>11.123123</span> qATOM
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="transection-details__validators-list">
                  <div class="transection-details__validators-list--head">
                    <h6 class="copy-lg font-demi text-uppercase text-lightgray">
                      Validator List
                    </h6>
                    <a href="#" class="edit-stake">
                      Edit Stake Allocation
                    </a>
                  </div>
                  <div class="transection-details__validators-list--body">
                    <ul class="list-reset">
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/lavender.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">Lavender.Five Nodes</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/kraken.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">Kraken</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/stir.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">Stir</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/terravegas.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">TerraVegas</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/sanka.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">Sanka Networks</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/smartnodes.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">SmartNodes</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/fishking.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">FishKing</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/aurastake.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">AuraStake</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                      <li>
                        {/*Network */}
                        <div class="network">
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <img
                                src="./assets/img/networks/aurastake.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-wrapper text-almostwhite">
                            <p class="copy-sm">AuraStake</p>
                          </div>
                        </div>
                        {/*Network Stake */}
                        <div class="network__stake">
                          <span>12.5%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="transection-details__validators-list--bottom">
                    <p class="copy-sm text-almostwhite">
                      Aggregate staking intent for all stakers is calculated at
                      the end of each epoch. Given limitations in concurrent
                      redelegations, redelegation to the new intent may take up
                      to 21 days.
                    </p>
                    <div class="form-check mt-2 pt-1">
                      <input
                        id="claim"
                        type="checkbox"
                        class="form-check-input outline-orange"
                        checked
                      />
                      <label
                        for="claim"
                        class="form-check-label copy-v-sm"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title=""
                        data-bs-original-title="Enable automatic claiming of rewards to allow QCK <br> rewards to be automatically sent to your wallet. <br> Automatic claiming of rewards must be set to ON for the <br> protocol to keep your stake distribution among <br> validators updated"
                      >
                        <i>Enable Automatic Claiming of Rewards</i>
                      </label>
                    </div>
                    <div class="btn-wrapper mt-4">
                      <button
                        class="btn btn-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#modal_approve-transection"
                        role="button"
                      >
                        Confirm Stake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Stake Summary Modal Start Here */}

      {/*Approve Transection Modal Start Here */}

      {/*
        By clicking on Unstake, the Transection Approving Modal will open.

        For now I have set the the settimeout(3s) to approve the transection and
        changed the following text and loading to Success icon after 3 seconds.

        But you can call the function based on your preference

        - Modal Heading 
        - Modal Description
        - Transection Confirmation Heading
        - Transection Confirmation Description 
        - Loading to Success icon

        Note: the text is replacing based on the attribute value added to 

        - data-heading and
        - data-description
    */}
      <div
        class="modal modal__approve-transection fade"
        id="modal_approve-transection"
        aria-hidden="true"
        aria-labelledby="modal_approve-transectionLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title" id="modal_approve-transectionLabel">
                <div class="image-wrapper">
                  <div class="image-ratio image-ratio--square">
                    <img src="./assets/img/favicon.png" alt="" />
                  </div>
                </div>
                {/*data-heading include the after approval heading text */}
                <h6
                  class="h6-lg font-bold text-lightgray heading"
                  data-heading="Transaction Successful"
                >
                  Approve Transaction
                </h6>
              </div>
              <div class="modal-description">
                {/*data-description include the after approval description text */}
                <p
                  class="description"
                  data-description="Transaction successful"
                >
                  Approve the transaction in your wallet.
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
              <div class="transection-details">
                <div class="transection-details__top">
                  <ul class="list-reset">
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Total Stake:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1O.123123</span> ATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Quicksilver APY:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        12.24%
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        Redemption Rate:
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>1</span> ATOM = <span>1.234322</span> qATOM
                      </p>
                    </li>
                    <li>
                      <h6 class="copy-sm font-normal text-almostwhite">
                        qATOM Received
                      </h6>
                      <p class="copy-normal font-demi text-almostwhite ms-auto">
                        <span>11.123123</span> qATOM
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="transection-details__confirmation">
                  <div class="transection-details__confirmation--icon">
                    <div class="loading show"></div>
                    <div class="success text-green">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5ZM33.2322 15.7322L20 28.9645L16.7678 25.7322C15.7915 24.7559 14.2085 24.7559 13.2322 25.7322C12.2559 26.7085 12.2559 28.2915 13.2322 29.2678L18.2322 34.2678C19.2085 35.2441 20.7915 35.2441 21.7678 34.2678L36.7678 19.2678C37.7441 18.2915 37.7441 16.7085 36.7678 15.7322C35.7915 14.7559 34.2085 14.7559 33.2322 15.7322Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="transection-details__confirmation--text-content">
                    {/*data-heading include the after approval heading text */}
                    <h6
                      class="heading copy-normal font-bold text-lightgray"
                      data-heading="Transaction Successful"
                    >
                      Approving Transaction
                    </h6>
                    {/*data-description include the after approval description text */}
                    <p
                      class="description copy-v-sm text-almostwhite"
                      data-description="The updated qAsset balance will be reflected in your Quicksilver wallet in approximately 10 minutes. 
                  This dialogue will auto-refresh."
                    >
                      Please wait until your transaction is confirmed on the
                      blockchain.
                    </p>
                    <span class="transaction-hash copy-v-sm text-almostwhite text-gray mt-3">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.29562 4.08301H10.2518V9.91634"
                            stroke="#3E73F0"
                            stroke-width="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Approve Transection Modal Ends Here */}
    </div>
  );
}

export default Allocate;
