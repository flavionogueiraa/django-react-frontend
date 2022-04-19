import React from "react";

export default function ListItemComponent(props) {
  const status = props.status;
  return (
    <li>
      <p>{props.name}</p>
      <p>Status: {status ? <span>Completo</span> : <span>Incompleto</span>}</p>
    </li>
  );
}
