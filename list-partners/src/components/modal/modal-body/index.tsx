import { ReactNode } from "react";
import styles from "./modal-body.module.css"


export function ModalBody({ children }: { children: ReactNode}) {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}