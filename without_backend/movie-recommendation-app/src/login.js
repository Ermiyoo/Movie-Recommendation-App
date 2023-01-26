import { TextInputHolder, LoginButton, SignUpLink } from "./login_componenets";
import "./login.css";
function Login(props) {
  return (
    <>
      <center>
        <div class="container">
          <img
            src={require(".//image_asset/logo.png")}
            width="100"
            alt="logo"
            height="100"
          ></img>
          <br />
          <br />
          <TextInputHolder
            type="email"
            name="email"
            hint="User Email"
          ></TextInputHolder>
          <br />
          <TextInputHolder
            type="password"
            name="password"
            hint="User Password"
          ></TextInputHolder>
          <br />
          <LoginButton
            userEmail={props.email}
            userPassword={props.password}
          ></LoginButton>
          <br />
          <br />
          <SignUpLink></SignUpLink>
        </div>
      </center>
    </>
  );
}

export default Login;
