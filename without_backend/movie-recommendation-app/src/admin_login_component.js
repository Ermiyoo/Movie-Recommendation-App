import React from 'react';
import ReactDOM from 'react-dom/client';
import AddMovies from "./add_movie";
function TextInputHolder(props){
    return(
    <>
    <input type={props.type} class={props.name} placeholder={props.hint}/>
    </>
    );
}
//to redirect to user add movie page you have to make sure password and email before redirecting
function add_movie(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <AddMovies></AddMovies>
      </React.StrictMode>
    );
}

function LoginButton(){
    return(
        <>
        <button  onClick={add_movie}class="loginButton" >Login</button>
        </>
    );
}


export {TextInputHolder,LoginButton}