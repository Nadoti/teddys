import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import styles from "./panel.module.css"
import { NewPartner } from "./new-partner";
import { Header } from "../../components/header";
import { NewCompany } from "./new-company";
import ListPartners from "listPartners/App"
import ListCompany from "listCompany/App"

export function Panel() {

  return (
    <section className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route path="/all-partners" element={<ListPartners />} />
          <Route path="/new-partner" element={<NewPartner />} />
          <Route path="/all-company" element={<ListCompany />} />
          <Route path="/new-company" element={<NewCompany />} />
        </Routes>
      </div>
    </section>
  )
}

