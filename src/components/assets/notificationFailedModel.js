import React, { useState } from "react";

const NotificationFailedModel = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  return (
    <>
      {showNotification && (
        <div className="notification notification--transection-failed">
          <div className="notification__inner">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseNotification}
            ></button>
            <div class="transection-details__confirmation">
              <div class="transection-details__confirmation--icon">
                <div class="failed show">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_918_8636)">
                      <path
                        d="M24.972 0.330078C11.3539 0.330078 0.274719 11.4093 0.274719 25.0273C0.274719 38.6454 11.3539 49.7246 24.972 49.7246C38.5901 49.7246 49.6693 38.6454 49.6693 25.0273C49.6693 11.4093 38.5901 0.330078 24.972 0.330078Z"
                        fill="#EC0000"
                      />
                      <path
                        d="M15.9163 13.7757C15.3543 13.7757 14.7929 13.9903 14.3637 14.4189C13.5064 15.2762 13.5064 16.6663 14.3637 17.5231L32.475 35.6344C33.3317 36.4917 34.723 36.4917 35.5792 35.6344C36.437 34.7766 36.437 33.3869 35.5792 32.5297L17.4679 14.4183C17.0398 13.9903 16.4783 13.7757 15.9163 13.7757Z"
                        fill="white"
                      />
                      <path
                        d="M34.0276 13.7771C33.4662 13.7771 32.9036 13.9917 32.4756 14.4203L14.3642 32.5316C13.507 33.3894 13.507 34.7791 14.3642 35.6363C15.2221 36.4936 16.6117 36.4936 17.469 35.6363L35.5803 17.525C36.4381 16.6677 36.4381 15.2776 35.5803 14.4208C35.1517 13.9917 34.5891 13.7771 34.0276 13.7771Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_918_8636">
                        <rect
                          width="50"
                          height="50"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 50)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="transection-details__confirmation--text-content">
                <h6 class="copy-normal font-demi text-lightgray">
                  Transaction Successful
                </h6>
                <p class="copy-v-sm text-almostwhite">
                  Your transaction was successful. Your staking <br />
                  intent has been set.
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
      )}
    </>
  );
};

export default NotificationFailedModel;
