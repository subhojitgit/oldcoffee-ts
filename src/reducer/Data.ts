import AppState from "../model/state/AppState";
import {LOGIN_ACTION} from "../action/action";
import update  from 'immutability-helper';


const initialState: AppState = {
    isLoggedIn: false
}

export default function oldCoffeeApp(
  state: AppState = initialState,
  action: any
): AppState {
    switch (action.type) {
      case LOGIN_ACTION:
        return update(state, {
          isLoggedIn: {
            $set: true
          }
        });
      default:
        return state;
    }
};
