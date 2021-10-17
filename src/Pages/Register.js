import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "../Components/Form";
import { Ruta, Url } from "../VariablesEntorno";

function Register() {
  const [Imagen, setImg] = useState();
  const [Correo, setCorreo] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [MsgErr, setMsgErr] = useState(null);
  const history = useHistory();
  const PostRegister = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Nombre", Nombre);
    data.append("Correo", Correo);
    data.append("Contraseña", Contraseña);
    data.append("Imagen", Imagen);
    await axios
      .post(Url + "Register/user", data)
      .then(() => {
        setMsgErr(false);
        setContraseña("");
        setCorreo("");
        setNombre("");
        setImg();
      })
      .catch((err) => {
        console.log(err);
        setMsgErr(true);
      });
  };
  return (
    <div className="form-producto d-flex justify-content-center">
      <form className="column  row g-1  needs-validation shadow p-3 mb-5 bg-body rounded">
        <Form
          placeholder="ej : Anthocraxx"
          type="text"
          name="Nombre"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Form
          placeholder="ej : Anth@gmail.com"
          type="email"
          name="Correo Electronico"
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <Form
          placeholder="debe contener mas de 8 digitos "
          type="password"
          name="Contraseña"
          value={Contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Seleccione una Imagen
          </label>
          <input
            name="image"
            id="form-control"
            onChange={(e) => setImg(e.target.files[0])}
            className="form-control"
            type="file"
          />
        </div>
        <button
          type="submit"
          onClick={PostRegister}
          className="btn btn-success"
        >
          Registrarse
        </button>
        {MsgErr === null && ""}
        {MsgErr === true && (
          <div className="alert alert-danger" role="alert">
            Error : Campos Incorrectos
          </div>
        )}
        {MsgErr === false && (
          <div className="alert alert-success" role="alert">
            Registrado Correctamente , Logeate
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
