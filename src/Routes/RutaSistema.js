import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { contextProduct } from "../Context/ContextProduct";
import { Ruta } from "../VariablesEntorno";
import Inventario from "./Inventario";

function RutaSistema() {
  const { User, setUser } = useContext(contextProduct);

  return (
    <Route
      path={Ruta + "/Sistema"}
      exact
      render={() => (User ? <Inventario /> : <Redirect to={Ruta + "/Login"} />)}
    />
  );
}

export default RutaSistema;
