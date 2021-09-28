import React, { useState } from "react";

export const contextProduct = React.createContext();
const ContextProduct = ({ children }) => {
  const [ListProducts, setListProducts] = useState([]);
  const [Id, setId] = useState(0);
  const [ProductId, setProductId] = useState([]);

  return (
    <contextProduct.Provider
      value={{
        ListProducts,
        setListProducts,
        Id,
        setId,
        ProductId,
        setProductId,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ContextProduct;
