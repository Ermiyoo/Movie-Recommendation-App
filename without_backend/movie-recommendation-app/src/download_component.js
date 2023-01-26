import React from 'react';
import ReactDOM from 'react-dom/client';
import User_home_page from "./user_home_page";
import AboutUs from './about_us_page';
function Top_bar(){
    return(
        <div class="download_topBar">
        <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
        <Navigation action={home_page}name="Home" content="Home"></Navigation>
         <Navigation action={about_us} name="about_us" content="About Us"></Navigation> 
    </div>
        );        
}
function about_us(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <AboutUs></AboutUs>
      </React.StrictMode>
    );
}
//to redirect to user home page you have to make sure password and email before redirecting
function home_page(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
       <User_home_page></User_home_page>
      </React.StrictMode>
    );
}

 // for film downloading with its name
 const onButtonClick = (e) => {
    fetch('/film_package/The.Big.Bang.Theory.S01E01.720p.BrRip.2CH.x265.@SeriesLand4U.mkv').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = e.target.id+'.mkv';
            alink.click();
        })
    })
}

function Navigation(props){
 
    return(
        <button onClick={props.action}class="user_home_navigation"name={props.name}>{props.content}</button>
    );
}

function Body(props){
    return (
        <div class="download_body">
              <img class="download_poster" src={require(".//image_asset/"+props.poster+".jpg")} width="450" height="650"></img>
              <div class="download_detailHolder">
                <span class="download_title">{props.title}</span>
                <img class="download_favorite"src={require(".//image_asset/favorite.png")} width="20" height="20"></img><span>{props.like}</span><br/>
                <span>Realse Date: {props.date}</span><br/><br/>
                <span >{props.body}</span> <br/><br/><br/>
                <hr></hr>
                <span>Genre:{props.gener} </span><br/><br/>
                <span>Direcor: {props.director} </span><br/><br/>
                <span>Writer: {props.writer} </span><br/><br/>
                <span>Actors: {props.actor} </span><br/><br/>
                <span>Language: {props.language} </span><br/><br/>
                <span>Award: {props.award} </span><br/><br/>
                <span>Production: {props.production} </span><br/>
                <button onClick={(e)=>{
                    if(props.date<(new Date().getFullYear())){
                        alert("Download have started !!")
                        onButtonClick(e)
                        }else{
                            alert("This film is still in cinema you can't download it here !!")
                    }
                }} id={props.title} class="download">Download</button>
              </div>
        </div>
    );
}
export {Top_bar,Body}