import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Conoce nuestra <br />
          <b>FLORA</b>
        </p>
        <p>
          Explora nuestra <br />
          <b>ARGENTINA</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <a
          href="https://www.argentina.gob.ar/interior/ambiente/audiovisual/arboles"
          className={styles.callToAction}
          target="_blank"
          rel="noopener noreferrer"
          smooth
          duration={500}
          
          
        >
          MI ARGENTINA
        </a>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
          
          
        >
          CONTACTO
        </Link>
      </div>
    </div>
  );
};

export default Home;