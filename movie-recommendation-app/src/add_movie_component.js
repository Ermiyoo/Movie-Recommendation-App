import "./add_movie.css"
function Top_bar(props){
    return(
        <div class="topBar">
            <img src={require(".//image_asset/logo.png")} width="50" height="30"></img>
           
        </div>
    );
}
function Body(){
    return(
        <center>
        <div class="body">
            <TextInputHolder type="text" name="title" hint="Title"></TextInputHolder><br/>
            <TextInputHolder type="text" name="gener" hint="Gener"></TextInputHolder><br/>
            <TextInputHolder type="text" name="director" hint="Director"></TextInputHolder><br/>
            <TextInputHolder type="text" name="writer" hint="Writer"></TextInputHolder><br/>
            <TextInputHolder type="text" name="actors" hint="Actors"></TextInputHolder><br/>
            <TextInputHolder type="text" name="language" hint="Language"></TextInputHolder><br/>
            <TextInputHolder type="text" name="award" hint="Award"></TextInputHolder><br/>
            <TextInputHolder type="text" name="production" hint="Production"></TextInputHolder><br/>
            <input class="poster" text="Add poster"type="file"></input><br/>
            <AddButton></AddButton>
        </div>
        </center>
    );
}
function TextInputHolder(props){
    return(
    <>
    <input type={props.type} class="textInput" placeholder={props.hint}/>
    </>
    );
}
function AddButton(){
    return(
        <>
        <button  class="addButton" >Add Movie</button>
        </>
    );
}
export {Top_bar,Body}