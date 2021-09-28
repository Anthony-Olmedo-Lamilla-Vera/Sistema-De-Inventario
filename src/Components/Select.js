import React from "react";

function Select(props) {
  return (
    <div>
      <label for="validationCustom01" class="form-label">
        Categoria
      </label>
      <select
        class="form-select"
        aria-label="Default select example"
        value={props.select}
        onChange={props.onChanges}
      >
        {props.options.map((x) => {
          return <option value={x.value}>{x.value}</option>;
        })}
      </select>
    </div>
  );
}

export default Select;
