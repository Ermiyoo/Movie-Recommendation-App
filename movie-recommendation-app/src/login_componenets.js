import Sign_up_page from "./sign_up_page";
import React from "react";
import ReactDOM from "react-dom/client";
import User_home_page from "./user_home_page";
function TextInputHolder(props) {
  return (
    <>
      <input
        type={props.type}
        className={props.name}
        placeholder={props.hint}
      />
    </>
  );
}
//to redirect to user home page you have to make sure password and email before redirecting
function home_page() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <User_home_page></User_home_page>
    </React.StrictMode>
  );
}

function LoginButton() {
  return (
    <>
      <button onClick={home_page} className="loginButton">
        Login
      </button>
    </>
  );
}
// to redirect form login page to sign in page
function signUp_page() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Sign_up_page />
    </React.StrictMode>
  );
}
function SignUpLink() {
  return (
    <>
      <a className="signUpLink" onClick={signUp_page}>
        Sign in ?
      </a>
    </>
  );
}

export { TextInputHolder, LoginButton, SignUpLink };
