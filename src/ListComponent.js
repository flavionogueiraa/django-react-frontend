import React from "react";
import ListItemComponent from "./ListItemComponent";

export default function ListComponent(props) {
  const items = props.items;
  return (
    <div>
      <h3>{props.listName}</h3>
      <ul>
        {items.map(item => <ListItemComponent key={item.id} name={item.name} status={item.done}/>)}
      </ul>
    </div>
  );
}
