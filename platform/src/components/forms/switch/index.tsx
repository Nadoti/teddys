import { InputHTMLAttributes } from 'react';
import styles from './switch.module.css';

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value">{
  value: boolean
}

export function Switch({ value, onChange,...props }: SwitchProps)  {

  return (
    <div className={styles["switch-container"]}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          {...props}
        />
        <span className={`${styles.slider}`}>
        </span>
      </label>
        <p className={styles.text}>{value ? "Ativado" : "Desativado"}</p>
    </div>
  );
}