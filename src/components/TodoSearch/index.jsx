import React from "react";
import { TodoContext } from "../../TodoConstext";
import './styles/todo-search.css'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <input
        placeholder="Cebolla"
        className="todo__input todo-search__input"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }
