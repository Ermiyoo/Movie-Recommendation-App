
import Sign_up_page from "./sign_up_page";
import React from 'react';
import ReactDOM from 'react-dom/client';
import ChoosePrefernces from "./choose_prefernce";
function TextInputHolder(props){
    return(
    <>
    <input  type={props.type} class="sign_up_textInput" id={props.id}placeholder={props.hint}/>
    </>
    );
}

function select_category(){
    if(document.getElementById("cpassword").value===""
    ||document.getElementById("firstName").value===""
    ||document.getElementById("lastName").value===""
    ||document.getElementById("email").value===""
    ||document.getElementById("password").value===""){
        console.log(document.getElementById("cpassword").value)
        alert("Incomplete form!!")     
    }else{
        if(document.getElementById("password").value==document.getElementById("cpassword").value){
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
            <React.StrictMode>
            <ChoosePrefernces userPreEmail={document.getElementById("email").value} userPrePassword={document.getElementById("password").value}></ChoosePrefernces>
        
            </React.StrictMode>
            );
        }else{
            alert("The password you entered do not match!!")
        }
        
    }
}

function CreateAccount(){
    return(
        <>
        <button onClick={select_category} class="sign_up_createButton" >Create Account</button>
        </>
    );
}
export {TextInputHolder,CreateAccount}