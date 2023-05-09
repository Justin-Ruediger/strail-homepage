import Image from "next/image";
import styles from "./page.module.css";
import UnderConstruction from "./pages/under-construction";
export default function Home() {
  return (
    <main className={styles.main}>
      <UnderConstruction />
    </main>
  );
}
