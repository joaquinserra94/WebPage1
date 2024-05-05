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
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          MI ARGENTINA
        </Link>
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