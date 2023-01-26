function Top_bar(props){
    return(
        <div class="topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
            <SearchBar></SearchBar>
        </div>
    );
}
