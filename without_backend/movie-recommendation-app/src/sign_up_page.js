import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import "./sign_up_page.css";
import Login from "./login";

export default class Sign_up_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      preferences: [],
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  signUp = () => {
    console.log(this.state);
    axios
      .post("https://moviebackend-rmr1.onrender.com/api/v1/user/createAccount", {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
      })
      .then((res) => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <Login />
          </React.StrictMode>
        );
      })
      .catch((err) => {
        alert("Error");
      });
  };

  render() {
    return (
      <>
        <center>
          <div className="sign_up_container">
            <img
              src={require(".//image_asset/logo.png")}
              alt="logo"
              width="100"
              height="100"
            ></img>
            <br />
            <br />
            <input
              id="firstName"
              type="text"
              name="firstname"
              placeholder="First name"
              className="sign_up_textInput"
              onChange={this.onChange}
            />
            <br />

            <input
              id="lastName"
              type="text"
              name="lastname"
              placeholder="Last name"
              className="sign_up_textInput"
              onChange={this.onChange}
            />
            <br />

            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              className="sign_up_textInput"
              onChange={this.onChange}
            />
            <br />
            <input
              id="email"
              className="sign_up_textInput"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
            />
            <br />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="sign_up_textInput"
              onChange={this.onChange}
            />
            <br />
            <input
              id="cpassword"
              type="password"
              name="password"
              placeholder="Confirm Password"
              className="sign_up_textInput"
              onChange={this.onChange}
            />
            <br />
            <button onClick={this.signUp}>Create Account </button>
          </div>
        </center>
      </>
    );
  }
}
