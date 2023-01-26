import { CategoryContainer } from "./choose_prefernce_components";
import "./choose_prefernce.css"
function ChoosePrefernces(props){
    return(
        <CategoryContainer userEmail={props.userPreEmail} userPassword={props.userPrePassword}></CategoryContainer>
    );
}
export default ChoosePrefernces