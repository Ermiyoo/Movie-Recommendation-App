import "./saved_movies.css"
function Top_bar(props){
    return(
        <>
        <div class="topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
            <SearchBar></SearchBar>
        </div>
        <div class="favorite">Favorite <img src={require(".//image_asset/favorite.png")} width="20" height="22"/></div>
        </>
    );

}
function SearchBar(){
    return (
        <input class="searchBar" type="text" placeholder="Search for a movie"></input>
    );
}

function Body(){
    return (
        <div id="grid">
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
        </div>
    );
}
function Movie(props){
    //use the props to provide image path title and date 
    return(
        <div>
                <img class="movie_poster" src={require(".//image_asset/avengers.jpg")} width="200" height="250"/><br/>
                <div class="movieBottom">
                    <label class="title">Avegngers</label><br/>
                    <img class="calender_image"src={require(".//image_asset/calender.png")} width="20" height="20"/>
                    <label class="date">2008</label>
                    <img class="like_image"src={require(".//image_asset/favorite.png")} width="20" height="20"/>
                </div>
            </div>
    );
}
export {Top_bar,Body}