
import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import { signUp } from "./containers/SignUpPage/reducer";
import { signIn } from "./containers/SignInPage/reducer";

// tslint:disable-next-line:typedef
const rootReducer = combineReducers({
  routing: routerReducer,
  signUp:signUp,
  signIn:signIn,
});

export default rootReducer;
