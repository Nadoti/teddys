import { ReactNode } from "react";
import styles from "./modal-header.module.css"


export function ModalHeader({ children }: { children: ReactNode}) {

  return (
    <header>
      <h3 className={styles.title}>
        {children}
      </h3>
    </header>
  )
}