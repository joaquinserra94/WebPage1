import React, { useState, useEffect } from "react";
import styles from "./Benefits.module.css";

const Benefits = () => {
  const [count, setCount] = useState(0); // State variable to store visit count

  // Fetch initial visit count from local storage (optional)
  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  // Update visit count on component mount and store in local storage
  useEffect(() => {
    setCount(count + 1);
    localStorage.setItem("visitCount", count);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        Visitas a página ({count})
      </h2>
    </div>
  );
};

export default Benefits;