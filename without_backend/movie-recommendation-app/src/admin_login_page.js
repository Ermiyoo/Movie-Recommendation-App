import {TextInputHolder,LoginButton} from "./admin_login_component";
import "./login.css"
function LoginAdmin(){
    return(
    <>
    <center>
    <div class="container">
    <img src={require(".//image_asset/logo.png")} width="100" height="100"></img><br/><br/>
      <TextInputHolder type="email" name="email" hint="Admin Email"></TextInputHolder><br/>
      <TextInputHolder type="password" name="password" hint="Admin Password"></TextInputHolder><br/>
      <LoginButton ></LoginButton><br/><br/>
     </div>
     </center>
    </>
    );
}

export default LoginAdmin
