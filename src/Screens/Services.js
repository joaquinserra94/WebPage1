import React from 'react';
import styles from "./Services.module.css";

const Services = () => {
  const imageUrl = 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kd5Zvu-bD4aQqzH9V_tMEw.jpeg'; 

  return (
    <div name="Services" className={styles.services}>
      <p>
        <b>Arboles frutales <br />caracteristicos de la región</b></p>

      <p>CHILTO</p>
      <p5>El chilto es una especie originaria de América Central y del Sur que fue
domesticada y cultivada por las poblaciones nativas antes de la introducción
de otros cultivos por la colonia. Actualmente es producido a nivel local, en
huertas y quintas, por comunidades que lo incluyen en su alimentación y
como un hábito heredado de sus antepasados</p5>

      <img 
      className={styles.webImage}
      src={imageUrl}
      ></img>
    </div>
  );
};

export default Services;


