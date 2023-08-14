"use client";
import React, { useEffect, useState } from "react";
import { favicon } from "@/assets/img";
import Image from "next/image";

function TransactionStatusModal({ setShowStatusModal }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [3000]);
  }, []);
  return (
    <div
      class="modal modal__approve-transection fade show"
      id="modal_approve-transection"
      aria-hidden="true"
      aria-labelledby="modal_approve-transectionLabel"
      tabindex="-1"
      style={{ display: "block" }}
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title" id="modal_approve-transectionLabel">
              {/* Quicksilver Logo for [ Desktop ] */}
              <div class="image-wrapper d-none d-md-block">
                <div class="image-ratio image-ratio--square">
                  <Image src={favicon} alt="favicon" height={100} width={100} />
                </div>
              </div>
              {/* Loading & Success for [ Mobile ] */}
              {/* <div class="transection-details__confirmation--icon d-md-none">
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
              </div> */}
              {/* data-heading include the after approval heading text */}
              <h6
                class="h6-lg font-bold text-lightgray heading"
                data-heading="Transaction Successful"
              >
                Approve Transaction
              </h6>
            </div>
            <div class="modal-description d-none d-md-block">
              {/* data-description include the after approval description text */}
              <p class="description" data-description="Transaction successful">
                Approve the transaction in your wallet.
              </p>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowStatusModal(false);
              }}
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
                  {isLoading ? (
                    <div class="loading show"></div>
                  ) : (
                    <div class="success text-green show">
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
                  )}
                </div>
                <div class="transection-details__confirmation--text-content">
                  {/* data-heading include the after approval heading text */}
                  <h6
                    class="heading copy-normal font-bold text-lightgray"
                    data-heading="Transaction Successful"
                  >
                    Approving Transaction
                  </h6>
                  {/* data-description include the after approval description text */}
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.29562 4.08301H10.2518V9.91634"
                          stroke="#3E73F0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
  );
}

export default TransactionStatusModal;
