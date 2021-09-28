import React, { useContext, useState } from "react";
import ContextProduct, { contextProduct } from "../Context/ContextProduct";

export default function Header() {
  const { ListProducts, setListProducts } = useContext(contextProduct);
  const [keyword, setkeyword] = useState("");

  function SearchProduct() {
    const busqueda = ListProducts.filter((x) => {
      return x.Nombre.toLowerCase().includes(keyword.toLowerCase());
    });
    if (busqueda) {
      setListProducts(busqueda);
    }
  }
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" id="Form">
          <img
            src="https://w1.pngwing.com/pngs/213/89/png-transparent-warehouse-inventory-inventory-management-software-inventory-control-warehouse-management-system-taking-logo-logistics.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Inventario Productos
        </a>
        <form onSubmit={SearchProduct} class="d-flex">
          <input
            value={keyword}
            onChange={(e) => setkeyword(e.target.value)}
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a
            class="btn btn-outline-success"
            onClick={SearchProduct}
            type="submit"
            href="#sectionProducts"
          >
            Search
          </a>
        </form>
      </div>
    </nav>
  );
}
