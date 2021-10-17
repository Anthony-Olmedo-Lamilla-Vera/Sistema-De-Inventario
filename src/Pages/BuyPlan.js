import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Paquete from "../Components/Paquete";
import { contextProduct } from "../Context/ContextProduct";

function BuyPlan(props) {
  const { plan } = useParams();
  return (
    <div className="text-center">
      <header className="mb-1 header-pago">
        <h2>Compra de Planes </h2>
      </header>
      <main></main>
    </div>
  );
}

export default BuyPlan;
