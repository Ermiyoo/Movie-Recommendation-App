import "./download.css"
function Top_bar(){
    return(
        <div class="topBar">
        <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
    </div>
        );        
}
function Body(){
    return (
        <div class="body">
              <img class="poster" src={require(".//image_asset/avengers.jpg")} width="450" height="650"></img>
              <div class="detailHolder">
                <span class="title">Avengers</span>
                <img class="favorite"src={require(".//image_asset/favorite.png")} width="20" height="20"></img><span>1M</span><br/>
                <span>Realse Date: 2008</span><br/><br/>
                <span >Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.</span>
                <br/><br/><br/>
                <hr></hr>
                <span>Genre: </span><br/><br/>
                <span>Direcor: </span><br/><br/>
                <span>Writer: </span><br/><br/>
                <span>Actors: </span><br/><br/>
                <span>Language: </span><br/><br/>
                <span>Award: </span><br/><br/>
                <span>Production: </span><br/>
                <button class="download">Download</button>
              </div>
        </div>
    );
}
export {Top_bar,Body}