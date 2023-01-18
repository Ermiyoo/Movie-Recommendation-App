import "./choose_prefernce.css"
function CategoryContainer(){
    return(
    <center>
        
    <div class="container">
    <h1>Choose Gnere </h1><br/>
        <label>Select at least 3?</label><br/>
        <CatButton value="action" content="Action"></CatButton>
        <CatButton value="comedy" content="Comedy"></CatButton>
        <CatButton value="drama" content="Drama"></CatButton>
        <CatButton value="fantasy" content="Fantasy"></CatButton>
        <CatButton value="horror" content="Horor"></CatButton>
        <CatButton value="mystery" content="Mystery"></CatButton>
        <CatButton value="romance" content="Romance"></CatButton>
        <CatButton value="western" content="Western"></CatButton>
        <Next></Next>
    </div>
</center>
    );
}
function CatButton(props){
    return(
        <div class={"cat "+props.value}>
        <label>
           <input type="checkbox" value={props.value}/><span>{props.content}</span>
        </label>
     </div>
    );
}
function Next(){
    return(
        <button class="next" name="next">Next</button>
    );
}
export {CategoryContainer}