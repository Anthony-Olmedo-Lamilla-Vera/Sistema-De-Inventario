import React from "react";

function Select(props) {
  return (
    <div>
      <label htmlFor="validationCustom01" className="form-label">
        Categoria
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={props.select}
        onChange={props.onChanges}
      >
        {props.options.map((x, key) => {
          return (
            <option key={key} value={x.value}>
              {x.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
