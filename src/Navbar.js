import React from "react";
import img from "./Troll Face.png";

export default function Navbar() {
  return (
    <nav className="header">
      <img src={img} className="header--image" />
      <h2 className="header--title">MemeGenerator</h2>
      <h4 className="header--project"> REACT MEME PROJECT</h4>
    </nav>
  );
}
