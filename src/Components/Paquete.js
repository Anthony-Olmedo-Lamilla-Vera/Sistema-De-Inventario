import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextProduct } from "../Context/ContextProduct";
import { Ruta } from "../VariablesEntorno";

function Paquete(props) {
  return (
    <div className="w-25 me-2 bg-success text-center shadow-sm p-3 mb-5 bg-body rounded">
      <h3>{props.tipo}</h3>
      <ol class="list-group list-group-numbered ">
        {props.beneficios
          ? props.beneficios.map((element) => {
              return <li class="list-group-item overflow-hidden">{element}</li>;
            })
          : ""}
      </ol>
      <div className="precio d-flex justify-content-center">
        <h4>Precio ${props.precio}</h4>
      </div>
      <button className="btn btn-dark">Elejir Plan</button>
    </div>
  );
}

export default Paquete;
