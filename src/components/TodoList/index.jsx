import React from "react";
import './styles/todo-list.css'

function TodoList(props) {
  return(
    <div className="todo__list-wrapper">
      <ul className="todo__list">
        {props.children}
      </ul>
    </div>
  )
}

export { TodoList }
