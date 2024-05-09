import React from 'react';
import styles from "./Services.module.css";

const Services = () => {
  const imageUrl = 'https://www.infopico.com/wp-content/uploads/2020/11/la-pampa-1-1.jpg'; 
  const imageUrl2 = 'https://www.argentina.gob.ar/sites/default/files/ceibo-2.jpg';

  return (
    <div name="Árboles Frutales" className={styles.services}>
      <p>
        <b>ÁRBOL NACIONAL <br />ARGENTINO</b></p>

      <p>CALDÉN</p>
      <h3>Prosopis caldenia, el Caldén es una especie del Género Prosopis, autóctona de Argentina, de árboles leguminosos con espinas, de regiones templadas secas. <br />
        Prospera en suelo arenoso y árido y resiste sequía, desarrollando un sistema radicular extremadamente profundo. 
        Su madera es dura, densa y durable. <br /> Su fruto es una legumbre comestible, 
        con mediana concentración de azúcar.</h3>

      <img 
      className={styles.webImage}
      src={imageUrl}
      ></img>

      <p>
        <b>FLOR NACIONAL <br />ARGENTINA</b></p>

      <p>CEIBO</p>
      <h3>El ceibo, también denominado seibo, seíbo o bucaré, es una especie característica de la formación denominada bosques en galería, originaria de América, <br /> 
        especialmente de la Argentina (zona del Litoral), Uruguay (donde también es flor nacional), Brasil y Paraguay. <br /> 
        Crece en las riberas del Paraná y del Río de la Plata, aunque se la puede encontrar también en zonas cercanas a ríos, lagos y pantanos. <br /> 
        Su madera, blanca amarillenta y muy blanda, se utiliza para fabricar artículos de peso reducido. <br />  
        Sus grandes flores de color rojo se utilizan para teñir telas, aunque por su vistosidad cumplen también una función ornamental, <br />  razón por la cual se la encuentra cultivada en paseos, parques y plazas.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl2}
      ></img>

    </div>
  );
};

export default Services;


