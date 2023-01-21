
import Sign_up_page from "./sign_up_page";
import React from 'react';
import ReactDOM from 'react-dom/client';
import ChoosePrefernces from "./choose_prefernce";
function TextInputHolder(props){
    return(
    <>
    <input type={props.type} class="sign_up_textInput" placeholder={props.hint}/>
    </>
    );
}
function select_category(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <ChoosePrefernces></ChoosePrefernces>
      </React.StrictMode>
    );
}
function CreateAccount(){
    return(
        <>
        <button onClick={select_category} class="sign_up_createButton" >Create Account</button>
        </>
    );
}
export {TextInputHolder,CreateAccount}