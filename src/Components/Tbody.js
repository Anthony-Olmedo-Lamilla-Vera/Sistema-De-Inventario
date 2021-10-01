import axios from "axios";
import React, { useContext, useEffect } from "react";
import { contextProduct } from "../Context/ContextProduct";
import { Url } from "../VariablesEntorno";

function Tbody(props) {
  const { ProductId, setProductId } = useContext(contextProduct);

  async function EliminarItem(id) {
    console.log(id);
    await axios
      .delete(Url + "/delete-Products/" + id)
      .then((eliminate) => {
        console.log(eliminate);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  }
  async function getItem(id) {
    let listProduct = [];
    await axios
      .get(Url + "/get-producto/" + id)
      .then((result) => {
        listProduct.push(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
    setProductId(listProduct[0]);
  }

  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.cantidad}</td>
        <td>{props.nombreProduct}</td>
        <td>{props.marca}</td>
        <td>{props.categoria}</td>
        <td>{props.descripcion}</td>
        <td>$ {props.precio}</td>
        <td>
          <img
            lazy="loading"
            src={props.img}
            class="img-fluid img-thumbnail avatar"
          />
        </td>
        <td>
          <button
            type="button"
            onClick={() => EliminarItem(props.id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => getItem(props.id)}
          >
            Editar
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Tbody;
