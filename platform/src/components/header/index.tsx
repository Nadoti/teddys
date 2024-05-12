import { useEffect, useState } from "react"
import styles from "./header.module.css"
import Cookies from "js-cookie"


export function Header() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const getUsername = window.localStorage.getItem("user") ? window.localStorage.getItem("user") : Cookies.get("user")
    if(getUsername) setUsername(getUsername)
  }, [])

  return (
    <header className={styles.container}>
      <span className={styles.title}>{username}</span>
    </header>
  )
}