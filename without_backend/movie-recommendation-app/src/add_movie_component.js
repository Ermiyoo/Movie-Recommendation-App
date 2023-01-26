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
            <ChooseCategory></ChooseCategory>
            <TextInputHolder type="text" name="director" hint="Director"></TextInputHolder><br/>
            <TextInputHolder type="text" name="writer" hint="Writer"></TextInputHolder><br/>
            <TextInputHolder type="text" name="actors" hint="Actors"></TextInputHolder><br/>
            <TextInputHolder type="text" name="language" hint="Language"></TextInputHolder><br/>
            <TextInputHolder type="text" name="award" hint="Award"></TextInputHolder><br/>
            <TextInputHolder type="text" name="realeasDate" hint="Realease Date"></TextInputHolder><br/>
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
function ChooseCategory(){

    return(
        <fieldset class ="fieldset">
             <legend>Gener/Category</legend>
             Action: <input name="action" type="checkbox"/>
             Comedy: <input name="comedy" type="checkbox"/>
             Drama: <input name="drama" type="checkbox"/><br/>
             Fantasy: <input name="fantasy" type="checkbox"/>
             Horror: <input name="horror" type="checkbox"/>
             Mystery: <input name="mystery" type="checkbox"/><br/>
             Romance: <input name="romance" type="checkbox"/>
             Thriller: <input name="thriller" type="checkbox"/>
             Wester: <input name="western" type="checkbox"/>
             
      </fieldset>
    );
} 
export {Top_bar,Body}