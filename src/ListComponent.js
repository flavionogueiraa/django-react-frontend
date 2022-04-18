import React from "react";
import ListItemComponent from "./ListItemComponent";

export default function ListComponent() {
  return (
    <div>
      <h2>Minha lista</h2>
      <ul>
        <ListItemComponent name="Meu item de exemplo" />
      </ul>
    </div>
  );
}
