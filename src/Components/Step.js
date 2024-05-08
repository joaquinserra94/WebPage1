import React from "react";
import styles from "./Step.module.css";

const Step = ({ text, step }) => { //aqui pasamos los parametros para que nos ponga un numero y un step y que vaya en orden
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <p className={styles.stepNumber}>{step}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.stepBorder}></div>
    </div>
  );
};

export default Step;