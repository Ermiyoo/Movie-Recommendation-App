import {TextInputHolder,LoginButton,SignUpLink} from "./login_componenets";
import "./login.css"
function Login(){
    return(
    <>
    <center>
    <div class="container">
    <img src={require(".//image_asset/logo.png")} width="100" height="100"></img><br/><br/>
      <TextInputHolder type="email" name="email" hint="User Email"></TextInputHolder><br/>
      <TextInputHolder type="password" name="password" hint="User Password"></TextInputHolder><br/>
      <LoginButton ></LoginButton><br/><br/>
      <SignUpLink></SignUpLink>
     </div>
     </center>
    </>
    );
}

export default Login