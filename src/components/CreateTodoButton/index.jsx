import React from "react";
import { TodoContext } from "../../TodoConstext";

import './styles/index.css'

function CreateTodoButton() {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onWrite = (e) => {
    setNewTodoValue(e.target.value)
  }

  const { addTodo } = React.useContext(TodoContext)

  const createTask = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
  }

  return(
    <>
      <h3 className="todo-aside__title">Create new task</h3>
      <form onSubmit={createTask}>
        <label htmlFor="name" className="todo-form__label">Task name</label>
        <textarea
          value={newTodoValue}
          onChange={onWrite}
          placeholder="Ejemplo: cortar cebolla"
          className="todo__input todo-form__input"
        />
        <button
          className="todo-form__button"
          type="submit"
        >
          Create task
        </button>
      </form>
    </>
  )
}

export { CreateTodoButton }
