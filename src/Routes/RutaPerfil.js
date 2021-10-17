import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { contextProduct } from "../Context/ContextProduct";
import Perfil from "../Pages/Perfil";
import { Ruta } from "../VariablesEntorno";

function RutaPerfil() {
  const { User } = useContext(contextProduct);

  return (
    <Route
      path={Ruta + "/Perfil"}
      exact
      render={() => (User ? <Perfil /> : <Redirect to={Ruta + "/Login"} />)}
    />
  );
}

export default RutaPerfil;
