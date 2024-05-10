import React, { useState, useEffect } from "react";
import styles from "./Benefits.module.css";

const Benefits = () => {
  const [count, setCount] = useState(0); 

  
  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

 
  useEffect(() => {
    setCount(count + 1);
    localStorage.setItem("visitCount", count);
  }, []); 

  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        Visitas a página ({count})
      </h2>
    </div>
  );
};

export default Benefits;