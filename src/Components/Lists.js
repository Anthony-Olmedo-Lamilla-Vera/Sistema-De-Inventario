import React from "react";

const Lists = (props) => {
  return (
    <a
      href="#"
      class="list-group-item list-group-item-action "
      aria-current="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{props.titulo}</h5>
      </div>
      <p class="mb-1">{props.value}</p>
    </a>
  );
};

export default Lists;
