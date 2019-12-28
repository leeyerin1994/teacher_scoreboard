import React from "react";
import {Stats} from "./Stats";

export const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <Stats players={props.players} />
      <h1 className="h1">{props.title}</h1>
    </header>
  );
}