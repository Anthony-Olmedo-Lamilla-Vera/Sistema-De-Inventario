import React from "react";
import Paquete from "../Components/Paquete";

function Beneficios() {
  const Beneficios = {
    basico: [
      "Mejoras en cantidad maxima + 20 Items",
      "Calidad maxima de img (36kb)",
    ],
    Medio: [
      "Mejoras en cantidad maxima + 50 Items",
      "Calidad maxima de img (1mb)",
    ],
    Premiun: [
      "Mejoras en cantidad maxima ilimitados",
      "Calidad maxima de img (5mb)",
    ],
  };
  return (
    <div className="container-beneficios d-flex justify-content-center flex-column overflow-hidden">
      <header className="d-flex justify-content-center">
        <h2>
          Beneficios Usuarios <span>PRIME</span>
        </h2>
      </header>
      <main className=" main-beneficios">
        <h3 className="text-center">Paquetes Mensuales </h3>
        <div className="container-paquetes d-flex justify-content-center ">
          <Paquete
            tipo="Paquete Basico"
            beneficios={Beneficios.basico}
            precio="20.00"
          />
          <Paquete
            tipo="Paquete Medio"
            beneficios={Beneficios.Medio}
            precio="40.00"
          />
          <Paquete
            tipo="Paquete Premiun "
            beneficios={Beneficios.Premiun}
            precio="80.00"
          />
        </div>
        <h5 className="text-center">Elije un Paquete </h5>
      </main>
    </div>
  );
}

export default Beneficios;
