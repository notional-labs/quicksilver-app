import React from "react";
import Image from "next/image";
// import { Data } from "../../app/data/data";
import { TableData } from "@/utils/assetsTableData";

const Table = ({ isDropdownOpen, toggleFilterDropdown, isAssetsConnected }) => {
  return (
    <>
      {isAssetsConnected ? (
        <div class="assets__unbonding">
          {/* Title */}
          <div class="assets__unbonding--title" style={{border:"none"}}>
            <div class="row align-items-center">
              <div class="col-md-6">
                <h6 class="font-bold text-uppercase text-gray-secondary">
                  Current Unbonding Assets
                </h6>
              </div>
              <div class="col-md-6">
                <div class={`filter-it ${isDropdownOpen ? "show" : ""}`}>
                  <p class="d-md-none copy-v-sm">Filter By Zone 11</p>
                  <a class="filter-it__toggler d-none d-md-block" onClick={toggleFilterDropdown}>Filter By Zone</a>
                  <a class="filter-it__toggler d-md-none" onClick={toggleFilterDropdown}>All</a>
                  <div class="filter-it__options">
                    <hr />
                    <div class="form-check">
                      <input id="selectAll" type="checkbox" class="form-check-input" checked />
                      <label for="selectAll" class="form-check-label">Select All</label>
                    </div>
                    <div class="form-check">
                      <input id="network-1" type="checkbox" class="form-check-input" checked />
                      <label for="network-1" class="form-check-label">Osmosis</label>
                    </div>
                    <div class="form-check">
                      <input id="network-2" type="checkbox" class="form-check-input" checked />
                      <label for="network-2" class="form-check-label">Stargaze</label>
                    </div>
                    <div class="form-check">
                      <input id="network-3" type="checkbox" class="form-check-input" checked />
                      <label for="network-3" class="form-check-label">Regen</label>
                    </div>
                    <div class="form-check">
                      <input id="network-4" type="checkbox" class="form-check-input" checked />
                      <label for="network-4" class="form-check-label">Injective</label>
                    </div>
                    <div class="form-check">
                      <input id="network-5" type="checkbox" class="form-check-input" checked />
                      <label for="network-5" class="form-check-label">Ki</label>
                    </div>
                    <div class="form-check">
                      <input id="network-6" type="checkbox" class="form-check-input" checked />
                      <label for="network-6" class="form-check-label">XYZ</label>
                    </div>
                    <div class="form-check">
                      <input id="network-7" type="checkbox" class="form-check-input" checked />
                      <label for="network-7" class="form-check-label">Juno</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-md-6">
                <div
                  className={`filter-by-zone ${isDropdownOpen ? "show" : ""}`}
                >
                  <a
                    class="filter-by-zone__toggler"
                    onClick={toggleFilterDropdown}
                  >
                    Filter By Zone
                  </a>
                  {isDropdownOpen && (
                    <div
                      class="filter-by-zone__options show"
                      id="filterDropdown"
                      // style={{ display: "block" }}
                    >
                      <hr />
                      <div class="form-check">
                        <input
                          id="selectAll"
                          type="checkbox"
                          class="form-check-input"
                          // checked
                        />
                        <label for="selectAll" class="form-check-label">
                          Select All
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-1"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-1" class="form-check-label">
                          Osmosis
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-2"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-2" class="form-check-label">
                          Stargaze
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-3"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-3" class="form-check-label">
                          Regen
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-4"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-4" class="form-check-label">
                          Injective
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-5"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-5" class="form-check-label">
                          Ki
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-6"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-6" class="form-check-label">
                          XYZ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-7"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-7" class="form-check-label">
                          Juno
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div> */}
            </div>
          </div>
          <div class="assets__unbonding--all">
            <div class="table d-none d-md-block text-lightgray">
              <div class="table__head">
                {/* Row # 1 */}
                <div class="table__head--row">
                  <div class="table__head--col">
                    <p style={{ color: "white" }}>Asset</p>
                  </div>
                  <div class="table__head--col">
                    <p style={{ color: "white" }}>Status</p>
                  </div>
                  <div class="table__head--col table__head--col-has-tooltip">
                    <p
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-html="true"
                      title="Redemption amount is quantity of <br> the asset you would receive if you <br> redeemed your qAsset today."
                      style={{ color: "white" }}
                    >
                      REDEMPTION AMOUNT
                    </p>
                  </div>
                  <div class="table__head--col">
                    <p style={{ color: "white" }}>UNSTAKED ON</p>
                  </div>
                  <div class="table__head--col">
                    <p style={{ color: "white" }}>Completion Time</p>
                  </div>
                </div>
              </div>
              <div class="table__body">
                {TableData &&
                  TableData.map((item, index) => (
                    <div class="table__body--row" key={index}>
                      {/* Table Body Columns */}
                      <div class="table__body--col" > 
                        <div
                          class="validators__intro"
                          style={{ color: "white" }}
                        >
                          {/* Validator count number */}
                          <div class="count px-2">
                            <p class="copy-sm">{index + 1}</p>
                          </div>
                          {/* Validator Image */}
                          <div class="image-wrapper">
                            <div class="image-ratio image-ratio--square">
                              <Image src={item.image} alt={item.Name} />
                            </div>
                          </div>
                          {/* Validator Name */}
                          <div class="text-wrapper">
                            <p class="copy-normal">{item.Name}</p>
                          </div>
                        </div>
                      </div>
                      {/* Status */}
                      <div class="table__body--col" style={{ color: "white" }}>
                        <a
                        
                          class={`status ${
                            item.status === "completed"
                              ? "status--completed"
                              : "status--in-progress"
                          }`}
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-html="true"
                          title={
                            item.status === "completed"
                              ? "Unbonding assets are 'Completed' for 1 unbonding period from the end of the next Quicksilver epoch."
                              : "Unbonding assets are 'In Progress' for 1 unbonding period from the end of the next Quicksilver epoch."
                          }
                        >
                          {item.status === "completed"
                            ? "Completed"
                            : "In Progress"}
                        </a>
                      </div>
                      {/* Redemption Amount */}
                      <div class="table__body--col">
                        <p class="copy-normal text-lightgray">
                          {item.redemptionAmount}
                        </p>
                      </div>
                      {/* Unstaked on */}
                      <div class="table__body--col">
                        <p class="copy-normal text-lightgray">
                          {item.unstackOnTime}
                        </p>
                      </div>
                      {/* Completion Time */}
                      <div class="table__body--col">
                        <p class="copy-normal text-lightgray">
                          {item.compltionTime}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* <!-- All Assets view for [ Mobile ] --> */}
            <div class="all-assets d-md-none">
              {/* <!-- Asset # 1 --> */}
              {TableData.map((item, index) => (
                <div className="all-assets__each" key={index}>
                  <div className="all-assets__each--header">
                    <div className="network">
                      <div className="image-wrapper">
                        <div className="image-ratio image-ratio--square">
                          <Image src={item.image} alt="" /> {/* Use item.image from your data */}
                        </div>
                      </div>
                      <div className="text-wrapper text-almostwhite">
                        <p className="copy-sm">{item.redemptionAmount} qOSMO</p>
                      </div>
                    </div>
                    <div className="network__progress">
                      <a
                        className={
                          item.status === "completed"
                            ? "status status--completed"
                            : "status status--in-progress"
                        }
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="Unbonding assets are 'In Progress' for 1 unbonding period from the end of the next Quicksilver epoch."
                      >
                        {item.status}
                      </a>
                    </div>
                  </div>
                  <div className="all-assets__each--body">
                    <ul className="list-reset">
                      <li>
                        <p>Redemption Amount</p>
                        <span>{item.redemptionAmount} OSMO</span>
                      </li>
                      <li>
                        <p>Unstaked On</p>
                        <span>{item.unstackOnTime}</span>
                      </li>
                      <li>
                        <p>Completion Time</p>
                        <span>{item.compltionTime}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

          
            
            </div>
          </div>
        </div>
      ) : (
        <>
          <div class="assets__unbonding">
            {/* <!-- Title --> */}
            <div class="assets__unbonding--title" style={{ border: "none" }}>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h6 class="font-bold text-uppercase text-gray-secondary">
                    Current Unbonding Assets
                  </h6>
                </div>
                <div class="col-md-6">
                  <div class="filter-it d-none">
                    <p class="d-md-none copy-v-sm">Filter By Zone</p>
                    <a  class="filter-it__toggler d-none d-md-block">
                      Filter By Zone
                    </a>
                    <a class="filter-it__toggler d-md-none">
                      All
                    </a>
                    <div
                      class="filter-it__options"
                      style={{ display: "block" }}
                    >
                      <hr />
                      <div class="form-check">
                        <input
                          id="selectAll"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="selectAll" class="form-check-label">
                          Select All
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-1"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-1" class="form-check-label">
                          Osmosis
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-2"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-2" class="form-check-label">
                          Stargaze
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-3"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-3" class="form-check-label">
                          Regen
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-4"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-4" class="form-check-label">
                          Injective
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-5"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-5" class="form-check-label">
                          Ki
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-6"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-6" class="form-check-label">
                          XYZ
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="network-7"
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        <label for="network-7" class="form-check-label">
                          Juno
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="assets__unbonding--all">
              {/* <!-- All Assets view for [ Desktop ] --> */}
              <div class="table d-none d-md-block text-lightgray">
                <div class="table__head">
                  {/* <!-- Row # 1 --> */}
                  <div class="table__head--row">
                    <div class="table__head--col">
                      <p style={{ color: "white" }}>Asset</p>
                    </div>
                    <div class="table__head--col">
                      <p style={{ color: "white" }}>Status</p>
                    </div>
                    <div class="table__head--col table__head--col-has-tooltip">
                      <p
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-html="true"
                        title="Redemption amount is quantity of <br> the asset you would receive if you <br> redeemed your qAsset today."
                        style={{ color: "white" }}
                      >
                        REDEMPTION AMOUNT
                      </p>
                    </div>
                    <div class="table__head--col">
                      <p style={{ color: "white" }}>UNSTAKED ON</p>
                    </div>
                    <div class="table__head--col color-white">
                      <p style={{ color: "white" }}>Completion Time</p>
                    </div>
                  </div>
                </div>
                <div class="table__body">
                  {/* <!-- if No Result Found, add class [ show ] to this --> */}
                  <div class="no-result-found show">
                    <div class="no-result-found__text-wrapper text-center border-0">
                      <h6
                        class="font-medium text-lightgray"
                        style={{ background: "black", fontSize: "20px" }}
                      >
                        No assets staked on Quicksilver are currently unbonding
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- All Assets view for [ Mobile ] --> */}
              <div class="all-assets d-md-none">
                {/* <!-- if No Result Found, add class [ show ] to this --> */}
                <div class="no-result-found show">
                  <div class="no-result-found__text-wrapper text-center">
                    <h6 class="font-medium text-lightgray">
                      No assets staked on Quicksilver are currently unbonding
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
