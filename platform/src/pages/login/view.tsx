
import styles from "./login.module.css"
import { Button } from "../../components/forms/button"
import { Logo } from "../../components/logo"
import { Input } from "../../components/forms/input"
import { Checkbox } from "../../components/forms/checkbox"
import { useLoginModel } from "./model"


export function LoginView({
  username, 
  setUsername,
  password, 
  setPassword, 
  isConnected, 
  setIsConnected,
  loginUser
}: ReturnType<typeof useLoginModel>) {

  return (
    <div className={styles.container}>
      <div className={styles["image-bg"]}></div>
      <div className={styles.content}>
        <div className="logo">
          <Logo size="150" color="#6366F1"/>
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form} onSubmit={loginUser}>
            <Input label="Usuário" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <Input label="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Checkbox label="Manter conectado" value={isConnected} onChange={() => setIsConnected(state => !state)}/>
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}