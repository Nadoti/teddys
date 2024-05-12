import { ReactNode } from "react";
import styles from "./modal-root.module.css"




export function ModalRoot({ children }: { children: ReactNode}) {

  return (
    <section className={styles.container}>
      <div className={`${styles.content} animations`}>
        {children}
      </div>
    </section>
  )
}
