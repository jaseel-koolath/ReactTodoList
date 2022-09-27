import React from "react";

function TodoItem(props) {
  return <li onClick={() => props.delete(props.id)}>{props.item}</li>;
}

export default TodoItem;
