import React from "react";

const icon = (
  <svg
    className="bi bi-x"
    width="1em"
    height="24px"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
    />
    <path
      fillRule="evenodd"
      d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
    />
  </svg>
);

export default function RemoveButton(props) {
  return (
    <button type="button" className="btn btn-outline-danger" onClick={props.onClick}>
      {icon}
    </button>
  );
}
