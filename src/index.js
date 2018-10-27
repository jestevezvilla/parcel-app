import React from "react";
import { render } from "react-dom";
const CARRUSEL = props => {
  const { values } = props;
  return values.map(value => <li key={value}>{value}</li>);
};

render(
  <CARRUSEL
    {...JSON.parse(document.querySelector("#home ul").dataset.props)}
  />,
  document.querySelector("#home ul")
);
