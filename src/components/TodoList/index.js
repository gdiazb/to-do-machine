import React from "react";
import './styles/todo-list.css'

function TodoList(props) {
  return(
    <ul className="todo__list">
      {props.children}
    </ul>
  )
}

export { TodoList }
