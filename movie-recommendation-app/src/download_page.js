import { Top_bar,Body } from "./download_component";
import "./download.css"
function Download(props){
    return(

        <>
        <Top_bar></Top_bar>
        <Body 
        body={props.body} 
        poster={props.poster} 
        title={props.title} 
        date={props.date}
         director={props.director}
         writer={props.writer}
         actor={props.actor}
         language={props.language}
         award={props.award}
         production={props.production}
         like={props.like}
        ></Body>
        </>
    );
}
export default Download