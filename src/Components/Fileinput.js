import React, { useEffect, useState } from "react";

const Fileinput = () => {
  const [Value, setValue] = useState("");

  const Onchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Seleccione una Imagen
      </label>
      <input
        id="form-control"
        className="form-control"
        value={Value}
        onChange={Onchange}
        type="file"
        id="formFile"
      />
    </div>
  );
};

export default Fileinput;
