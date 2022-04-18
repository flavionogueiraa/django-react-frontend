import React from "react";
import ListItemComponent from "./ListItemComponent";

export default function ListComponent(props) {
  return (
    <div>
      <h2>{props.listName}</h2>
      <ul>
        <ListItemComponent name="Meu item de exemplo" />
      </ul>
    </div>
  );
}
