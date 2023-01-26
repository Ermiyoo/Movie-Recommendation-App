import {TextInputHolder,CreateAccount} from "./sign_up_component"
import "./sign_up_page.css"
function Sign_up_page(){
    return (
        <center>
        <div class="sign_up_container">
        <img src={require(".//image_asset/logo.png")} width="100" height="100"></img><br/><br/>
        <TextInputHolder id="firstName"type="text" name="email" hint="First name"></TextInputHolder><br/>
        <TextInputHolder id="lastName"type="text" name="password" hint="Last name"></TextInputHolder><br/>
        <TextInputHolder id="email"type="email" name="email" hint="Email"></TextInputHolder><br/>
        <TextInputHolder id="password"type="password" name="password" hint="Password"></TextInputHolder><br/>
        <TextInputHolder id="cpassword"type="password" name="password" hint="Confirm Password"></TextInputHolder><br/>
        <CreateAccount ></CreateAccount>
      </div>
      </center>
    );
}

export default Sign_up_page