import { ReactNode } from "react";
import styles from "./modal-action.module.css"


export function ModalAction({ children }: { children: ReactNode}) {

  return (
    <span className={styles.container}>
      {children}
    </span>
  )
}