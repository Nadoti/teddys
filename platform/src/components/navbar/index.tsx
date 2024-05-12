import { NavLink, useNavigate } from "react-router-dom"
import styles from "./navbar.module.css"
import { Logo } from "../logo"
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineAddBusiness } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import Cookies from "js-cookie";

export function Navbar() {
  const navigate = useNavigate()
  return (
    <aside className={styles.container}>
      <Logo size="50" color="#6366F1" />
      <ul className={styles.listNav}>
        <li className={styles.nav}>
          <NavLink 
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            to="all-partners"
          >
            <PiUsersThree />
          </NavLink>
        </li>
        <li className={styles.nav}>
        <NavLink 
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            to="new-partner"
          >
            <AiOutlineUsergroupAdd />
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink 
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            to="all-company"
          >
            <IoBusinessOutline />
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink 
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            to="new-company"
          >
            <MdOutlineAddBusiness />
          </NavLink>
        </li>
        <button className={styles.logOut} onClick={() => {
          navigate("/")
          window.localStorage.clear()
          Cookies.remove("user")
        }}><TbLogout2 /></button>
      </ul>
    </aside>
  )
}