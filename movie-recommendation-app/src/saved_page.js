import "./user_home_page.css"
import { Body,Top_bar } from "./saved_movies_components";
function Favorite_page(props){
    return(
        <div class="body">
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
        ></Body>
        </div>
    );
}
export default Favorite_page