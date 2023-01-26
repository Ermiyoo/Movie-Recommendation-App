import React from "react";
import { TextInputHolder, LoginButton, SignUpLink } from "./login_componenets";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./login.css";

let salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    // const pwd = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://localhost:8000/api/v1/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user._id);
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.errorMessage
        ) {
          alert("User Not Found");
        }
      });
  };

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
            <TextInputHolder
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              hint="Username"
            ></TextInputHolder>
            <br />
            <TextInputHolder
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              hint="Password"
            ></TextInputHolder>
            <br />
            <LoginButton></LoginButton>
            <br />
            <br />
            <SignUpLink></SignUpLink>
          </div>
        </center>
      </>
    );
  }
}

/*

import "./login.css";
import React from "react";
import { Button, TextField, Link, FormHelperText } from "@material-ui/core";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./login.css";
import Register from "./components/signUp";

let salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {
    // const pwd = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://localhost:8000/api/v1/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user._id);
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.data &&
          err.response.data.errorMessage
        ) {
          alert("User Not Found");
        }
      });
  };

  render() {
    return (
      <div className="mainContainer">
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="Username"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br />
          <br />
          <Button
            id="logbtn"
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === "" && this.state.password === ""}
            onClick={this.login}
          >
            Login
          </Button>{" "}
          <Link id="reg" href="/register">
            Register
          </Link>
        </div>
      </div>
    );
  }
}



*/

// export default Login
