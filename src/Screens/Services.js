import React from 'react';
import styles from "./Services.module.css";

const Services = () => {
  const imageUrl = 'https://www.diarioeltiempo.com.ar/contenido/noticias/original/procesadas/1582899506_2_2018-07-calden-2.jpg'; 
  const imageUrl2 = 'https://miro.medium.com/v2/resize:fit:1400/1*kd5Zvu-bD4aQqzH9V_tMEw.jpeg'
  const imageUrl3 = 'https://resizer.glanacion.com/resizer/v2/el-algarrobo-es-un-arbol-nativo-corpulento-y-alto-FPIKAEUXNVH2ZLKRCMC2UEB7FE.jpg?auth=960c6dac310d8544743759216765ff235a6a1efc23dc1023e7884de5c26238f2&width=780&height=585&quality=70&smart=true'
  const imageUrl4 = 'https://resizer.glanacion.com/resizer/v2/calafate-un-arbusto-perenne-que-crece-en-el-sur-6TJRCUVXG5B6BO4NFW7DBCYNOY.jpg?auth=e31ce3ac9b29c42a1a43037112ee242867e6462e7f3d0b16b967dea7f829d6b6&width=780&height=520&quality=70&smart=true'
  const imageUrl5 = 'https://resizer.glanacion.com/resizer/v2/nogal-criollo-un-arbol-nativo-con-multiples-3QLANFDSNBAPVAYHUT4PSHFUVU.jpg?auth=63a43bb46d371896aedb9368aca8976e258d289bb76d0d7a0313e518b18f546d&width=780&height=585&quality=70&smart=true'
  return (
    <div name="Árboles Frutales" className={styles.services}>
      <p>
        <b>ÁRBOLES FRUTALES</b></p>

      <p>CALDÉN</p>
      <h3>Prosopis caldenia, el Caldén es una especie del Género Prosopis, autóctona de Argentina, de árboles leguminosos con espinas, de regiones templadas secas. <br />
        Prospera en suelo arenoso y árido y resiste sequía, desarrollando un sistema radicular extremadamente profundo. 
        Su madera es dura, densa y durable. <br /> Su fruto es una legumbre comestible, 
        con mediana concentración de azúcar.</h3>

      <img 
      className={styles.webImage}
      src={imageUrl}
      ></img>

      

      <p>CHILTO O TOMATE DE ÁRBOL</p>
      <h3>El chilto, también llamado tomate de árbol, es una especie originaria de América del Sur, domesticada y cultivada por las comunidades indígenas. <br /> 
          El fruto es muy apreciado por sus colores, su textura y su sabor agridulce, único y refrescante. Países como Colombia, Ecuador y Nueva Zelanda <br /> 
          ya poseen producciones comerciales, marcando tendencia en el mercado mundial. En la Argentina, existe una notable diversidad de colores y tamaños, <br /> 
          y se lo puede localizar en la región de las Yungas, comprendida por las provincias de Jujuy, Salta, Tucumán y Catamarca. <br /> 
          Las comunidades campesinas son las que más promueven el desarrollo de este fruto, por su gran arraigo cultural.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl2}
      ></img>

      <p>PITANGA O ÑANGAPIRÍ</p>
      <h3>La pitanga o ñangapirí, también llamada arrayán, es un arbusto perenne que crece principalmente en la ecorregión Bosque Atlántico.<br /> 
          Es un árbol pequeño, de no más de 7 m de alto, cuyo tronco tiene un diámetro de 20 a 30 cm. Posee hojas simples, opuestas, y se deshoja tardíamente. <br /> 
          Antes de que las hojas se caigan, toman un color rojizo. Sus flores son pequeñas y blancas. El fruto es una baya globosa deprimida, roja u oscuramente púrpura, <br /> 
          que cuando madura, queda bien brillante. Da de una a varias semillas subglobosas, de color castaño claro y duras, de unos 8 mm de diámetro. <br /> 
          Florece de agosto a septiembre y el período de fructificación es entre octubre y noviembre.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl3}
      ></img>

      <p>CALAFATE</p>
      <h3>El calafate crece en la ecorregión Bosque Andino Patagónico. En la Argentina, lo podemos encontrar en las provincias de Chubut, Neuquén, Río Negro, <br /> 
          Santa Cruz y Tierra del Fuego. Botánicamente se lo puede describir como un arbusto espinoso, de 1,50 m de alto. <br /> 
          Sus ramas jóvenes son de color rojo oscuro y las viejas son grises, ásperas y agrietadas. <br /> 
          Posee espinas, sus hojas están agrupadas sobre tallitos cortos y sus flores son amarillas, solitarias. Su fruto es una baya globosa, <br /> 
          de 8 a 10 mm de diámetro, negruzca, recubierta por una cera blanquecina. La época de floración es en la primavera y la de cosecha, en verano.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl4}
      ></img>

      <p>NOGAL CRIOLLO</p>
      <h3>El nogal criollo es un árbol perenne y nativo, que pertenece a la familia Juglandaceae. En lugares propicios para su crecimiento, <br /> 
          puede alcanzar unos 30 m de altura y su tronco puede llegar a medir 1,10 m de diámetro. Este árbol posee flores con sexo separado, <br /> 
          pero en un mismo pie. Su época de floración es entre agosto y octubre, y su período de fructificación, en otoño. <br /> 
          En la Argentina, se distribuye geográficamente en las provincias de Salta, Tucumán, Catamarca y Jujuy; en Sudamérica, en Bolivia y Brasil. <br /> 
          Es un árbol con muchos usos: maderero, ornamental, alimenticio, aromático, medicinal y tintóreo.</h3>

        <img 
      className={styles.webImage}
      src={imageUrl5}
      ></img>

    </div>
  );
};

export default Services;


