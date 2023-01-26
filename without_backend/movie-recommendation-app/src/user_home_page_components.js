import React from "react";
import ReactDOM from "react-dom/client";
import Download from "./download_page";
import Favorite_page from "./saved_page";
function Top_bar(props) {
  return (
    <div class="user_home_topBar">
      <img
        src={require(".//image_asset/logo.png")}
        width="50"
        height="30"
      ></img>
      <Navigation
        action={about_us}
        name="about_us"
        content="About Us"
      ></Navigation>
      <Navigation
        action={favorite}
        name="favorite"
        content="Favorite"
      ></Navigation>
      <SearchBar></SearchBar>
    </div>
  );
}

function SearchBar() {
  return (
    <input
      onChange={(e) => {
        if (
          document.getElementById(document.getElementById(e.target.id).value)
        ) {
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(
            <React.StrictMode>
              <Download
                body="Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters."
                poster={document.getElementById(e.target.id).value}
                title={document.getElementById(e.target.id).value}
                date={"2008"}
                director={""}
                writer={""}
                actor={""}
                language={""}
                like="1M"
                award={""}
                production={""}
              ></Download>
            </React.StrictMode>
          );
        }
      }}
      id="searchId"
      class="user_home_searchBar"
      type="text"
      placeholder="Search for a movie"
    ></input>
  );
}
function about_us() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Favorite_page></Favorite_page>
    </React.StrictMode>
  );
}
// list of movies

const film = {
  Avengers: 2023,
  Freedom: 2008,
  IronMan: 2023,
  Jaws: 2010,
  Matrix: 2003,
  Midsommar: 2023,
  Rocky: 2022,
  SanAndreas: 2005,
  SpiderMan: 2022,
};
const favMovie = {};

function favorite() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Favorite_page movieFav={favMovie}></Favorite_page>
    </React.StrictMode>
  );
}
function Navigation(props) {
  return (
    <button
      onClick={props.action}
      class="user_home_navigation"
      name={props.name}
    >
      {props.content}
    </button>
  );
}

// film List in array

function Body() {
  return (
    <div id="user_home_grid">
      {Object.entries(film).map(([k, v]) => (
        <Movie key={k} date={v} title={k}>
          {k}:{v}
        </Movie>
      ))}
    </div>
  );
}
//for changing favorite image
let like = 0;
const handleEdit = (e) => {
  e.preventDefault();
  let keyValue = e.target.id;
  if (like == 0) {
    document.getElementById(
      e.target.id
    ).src = require(".//image_asset/favorite.png");

    favMovie[keyValue.slice(0, keyValue.length - 5)] =
      film[keyValue.slice(0, keyValue.length - 5)];
    console.log(favMovie);
    like = 1;
  } else if (like == 1) {
    document.getElementById(
      e.target.id
    ).src = require(".//image_asset/heart.png");
    delete favMovie[keyValue.slice(0, keyValue.length - 5)];
    like = 0;
  }
};
// this is the one for redirecting to the movie detail page
const movie_detail = (e) => {
  e.preventDefault();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Download
        body="Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters."
        poster={e.target.id}
        title={e.target.id}
        date={document.getElementById(e.target.id + "dateId").innerText}
        director={""}
        writer={""}
        actor={""}
        language={""}
        like="1M"
        award={""}
        production={""}
      ></Download>
    </React.StrictMode>
  );
};
function Movie(props) {
  return (
    <div>
      <img
        id={props.title}
        onClick={(e) => movie_detail(e)}
        class="user_home_movie_poster"
        src={require(".//image_asset/" + props.title + ".jpg")}
        width="200"
        height="250"
      />
      <br />
      <div class="user_home_movieBottom">
        <label class="user_home_title">{props.title}</label>
        <br />
        <img
          class="user_home_calender_image"
          src={require(".//image_asset/calender.png")}
          width="20"
          height="20"
        />
        <label id={props.title + "dateId"} class="user_home_date">
          {props.date}
        </label>
        <img
          id={props.title + "heart"}
          class="user_home_like_image"
          onClick={(e) => handleEdit(e)}
          src={require(".//image_asset/heart.png")}
          width="20"
          height="20"
        />
      </div>
    </div>
  );
}
export { Top_bar, Body };
