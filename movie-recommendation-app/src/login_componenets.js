import React from "react";
import axios from "axios";
import Sign_up_page from "./sign_up_page";
import ReactDOM from "react-dom/client";
import User_home_page from "./user_home_page";

const login = async (user, pass) => {
  // const pwd = bcrypt.hashSync(this.state.password, salt);

  return await axios.post("https://moviebackend-rmr1.onrender.com/api/v1/user/login", {
    username: user,
    password: pass,
  });
};

function TextInputHolder(props) {
  return (
    <>
      <input
        id={props.name}
        type={props.type}
        class={props.name}
        placeholder={props.hint}
      />
    </>
  );
}

function showHomePage() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <User_home_page />
    </React.StrictMode>
  );
}
//to redirect to user home page you have to make sure password and email before redirecting

function LoginButton(props) {
  return (
    <>
      <button
        onClick={() => {
          if (props) {
            login(props.username, props.password)
              .then((res) => {
                console.log(res);
                showHomePage();
              })
              .catch((err) => {
                alert("Error");
                console.log(err);
              });
          } else {
          }
        }}
        class="loginButton"
      >
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
      <Sign_up_page></Sign_up_page>
    </React.StrictMode>
  );
}
function SignUpLink() {
  return (
    <>
      <a class="signUpLink" onClick={signUp_page}>
        Sign in ?
      </a>
    </>
  );
}

export { TextInputHolder, LoginButton, SignUpLink };
