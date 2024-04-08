import React from "react";
import Typewriter from 'typewriter-effect';
import icon from "../assets/logo.png";
import "../styles/homepage.css";

export function Aegis() {
    return (
    <>
    <img src={icon} width={200} height={200}></img>
    <h1>Aegis</h1>
    <Typewriter
  options={{
    strings: ['Guard your inventions.', 'The correct way!'],
    autoStart: true,
    loop: true,
    wrapperClassName: 'typer',
    cursorClassName: 'cursor'

  }}
/>
    </>
    );
}