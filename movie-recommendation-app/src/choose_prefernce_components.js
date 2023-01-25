import React from 'react';
import ReactDOM from 'react-dom/client';
import User_home_page from "./user_home_page";
function CategoryContainer(){
    return(
    <center>
        
    <div class="choose_prefernce_container">
    <h1>Choose Gnere </h1><br/>
        <label>Select at least 3?</label><br/>
        <CatButton id="action" value="action" content="Action"></CatButton>
        <CatButton id="comedy"value="comedy" content="Comedy"></CatButton>
        <CatButton id="drama" value="drama" content="Drama"></CatButton>
        <CatButton id="fantasy"value="fantasy" content="Fantasy"></CatButton>
        <CatButton id="horror"value="horror" content="Horor"></CatButton>
        <CatButton id="mystery"value="mystery" content="Mystery"></CatButton>
        <CatButton id="romance"value="romance" content="Romance"></CatButton>
        <CatButton id="western"value="western" content="Western"></CatButton>
        <Next></Next>
    </div>
</center>
    );
}
function CatButton(props){
    return(
        <div class={"cat "+props.value}>
        <label>
           <input id={props.id}type="checkbox" value={props.value}/><span>{props.content}</span>
        </label>
     </div>
    );
}
function Next(){
    let count=0
    return(
        <button onClick={()=>{
            if(document.getElementById("action").checked){
               count++
            }
            if(document.getElementById("comedy").checked){
                count++
             }
             if(document.getElementById("drama").checked){
                count++
             }
             if(document.getElementById("fantasy").checked){
                count++
             }
             if(document.getElementById("horror").checked){
                count++
             }
             if(document.getElementById("mystery").checked){
                count++
             }
             if(document.getElementById("romance").checked){
                count++
             }
             if(document.getElementById("western").checked){
                count++
             }
             if(count>=3){
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>
                <User_home_page></User_home_page>
                </React.StrictMode>
                );
             }else{
                alert("Please select atleast three geners !!")
             }
        }} class="next" name="next">Next</button>
    );
}
export {CategoryContainer}