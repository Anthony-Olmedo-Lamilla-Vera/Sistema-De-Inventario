import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import ContextProduct from "../Context/ContextProduct";
import { Ruta } from "../VariablesEntorno";
import Inventario from "./Inventario";

function Index() {
  return (
    <BrowserRouter>
      <ContextProduct value>
        <Header />
        <Switch>
          <Route path={Ruta + "/"}>
            <Inventario />
          </Route>
        </Switch>
      </ContextProduct>
    </BrowserRouter>
  );
}

export default Index;
