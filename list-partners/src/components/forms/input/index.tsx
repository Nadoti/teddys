import { InputHTMLAttributes } from "react";
import styles from "./input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, ...props}: InputProps) {

  return (
    <div className={styles.container}>
      <input 
        className={styles.input}
        placeholder={label}
        {...props}
      />
      <label className={styles.label} htmlFor={props.id }>{label}</label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}