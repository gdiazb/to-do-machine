import React from "react";
import './styles/empty-state.css'
import EmptyStateImage from "../../assets/empty-state.png";

function EmptyState() {
  return(
    <>
      <img className="todo__empty-state-img" src={EmptyStateImage} alt="" />
      <h2 className="todo__empty-state">
        <strong>¡Ups!</strong>
        <p>Aún no tienes tareas creadas</p>
      </h2>
    </>
  )
}

export { EmptyState }
