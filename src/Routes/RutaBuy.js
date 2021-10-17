import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { contextProduct } from "../Context/ContextProduct";
import Beneficios from "../Pages/Beneficios";
import BuyPlan from "../Pages/BuyPlan";
import { Ruta } from "../VariablesEntorno";

function RutaBuy() {
  const { User } = useContext(contextProduct);

  return (
    <Route
      path={Ruta + "/Buy/Plan/:plan"}
      exact
      render={() => (User ? <BuyPlan /> : <Redirect to={Ruta + "/Login"} />)}
    />
  );
}

export default RutaBuy;
