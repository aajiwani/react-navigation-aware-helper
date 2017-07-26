import { combineReducers } from "redux";

import navigationReducer from "./navigationReducer";

export default combineReducers({
  navigation: navigationReducer
});
