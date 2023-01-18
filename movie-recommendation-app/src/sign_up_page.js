import {TextInputHolder,CreateAccount} from "./sign_up_component"
function Sign_up_page(){
    return (
        <center>
        <div class="container">
        <img src={require(".//image_asset/logo.png")} width="100" height="100"></img><br/><br/>
        <TextInputHolder type="text" name="email" hint="First name"></TextInputHolder><br/>
        <TextInputHolder type="text" name="password" hint="Last name"></TextInputHolder><br/>
        <TextInputHolder type="email" name="email" hint="Email"></TextInputHolder><br/>
        <TextInputHolder type="password" name="password" hint="Password"></TextInputHolder><br/>
        <TextInputHolder type="password" name="password" hint="Confirm Password"></TextInputHolder><br/>
        <CreateAccount ></CreateAccount>
      </div>
      </center>
    );
}

export default Sign_up_page