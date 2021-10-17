import React from "react";

function ItemPerfil(props) {
  return (
    <div className="d-flex flex-column">
      <h2>{props.titulo}</h2>
      <h2>{props.value}</h2>
    </div>
  );
}

export default ItemPerfil;
