import * as React from 'react';
import {Button, Form} from 'semantic-ui-react';
import {LoginDispatchProp, LoginStateProp} from "../container/LoginContainer";




export type LoginProps = LoginStateProp & LoginDispatchProp;

export default class LoginComponent extends React.PureComponent<LoginProps> {

  readonly un: string = this.props.username;
  readonly pw: string = this.props.password;

  render(): JSX.Element {
    return (
      <Form>
        <Form.Field width={2}>
          <input placeholder={this.un}/>
        </Form.Field>
        <Form.Field width={2}>
          <input placeholder={this.pw} type='password'/>
        </Form.Field>
        <Button type='submit' onClick={this.props.onSubmitClick}>Submit</Button>
      </Form>
    );
  }
}


