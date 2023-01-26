import {useState,useEffect} from "react"
import React from 'react';
import ReactDOM from 'react-dom/client';
import User_home_page from "./user_home_page";
import "./about_us.css"
//to redirect to user home page you have to make sure password and email before redirecting
function home_page(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <User_home_page></User_home_page>
      </React.StrictMode>
    );
}
function Top_bar(props){
    return(
        <>
        <div class="about_us_topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
            <Navigation action={home_page}name="Home" content="Home"></Navigation>
        </div>
         </>
    );

}
function Navigation(props){
 
    return(
        <button onClick={props.action}class="about_us_navigation"name={props.name}>{props.content}</button>
    );
}
function Paragraph(){
    return(
        <div class="paragraph_div">
           <img src={require(".//image_asset/logo.png")} width="100" height="100"></img><br/>
        <p class="paragra">Part of the WarnerMedia family, HBO has been recognized for decades as one of the most respected and innovative entertainment brands in the world. It’s where the most talented, creative minds choose to tell their stories and where people around the world come to watch iconic, award-winning programs.

                And it’s never been easier to join in. HBO programming is sold in more than 155 countries worldwide and our branded services are available in more than 85 countries across Asia, Europe, Latin America, and the Caribbean. In the United States, there are many ways to watch your favorite HBO shows and films: the linear HBO channel, HBO on Demand, the HBO app, and HBO Max, which includes all of HBO with even more amazing shows and films. HBO also operates seven 24-hour networks on traditional pay television, including HBO Family, HBO Comedy, and HBO Latino.

                Stories connect us — they always have. At HBO, we strive to develop the best shows and films that illustrate the incredible power of storytelling.

                Have questions about HBO services? Explore FAQs here.</p>


        </div>
    );
}

function CommentUs(){
    let nextId=0
    const [comment,setComment]=useState([])

    useEffect(()=>{
        document.getElementById("inputText").value=""
    },[comment])
    return(
    <>
        <fieldset class ="comm">
             <legend>Comment Us</legend>
             <textarea class="inputBox"id="inputText"type="text" placeholder="Comment here"></textarea>
        <button class="inputButton"onClick={()=>{
            setComment([
                ...comment,// to put new element infront of the old one
                { id: nextId++, comm: document.getElementById("inputText").value }
              ]);
        }}>Send</button>
        <div class="commentDiv">
        {comment.map(i=>(
           <li id={i.id}>{i.comm}</li>  
        ))}
        </div>
        </fieldset>
    </>
    );
} 
export {Top_bar,Paragraph,CommentUs}