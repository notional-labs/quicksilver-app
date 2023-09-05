import React, { useState } from "react";

const NotificationSuccessModel = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  return (
    <div>
      {showNotification && (
        <div className="notification notification--transection-success">
          <div className="notification__inner">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseNotification}
            ></button>
            <div class="transection-details__confirmation">
              <div class="transection-details__confirmation--icon">
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
                      clipRule="evenodd"
                      d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5ZM33.2322 15.7322L20 28.9645L16.7678 25.7322C15.7915 24.7559 14.2085 24.7559 13.2322 25.7322C12.2559 26.7085 12.2559 28.2915 13.2322 29.2678L18.2322 34.2678C19.2085 35.2441 20.7915 35.2441 21.7678 34.2678L36.7678 19.2678C37.7441 18.2915 37.7441 16.7085 36.7678 15.7322C35.7915 14.7559 34.2085 14.7559 33.2322 15.7322Z"
                      fill="currentColor"
                    />
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
    </div>
  );
};

export default NotificationSuccessModel;
