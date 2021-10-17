import React, { useContext } from "react";
import Lists from "../Components/Lists";
import { contextProduct } from "../Context/ContextProduct";

export default function Perfil() {
  const { DatesUser } = useContext(contextProduct);

  return (
    <div className="containerPerfil">
      {console.log(DatesUser[0])}
      <header>
        <img src={DatesUser[0] ? DatesUser[0].Foto : "Null"} alt="" />
        <h2>{DatesUser[0] ? DatesUser[0].Nombre : "Null"} </h2>
      </header>
      <main>
        <div className="list-group">
          <Lists
            titulo="Correo Electronico"
            value={DatesUser[0] ? DatesUser[0].Correo : "Null"}
          />
          <Lists titulo="Paquete " value="Basico " />
          <Lists titulo="Tiempo Restante" value="21 dias 15 h " />
        </div>
      </main>
    </div>
  );
}
