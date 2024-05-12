import { FormEvent, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"




export function useLoginModel() {
  const [username, setUsername] = useState("") 
  const [password, setPassword] = useState("") 
  const [isConnected, setIsConnected] = useState(false) 
  const navigate = useNavigate();
  console.log(isConnected)

  function loginUser(event: FormEvent) {
    event.preventDefault()
    if(isConnected) {
      Cookies.set('user', username)
    } else {
      window.localStorage.setItem("user", username)
    }
    navigate("/panel/all-partners")
  }

  return {username, setUsername, password, setPassword, isConnected, setIsConnected, loginUser}
}