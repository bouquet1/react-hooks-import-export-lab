import React from "react";
import { username, city } from "../data/user";
import NavBar from "./NavBar";

function Home() {
  return (
    <div id="home">
      {/* <NavBar /> */}
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
