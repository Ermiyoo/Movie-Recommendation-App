import React from "react";
import { TextInputHolder, LoginButton, SignUpLink } from "./login_componenets";
import "./login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <center>
          <div class="container">
            <img
              src={require(".//image_asset/logo.png")}
              width="100"
              height="100"
              alt="logo"
            ></img>
            <br />
            <br />
            <input
              className="username"
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              placeholder="Username"
            />
            <br />
            <input
              className="password"
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <LoginButton
              username={this.state.username}
              password={this.state.password}
            ></LoginButton>
            <br />
            <br />
            <SignUpLink></SignUpLink>
          </div>
        </center>
      </>
    );
  }
}
