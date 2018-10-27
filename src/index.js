import React from "react";
import { render } from "react-dom";

import { getProps } from "./utils";

import Carrusel from "./home/Carrusel";

render(
  <Carrusel {...getProps("#home ul")} />,
  document.querySelector("#home ul")
);
