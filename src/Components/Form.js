import React from "react";

const Form = (props) => {
  return (
    <div className="col-md-0 ">
      <label htmlFor="validationCustom01" className="form-label">
        {props.name}
      </label>
      <input
        type={props.type}
        className="form-control"
        id="validationCustom01"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default Form;
