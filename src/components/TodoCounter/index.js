import React from "react";
import { TodoContext } from "../../TodoConstext"
import './styles/todo-counter.css'

function TodoCounter() {
  const { totalTodos: total, completedTodos: completed } = React.useContext(TodoContext)

  return(
    <h2 className="todo__counter-title">Has completado {completed} de {total} TODOs</h2>
  )
}

export { TodoCounter }
