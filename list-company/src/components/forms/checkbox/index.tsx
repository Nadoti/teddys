import { InputHTMLAttributes } from "react"
import styles from "./checkbox.module.css"

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value">{
  value: boolean;
  label: string
}

export function Checkbox({ label, value, onChange, ...props }: CheckboxProps) {

  return (
    <label className={styles.label}>
      <span className={styles.checkbox}>
        <input 
          className={styles.input} 
          type="checkbox"
          checked={value}
          onChange={onChange}
          {...props}
        />
      </span>
      {label}
    </label>
  )
}