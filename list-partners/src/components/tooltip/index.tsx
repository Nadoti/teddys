
import { ReactNode } from 'react';
import styles from './tooltip.module.css';

interface TooltipProps {
  color?: "danger";
  text: string;
  children: ReactNode
  onClick: () => void;
}

export function Tooltip({ color, text, onClick, children }: TooltipProps) {
  

  return (
    <div 
      className={styles["tooltip-container"]} 
    >
      <div className={`${styles.tooltip} ${color === "danger" ? `${styles.danger}` : ""}`}>{text}</div>

      <button onClick={onClick} className={`${styles.button} ${color === "danger" ? `${styles["button-danger"]}` : ""}`}>
        {children}
      </button>
    </div>
  );
}

