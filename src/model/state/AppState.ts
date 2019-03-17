import UserState from "./UserState";

export default interface AppState {

  /**
   * user related
   */
  identity?: UserState;

  /**
   * does it logged in
   */
  isLoggedIn: boolean
}
