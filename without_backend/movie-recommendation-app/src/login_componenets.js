import Sign_up_page from "./sign_up_page";
import React from 'react';
import ReactDOM from 'react-dom/client';
import User_home_page from "./user_home_page";
function TextInputHolder(props){
    return(
    <>
    <input id={props.name} type={props.type} class={props.name} placeholder={props.hint}/>
    </>
    );
}
//to redirect to user home page you have to make sure password and email before redirecting
function LoginButton(props){
    return(
        <>
        <button  onClick={()=>{
            if(document.getElementById("email").value===props.userEmail && document.getElementById("password").value===props.userPassword&&document.getElementById("email").value!=null){
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>
                <User_home_page></User_home_page>
                </React.StrictMode>
                );
        }else{
          
        }
        }}class="loginButton" >Login</button>
        </>
    );
}
// to redirect form login page to sign in page
function signUp_page(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <Sign_up_page></Sign_up_page>
      </React.StrictMode>
    );
}
function SignUpLink(){
    return(
        <>
        <a  class="signUpLink"  onClick={signUp_page}>Sign in ?</a>
        </>
    );
}

export {TextInputHolder,LoginButton,SignUpLink}