
function TextInputHolder(props){
    return(
    <>
    <input type={props.type} class={props.name} placeholder={props.hint}/>
    </>
    );
}

function LoginButton(){
    return(
        <>
        <button  class="loginButton" >Login</button>
        </>
    );
}
function SignUpLink(){
    return(
        <>
        <a class="signUpLink"  href="url">Sign Up ?</a>
        </>
    );
}

export {TextInputHolder,LoginButton,SignUpLink}