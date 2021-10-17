import React from "react";
import Modal from "../Components/Modal";
import Tabla from "../Components/Tabla";

const Estadisticas = () => {
  return (
    <div className="container-estadisticas text-center">
      <header>
        <h1>Tabla de Datos </h1>
      </header>
      <main>
        <section id="sectionProducts">
          <Tabla />
        </section>
        <Modal />
      </main>
    </div>
  );
};

export default Estadisticas;
