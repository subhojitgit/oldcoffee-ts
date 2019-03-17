import { connect } from 'react-redux';
import {login} from "../action/action";
import { Action, Dispatch } from "redux";
import LoginComponent from "../component/LoginComponent";

type OwnProps = {
  name: string;
};

export interface LoginStateProp {
  username: string;
  password: string;
}

export interface LoginDispatchProp {
  onSubmitClick: () => any
}

const mapStateToProps = (state: any, ownProps: OwnProps): LoginStateProp => ({
  username: ownProps.name,
  password: ownProps.name
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): LoginDispatchProp => ({
  onSubmitClick: () => dispatch(login())
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
