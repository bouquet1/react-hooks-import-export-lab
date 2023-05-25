import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import { username, city, image } from "../data/user";

function App() {
  return (
    <div>
      {/* {(username, city, image)} */}
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
