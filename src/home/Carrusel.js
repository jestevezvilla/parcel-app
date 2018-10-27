import React from "react";

import styles from "./styles.css";

const Carrusel = props => {
  const { values } = props;
  return values.map(value => (
    <li className={styles.list} key={value}>
      A{value}
    </li>
  ));
};

export default Carrusel;
