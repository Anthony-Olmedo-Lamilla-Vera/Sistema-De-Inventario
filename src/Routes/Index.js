import axios from "axios";
import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import { contextProduct } from "../Context/ContextProduct";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Ruta, Url } from "../VariablesEntorno";
import RutaBeneficios from "./RutaBeneficios";
import RutaEstadistica from "./RutaEstadistica";
import RutaPerfil from "./RutaPerfil";
import RutaSistema from "./RutaSistema";
import RutaBuy from "./RutaBuy";

function Index() {
  const { User, setUser, setDatesUser } = useContext(contextProduct);

  const Token = localStorage.getItem("Token");
  useEffect(() => {
    if (!Token) {
      setUser(null);
    }
  }, [User]);
  useEffect(() => {
    if (Token) {
      getProfile();
    }
  }, []);
  async function getProfile() {
    await axios
      .get(Url + "Perfil/user", {
        headers: {
          TokenUser: JSON.parse(User).token,
        },
      })
      .then((x) => {
        const dates = [];
        dates.push(x.data.ress);
        setDatesUser(dates);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <Header />
      <RutaEstadistica />
      <RutaSistema />
      <RutaPerfil />
      <RutaBeneficios />
      <RutaBuy />

      <Route path={Ruta + "/Home/"} exact>
        <Suspense fallback={<Spinner />}>
          <Home />
        </Suspense>
      </Route>
      <Route path={Ruta + "/Login"}>
        <Login />
      </Route>
      <Route path={Ruta + "/Register"}>
        <Register />
      </Route>
    </BrowserRouter>
  );
}

export default Index;
