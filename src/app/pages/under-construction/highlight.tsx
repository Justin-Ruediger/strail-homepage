import { Children } from "react";
import styles from "./highlight.module.scss";
function Highlight({ children }: { children: React.ReactNode }) {
  return <span className={styles.highlight}>{children}</span>;
}
export default Highlight;
