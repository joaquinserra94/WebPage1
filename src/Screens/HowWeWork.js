import React from "react";
import styles from "./HowWeWork.module.css";


const HowWeWork = () => {
  const imageUrl = 'https://www.argentina.gob.ar/sites/default/files/ceibo-2.jpg'; 
  const imageUrl2 = 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTHgulyTJ43qge_D6-VSbLJfRvLUebzqDNPBePmNtJ5iBgth3TE9vhXPfxmvobQpMR6VZbGKdIbsqwf8L4ilrOxMYh-AuLu0WL1R9F3OyGBUM3dthUl34iv8Tx55P94HNpmxQgf05YAXg'
  const imageUrl3 = 'https://resizer.glanacion.com/resizer/v2/portulaca-3QQWIQNV2JADHK4AKD76N45KTA.jpg?auth=7a0cbc63c1d5d3addbc244ff2d1a1fe4a9f2d67ed2ee2a8adf7bd0955a917864&width=780&height=520&quality=70&smart=true'
  const imageUrl4 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cleome-hassleriana-pink.jpg/1024px-Cleome-hassleriana-pink.jpg'
  const imageUrl5 = 'https://resizer.glanacion.com/resizer/v2/calceolaria-MMYNYECHR5H75DUGK2ZWLKPSDM.jpg?auth=02790dc6454b5b040c8f7289300787099a93d2b0b0c502c66a54dfd67acbee3f&width=780&height=520&quality=70&smart=true'
  
  return (
    <div name="Flores" className={styles.howWeWork}>
      <p>
      <b>FLORES REGIONALES</b></p>

      <p>CEIBO</p>
      <h3>El ceibo, también denominado seibo, seíbo o bucaré, es una especie característica de la formación denominada bosques en galería, originaria de América,<br /> 
          especialmente de la Argentina (zona del Litoral), Uruguay (donde también es flor nacional), Brasil y Paraguay. Crece en las riberas del Paraná y del Río de la Plata,<br /> 
          aunque se la puede encontrar también en zonas cercanas a ríos, lagos y pantanos. <br /> 
          Su madera, blanca amarillenta y muy blanda, se utiliza para fabricar artículos de peso reducido. Sus grandes flores de color rojo se utilizan para teñir telas, <br /> 
          aunque por su vistosidad cumplen también una función ornamental, razón por la cual se la encuentra cultivada en paseos, parques y plazas.</h3>

      <img 
      className={styles.webImage}
      src={imageUrl}
      ></img>

      

      <p>PETUNIA HÍBRIDA</p> 
      <h3>Estas plantas tienen sus secretos escondidos, para lograrlas se cruzaron especies nativas de Petunia como la axillaris e integrifolia.<br /> 
          La rosa y el clavel francamente azules son todavía una entelequia, pero hay aproximaciones, y para lograrlas la ingeniería genética ha utilizado un gen de las petunias.<br /> 
          Algunos ejemplares de petunias híbridas tienen perfume: hay que acercar la nariz a las flores, pero es rico. <br /> 
          Se encuentra más frecuentemente entre las que tienen corolas violetas.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl2}
      ></img>

      <p>PORTULACA GRANDIFLORA</p>
      <h3>En nuestro país se distribuye desde el Norte hasta Chubut, pasando por Buenos Aires. Tiene hojas alargadas, cilíndricas, suculentas, y flores sedosas, <br /> 
          en origen anaranjadas, rojas o violáceas moradas. Florece entre la primavera y el verano. Necesita suelo suelto, con muy buen drenaje <br /> 
          y soporta la falta de agua y variadas temperaturas. Tolera el calor fuerte. Donde los suelos son muy pesados se puede cultivar en macetas, en un sustrato especial.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl3}
      ></img>

      <p>CLEOME HASSLERIANA</p>
      <h3>Es conocida como “spider flower” por el aspecto que le dan los largos estambres de sus flores. En el país se la llama cleome, garcita o mostacilla rosada. <br /> 
          Se distribuye principalmente en la Mesopotamia y hasta Buenos Aires. Es anual, crece rápido y alcanza cerca de un metro de altura.<br /> 
          Las inflorescencias son rosas en distintas tonalidades (incluso las hay casi fucsias) o blancas.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl4}
      ></img>

      <p>CALCEOLARIA</p>
      <h3>La que se vende como planta de interior tiene entre sus ancestros a dos plantas endémicas de la región de la Patagonia: la Calceolaria crenatiflora y la C. corymbosa.<br /> 
          Es una planta bianual que, luego de la floración, se descarta. En el Sur, a las distintas especies de calceolaria se las llama topa topa o zapatito de la Virgen <br /> 
          por la forma de su corola.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl5}
      ></img>
      
    </div>
  );
};

export default HowWeWork;