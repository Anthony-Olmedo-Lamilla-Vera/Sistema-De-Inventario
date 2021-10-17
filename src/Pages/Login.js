import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Form from "../Components/Form";
import { Ruta, Url } from "../VariablesEntorno";
import { useHistory } from "react-router";
import { contextProduct } from "../Context/ContextProduct";

function Login() {
  const history = useHistory();

  const [MsgErr, setMsgErr] = useState(null);
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const { User, setUser } = useContext(contextProduct);

  async function PostLogin(e) {
    e.preventDefault();
    await axios
      .post(Url + "login/user", {
        Correo: Correo,
        Contraseña: Contraseña,
      })
      .then((x) => {
        console.log("logeado");
        setMsgErr(false);
        const Dates = [];
        Dates.push(x.data);
        window.localStorage.setItem("Token", JSON.stringify(Dates[0]));
        window.location.reload();
      })
      .catch((err) => {
        setMsgErr(true);
        console.log(err);
        console.log("err");
      });
  }

  return (
    <div className="form-producto d-flex justify-content-center">
      <form className="column  row g-1  needs-validation shadow p-3 mb-5 bg-body rounded">
        <Form
          type="email"
          name="Correo Electronico"
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <Form
          type="password"
          name="Contraseña"
          value={Contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit" onClick={PostLogin} className="btn btn-success">
          Login
        </button>
        {MsgErr === true && (
          <div className="alert alert-danger" role="alert">
            Correo Electronico o Contraseña Incorrecta
          </div>
        )}
        {MsgErr === false && (
          <div className="alert alert-success" role="alert">
            Logeado Correctamente
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
