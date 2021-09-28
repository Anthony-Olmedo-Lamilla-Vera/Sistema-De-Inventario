import React, { useEffect, useState } from "react";

const Fileinput = () => {
  const [Value, setValue] = useState("");

  const Onchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div class="mb-3">
      <label for="formFile" class="form-label">
        Seleccione una Imagen
      </label>
      <input
        id="form-control"
        class="form-control"
        value={Value}
        onChange={Onchange}
        type="file"
        id="formFile"
      />
    </div>
  );
};

export default Fileinput;
