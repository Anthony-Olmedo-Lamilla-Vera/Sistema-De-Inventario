import React, { useState } from "react";

export const contextProduct = React.createContext();
const ContextProduct = ({ children }) => {
  const [ListProducts, setListProducts] = useState([]);
  const [Id, setId] = useState(0);
  const [ProductId, setProductId] = useState([]);
  const [User, setUser] = useState(localStorage.getItem("Token"));
  const [DatesUser, setDatesUser] = useState([]);
  const [Plan, setPlan] = useState([]);

  return (
    <contextProduct.Provider
      value={{
        ListProducts,
        setListProducts,
        Id,
        setId,
        ProductId,
        setProductId,
        User,
        setUser,
        DatesUser,
        setDatesUser,
        Plan,
        setPlan,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ContextProduct;
