import React from "react";
import './styles/empty-state.css'

function EmptyState() {
  return(
    <>
      <img className="todo__empty-state-img" src="../img/empty-state.png" alt="" />
      <h2 className="todo__empty-state">
        <strong>¡Ups!</strong>
        <p>Aún no tienes tareas creadas</p>
      </h2>
    </>
  )
}

export { EmptyState }
