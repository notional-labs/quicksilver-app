import { combineReducers } from "redux";
import validatorListReducer from "./validatorList";

const rootReducer = combineReducers({
  validatorList: validatorListReducer,
});

export default rootReducer;
