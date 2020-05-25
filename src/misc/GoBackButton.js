import React from "react";

export default function GoBackButton({ outlined = true }) {
  const btnClass = outlined ? 'btn-outline-primary' : 'btn-primary';
  return (<a href="#/" className={`btn ${btnClass}`}>go back</a>);
}