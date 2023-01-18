
function Top_bar(){
    return(
        <div class="download_topBar">
        <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
    </div>
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
                <button class="download">Download</button>
              </div>
        </div>
    );
}
export {Top_bar,Body}