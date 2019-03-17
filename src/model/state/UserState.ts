
export default interface UserState {

  /**
   * userid generated by oldcoffee service backend
   */
  userId: string;

  /**
   * username, given by user at the time of SignUp
   */
  username: string;

  /**
   * Last login date
   */
  lastLoginTimestamp: Date;
}