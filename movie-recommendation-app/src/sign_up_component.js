import "./sign_up_page.css"
function TextInputHolder(props){
    return(
    <>
    <input type={props.type} class="textInput" placeholder={props.hint}/>
    </>
    );
}
function CreateAccount(){
    return(
        <>
        <button  class="createButton" >Create Account</button>
        </>
    );
}
export {TextInputHolder,CreateAccount}