import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { AllPartners } from "./all-partners";
import styles from "./panel.module.css"
import { NewPartner } from "./new-partner";
import { Header } from "../../components/header";
import { AllCompany } from "./all-company";
import { NewCompany } from "./new-company";

export function Panel() {

  return (
    <section className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route path="/all-partners" element={<AllPartners />} />
          <Route path="/new-partner" element={<NewPartner />} />
          <Route path="/all-company" element={<AllCompany />} />
          <Route path="/new-company" element={<NewCompany />} />
        </Routes>
      </div>
    </section>
  )
}

