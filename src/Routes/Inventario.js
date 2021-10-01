import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import Select from "../Components/Select";
import Tabla from "../Components/Tabla";
import axios from "axios";
import { Url } from "../VariablesEntorno";
import Modal from "../Components/Modal";

const Inventario = () => {
  const [NombreProduct, setNombreProduct] = useState("");
  const [Cantidad, setCantidad] = useState(0);
  const [Precio, setPrecio] = useState(0);
  const [Descripcion, setDescripcion] = useState("");
  const [Img, setImg] = useState();
  const [Categoria, setCategoria] = useState("");
  const [Marca, setMarca] = useState("");

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

  async function CreateProduct(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("Nombre", NombreProduct);
    data.append("Cantidad", Cantidad);
    data.append("Precio", Precio);
    data.append("Descripcion", Descripcion);
    data.append("Img", Img);
    data.append("Marca", Marca);
    data.append("Categoria", Categoria);
    await axios
      .post(Url + "create-product", data)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    window.location.reload();
  }
  function changeCategoria(e) {
    console.log(Categoria);
    setCategoria(e.target.value);
  }
  const Onchange = (e) => {
    setImg(e.target.files[0]);
    console.log(Img);
  };
  return (
    <div className="Container-Inventario ">
      <h2 className="d-flex justify-content-center">Controlador</h2>
      <a
        type="button"
        href="#sectionProducts"
        className="verProducts btn btn-primary"
      >
        Ver Productos en Lista
      </a>
      <section id="formProducts">
        <div className="form-producto d-flex justify-content-center">
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

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Seleccione una Imagen
              </label>
              <input
                name="image"
                id="form-control"
                className="form-control"
                onChange={(e) => Onchange(e)}
                type="file"
              />
            </div>

            <button onClick={CreateProduct} className="btn btn-success">
              Agregar Producto
            </button>
          </form>
        </div>
      </section>
      <section id="sectionProducts">
        <Tabla />
        <a type="button" href="#Form" className="verProducts btn btn-primary">
          Formulario de Productos
        </a>
      </section>
      );
      <Modal />
    </div>
  );
};

export default Inventario;
