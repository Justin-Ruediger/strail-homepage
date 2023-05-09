"use client";
import Gear from "./gear";
import Highlight from "./highlight";
import InitialTransition from "./initial-transition";
import styles from "./style.module.scss";
function UnderConstruction() {
  return (
    <div className={styles.bg + " " + styles.centerchild}>
      <div className={styles.grid_center}>
        <Gear />
        <div className={styles.card}>
          <h1 className={styles.h1}>Coming Soon</h1>
          <p className={styles.p}>
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
export default UnderConstruction;
