import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { contextProduct } from "../Context/ContextProduct";
import Beneficios from "../Pages/Beneficios";
import Perfil from "../Pages/Perfil";
import { Ruta } from "../VariablesEntorno";

function RutaBeneficios() {
  const { User } = useContext(contextProduct);

  return (
    <Route
      path={Ruta + "/Prime"}
      exact
      render={() => (User ? <Beneficios /> : <Redirect to={Ruta + "/Login"} />)}
    />
  );
}

export default RutaBeneficios;
