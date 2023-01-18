function Top_bar(props){
    return(
        <div class="topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
            <Navigation action="about_us" name="about_us" content="About Us"></Navigation>
            <Navigation action="favorite"name="favorite" content="Favorite"></Navigation>
            <SearchBar></SearchBar>
           </div>
    );

}
function SearchBar(){
    return (
        <input class="searchBar" type="text" placeholder="Search for a movie"></input>
    );
}
function Navigation(props){
    return(
        <button onClick={props.action}class="navigation"name={props.name}>{props.content}</button>
    );
}

function Body(){
    return (
        <div id="grid">
            <Movie title="Avengers" poster="avengers"></Movie>   
        </div>
    );
}
const handleEdit = e => {
    e.preventDefault();
    document.getElementById(e.target.id).src=require(".//image_asset/favorite.png");
  };
function Movie(props){
    return(
        <div>
                <img class="movie_poster"src={require(".//image_asset/"+props.poster+".jpg")} width="200" height="250"/><br/>
                <div class="movieBottom">
                    <label class="title">{props.title}</label><br/>
                    <img  class="calender_image"src={require(".//image_asset/calender.png")} width="20" height="20"/>
                    <label class="date">2008</label>
                    <img id={props.title} class="like_image" onClick={e => handleEdit(e)} src={require(".//image_asset/heart.png")} width="20" height="20"/>
                </div>
            </div>
    );
}
export {Top_bar,Body}