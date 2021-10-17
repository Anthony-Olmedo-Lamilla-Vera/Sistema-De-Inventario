import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { contextProduct } from "../Context/ContextProduct";
import Estadisticas from "../Pages/Estadisticas";
import { Ruta } from "../VariablesEntorno";

const RutaEstadistica = () => {
  const { User } = useContext(contextProduct);

  return (
    <Route
      path={Ruta + "/Estadisticas"}
      exact
      render={() =>
        User ? <Estadisticas /> : <Redirect to={Ruta + "/Login"} />
      }
    />
  );
};

export default RutaEstadistica;
