import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Form from "../Components/Form";
import { contextProduct } from "../Context/ContextProduct";
import { Url } from "../VariablesEntorno";
import Select from "./Select";
const Modal = () => {
  const { ProductId } = useContext(contextProduct);
  const [NombreProduct, setNombreProduct] = useState("");
  const [Cantidad, setCantidad] = useState(0);
  const [Precio, setPrecio] = useState(0);
  const [Descripcion, setDescripcion] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Img, setImg] = useState("");

  const [Marca, setMarca] = useState("");
  useEffect(() => {
    console.log(ProductId.Nombre);
    console.log(ProductId._id);
    setNombreProduct(ProductId.Nombre);
    setCantidad(ProductId.Cantidad);
    setPrecio(ProductId.Precio);
    setDescripcion(ProductId.Descripcion);
    setCategoria(ProductId.Categoria);
    setMarca(ProductId.Marca);
    setImg(ProductId.Img);
  }, [ProductId]);

  const optionCategoria = [
    {
      value: "Ropa",
    },
    {
      value: "Reloj",
    },
    {
      value: "Zapatos",
    },
    {
      value: "Cartera",
    },
    {
      value: "Joyas",
    },
  ];
  const optionMarcas = [
    {
      value: "Adidas",
    },
    {
      value: "Nike",
    },
    {
      value: "G-Shock",
    },
    {
      value: "Brilho",
    },
    {
      value: "Cartier",
    },
  ];

  function changeCategoria(e) {
    setCategoria(e.target.value);
  }
  async function EditProduct() {
    await axios
      .put(Url + "/edit-producto/" + ProductId._id, {
        Nombre: NombreProduct,
        Cantidad: Cantidad,
        Precio: Precio,
        Descripcion: Descripcion,
        Marca: Marca,
        Img: Img,
        Categoria: Categoria,
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Editar Producto
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form className="column  row g-1  needs-validation shadow p-3 mb-5 bg-body rounded">
              <Form
                type="text"
                name="Nombre Producto"
                value={NombreProduct}
                onChange={(e) => setNombreProduct(e.target.value)}
              />
              <Select
                select={Marca}
                options={optionMarcas}
                onChanges={(e) => setMarca(e.target.value)}
              />
              <Form
                type="number"
                name="Cantidad Producto"
                value={Cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Form
                type="number"
                name="Precio"
                value={Precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
              <Form
                type="text"
                name="Descripcion"
                value={Descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />

              <Select
                select={Categoria}
                options={optionCategoria}
                onChanges={changeCategoria}
              />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" onClick={EditProduct} class="btn btn-primary">
              Editar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
