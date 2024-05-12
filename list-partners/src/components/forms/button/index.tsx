import styles from "./button.module.css"
type ButtonProps = React.ComponentProps<'button'> & {
  color?: "danger"
}

export function Button({children, color, ...props}: ButtonProps) {

  return (
    <button {...props} className={`${styles.btn} ${color === "danger" && styles.danger}`}>
      {children}
    </button>
  )
}