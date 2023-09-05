import React from "react";
import Image from "next/image";
import {
  favicon,
  lavender,
  kraken,
  stir,
  terravegas,
  sanka,
} from "@image/index";

const RewardClaimModel = ({ handleCloseModal, showModal }) => {
  return (
    <>
      {showModal && (
        <div
          className={`modal modal__stake-summary fade ${
            showModal ? "show" : ""
          }`}
          id="modal_claim-rewards"
          aria-hidden={!showModal}
          aria-labelledby="modal_claim-rewardsLabel"
          tabIndex="-1"
          onClick={handleCloseModal}
          style={{ display: "block" }}
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title mb-0" id="modal_stake-summaryLabel">
                  <div class="image-wrapper">
                    <div class="image-ratio image-ratio--square">
                      <Image src={favicon} alt="" />
                    </div>
                  </div>
                  {/* {/* data-heading include the after approval heading text */}{" "}
                  <h6
                    class="h6-lg font-bold text-lightgray heading"
                    data-heading="Unstake Initiated"
                  >
                    Claim Participation Rewards
                  </h6>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div class="modal-body">
                <div class="transection-details">
                  <div class="transection-details__top">
                    <ul class="list-reset">
                      <li>
                        <h6 class="copy-sm font-normal text-almostwhite">
                          Total Claim Amount :
                        </h6>
                        <p class="copy-normal font-demi text-almostwhite ms-auto">
                          <span>124.123123</span> QCK
                        </p>
                      </li>
                      <li>
                        <h6 class="copy-sm font-normal text-almostwhite">
                          Claim Reward Date:
                        </h6>
                        <p class="copy-normal font-demi text-almostwhite ms-auto">
                          12th April, 2023 12:23:23
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="transection-details__validators-list">
                    <div class="text-wrapper mb-3 pb-1">
                      <p class="copy-sm text-almostwhite">
                        Your claims are measured against your qAsset balances
                        from the previous epoch.
                      </p>
                    </div>
                    <div class="transection-details__validators-list--head">
                      <h6 class="copy-lg font-demi text-uppercase text-lightgray">
                        Existing qASSET BALANCES
                      </h6>
                    </div>
                    <div class="transection-details__validators-list--body">
                      <ul class="list-reset">
                        <li>
                          {/* {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={lavender} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Lavender.Five Nodes</p>
                            </div>
                          </div>
                          {/* {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qOSMO</span>
                          </div>
                        </li>
                        <li>
                          {/* {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={kraken} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Kraken</p>
                            </div>
                          </div>
                          {/* {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qSTAR</span>
                          </div>
                        </li>
                        <li>
                          {/* {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={stir} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Stir</p>
                            </div>
                          </div>
                          {/* {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qSTIR</span>
                          </div>
                        </li>
                        <li>
                          {/* {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={terravegas} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">TerraVegas</p>
                            </div>
                          </div>
                          {/* {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qTERRA</span>
                          </div>
                        </li>
                        <li>
                          {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={sanka} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Sanka Networks</p>
                            </div>
                          </div>
                          {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qSANKA</span>
                          </div>
                        </li>
                        <li>
                          {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={lavender} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Lavender.Five Nodes</p>
                            </div>
                          </div>
                          {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qOSMO</span>
                          </div>
                        </li>
                        <li>
                          {/* Network */}
                          <div class="network">
                            <div class="image-wrapper">
                              <div class="image-ratio image-ratio--square">
                                <Image src={kraken} alt="" />
                              </div>
                            </div>
                            <div class="text-wrapper text-almostwhite">
                              <p class="copy-sm">Kraken</p>
                            </div>
                          </div>
                          {/* Network Stake */}
                          <div class="network__stake">
                            <span>10.123456 qSTAR</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="transection-details__validators-list--bottom">
                      <div class="form-check mb-3 pb-1">
                        <input
                          id="claim"
                          type="checkbox"
                          class="form-check-input outline-orange"
                        />
                        <label
                          for="claim"
                          class="form-check-label copy-sm"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title=""
                          data-bs-original-title="Enable automatic claiming of rewards to allow QCK <br> rewards to be automatically sent to your wallet. <br> Automatic claiming of rewards must be set to ON for the <br> protocol to keep your stake distribution among <br> validators updated"
                          aria-describedby="tooltip708209"
                        >
                          <i>Enable Automatic Claiming of Rewards</i>
                        </label>
                      </div>
                      <div class="text-wrapper">
                        <p class="copy-sm text-almostwhite">
                          Make sure to auto-claim your participation rewards to
                          have your staking intent respected by the protocol.
                        </p>
                        <p class="copy-sm text-almostwhite">
                          You will need to approve 2 transactions on your wallet
                          to enable automatic claiming of rewards and to claim
                          these rewards.
                        </p>
                      </div>
                      <div class="btn-wrapper mt-4">
                        <button class="btn btn-primary w-100">
                          Claim Rewards
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RewardClaimModel;
