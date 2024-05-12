import {BrowserRouter, Routes, Route  } from "react-router-dom"
import { Panel } from "../pages/panel"
import { Login } from "../pages/login"



export function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel/*" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  )
}