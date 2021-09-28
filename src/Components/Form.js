import React from "react";

const Form = (props) => {
  return (
    <div class="col-md-0 ">
      <label for="validationCustom01" class="form-label">
        {props.name}
      </label>
      <input
        type={props.type}
        class="form-control"
        id="validationCustom01"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <div class="valid-feedback">Looks good!</div>
    </div>
  );
};

export default Form;
