import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ContextProduct, { contextProduct } from "../Context/ContextProduct";
import { Url } from "../VariablesEntorno";
import Tbody from "./Tbody";
const Tabla = (props) => {
  const { ListProducts, setListProducts } = useContext(contextProduct);

  useEffect(() => {
    GetProducts();
  }, []);

  async function GetProducts() {
    let listProduct = [];
    await axios
      .get(Url + "/get-Products")
      .then((result) => {
        listProduct.push(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
    setListProducts(listProduct[0]);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id - Producto </th>
          <th scope="col">Cantidad </th>
          <th scope="col">Nombre Producto</th>
          <th scope="col">Marca </th>
          <th scope="col">Categoria</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
          <th scope="col">Image </th>
        </tr>
      </thead>
      {ListProducts
        ? ListProducts.map((x) => {
            return (
              <Tbody
                key={x._id}
                nombreProduct={x.Nombre}
                marca={x.Marca}
                cantidad={x.Cantidad}
                precio={x.Precio}
                id={x._id}
                categoria={x.Categoria}
                descripcion={x.Descripcion}
                img={x.Img}
              />
            );
          })
        : ""}
    </table>
  );
};

export default Tabla;
