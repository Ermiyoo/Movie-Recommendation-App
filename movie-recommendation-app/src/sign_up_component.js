function TextInputHolder(props) {
  return (
    <>
      <input
        type={props.type}
        class="sign_up_textInput"
        id={props.id}
        placeholder={props.hint}
      />
    </>
  );
}

function CreateAccount() {
  return (
    <>
      <button className="sign_up_createButton">Create Account</button>
    </>
  );
}
export { TextInputHolder, CreateAccount };
