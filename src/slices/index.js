import { combineReducers } from "redux";
import validatorListReducer from "./validatorList";
import networksListReducer from "./networks";
import selectedNetworksReducer from "./selectedNetworks";

const rootReducer = combineReducers({
  validatorList: validatorListReducer,
  networks: networksListReducer,
  selectedNetwork: selectedNetworksReducer,
});

export default rootReducer;
