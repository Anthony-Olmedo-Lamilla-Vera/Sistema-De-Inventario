import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextProduct } from "../Context/ContextProduct";
import { Ruta } from "../VariablesEntorno";

export default function Header() {
  const { ListProducts, setListProducts, DatesUser, User } =
    useContext(contextProduct);
  const [keyword, setkeyword] = useState("");
  function RemoveItem() {
    localStorage.removeItem("Token");
    window.location.reload();
  }
  function SearchProduct() {
    const busqueda = ListProducts.filter((x) => {
      return x.Nombre.toLowerCase().includes(keyword.toLowerCase());
    });
    if (busqueda) {
      setListProducts(busqueda);
    }
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-around">
        <a className="navbar-brand" id="Form">
          <img
            src="https://w1.pngwing.com/pngs/213/89/png-transparent-warehouse-inventory-inventory-management-software-inventory-control-warehouse-management-system-taking-logo-logistics.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Inventario Productos
        </a>
        {User !== null && (
          <>
            <Link className=" btn btn-primary" to={Ruta + "/Sistema"}>
              Sistema Inventario
            </Link>

            <form onSubmit={SearchProduct} className="d-flex">
              <input
                value={keyword}
                onChange={(e) => setkeyword(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a
                className="btn btn-outline-success"
                onClick={SearchProduct}
                type="submit"
                href="#sectionProducts"
              >
                Search
              </a>
            </form>
          </>
        )}
        {User !== null && (
          <div className="d-flex ">
            <Link to={Ruta + "/Prime"} className="btn-plan">
              Plan de Beneficios <i class="key bx bx-key"></i>
            </Link>

            <div class="dropdown drop">
              <button
                class="btn btn-secondary dropdown-toggle buttondesplegable"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={DatesUser[0] ? DatesUser[0].Foto : ""}
                  alt=""
                  className="img-perfil"
                />
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <Link
                    to={Ruta + "/Perfil"}
                    class="dropdown-item "
                    type="button"
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to={Ruta + "/Estadisticas"}
                    class="dropdown-item"
                    type="button"
                  >
                    Tablas de Datos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={RemoveItem}
                    class="dropdown-item bg-danger text-light"
                    type="button"
                  >
                    Cerrar Sesion
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {User === null && (
          <div className="butones">
            <Link
              to={Ruta + "/Login"}
              className="btn btn-outline-success me-2"
              type="button"
            >
              Login
            </Link>
            <Link
              to={Ruta + "/Register"}
              className="btn btn-outline-success me-2"
              type="button"
            >
              Registrate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
