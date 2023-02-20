import React from "react";
import './styles/todo-item.css'

function TodoItem(props) {
  const { text, completed } = props

  return(
    <li className="todo__list-item">
      <span className="item__text">
        <button
          className="item__text-icon"
          onClick={props.onComplete}
        >
          {completed ? '✅' : '☑️'}
        </button>
        <p>{text}</p>
      </span>
      <button
        className="item__button"
        onClick={props.onDelete}
      >
        🗑️
      </button>
    </li>
  )
}

export { TodoItem }
