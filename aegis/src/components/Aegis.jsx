import React from "react";
import Typewriter from 'typewriter-effect';
import "../styles/homepage.css";

export function Aegis() {
    return (
    <>
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