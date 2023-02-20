import React from "react";

import './styles/app.css';
import './styles/todo-layout.css';

import { TodoContext } from "./TodoConstext";

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { EmptyState } from "./components/EmptyState";

function View() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
  } = React.useContext(TodoContext)

  return (
    <div className="todo-layout">
      <div className="todo-content">
        <TodoCounter />
        <TodoSearch />
          <TodoList>
            {error && <div className="loading"><p>Error</p></div>}
            {loading && <div className="loading"><p>Cargando...</p></div>}
            {(!loading && !searchedTodos.length) && <EmptyState />}
            
            {searchedTodos.map((todo) => (
              <TodoItem
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                key={todo.id}
                onComplete={() => completeTodos(todo.id)}
                onDelete={() => deleteTodos(todo.id)}
              />
            ))}
          </TodoList>
      </div>
      <div className="todo-aside">
        <div className="todo-aside__content">
          <CreateTodoButton />
        </div>
      </div>
    </div>
  );
}

export { View };
