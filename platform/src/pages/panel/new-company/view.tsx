import { Button } from "../../../components/forms/button"
import { Input } from "../../../components/forms/input"
import { Switch } from "../../../components/forms/switch"
import { useNewCompanyModel } from "./model"
import styles from "./new-company.module.css"

export function NewCompanyView({
  companyName, 
  setCompanyName, 
  collaboratorsCount, 
  setCollaboratorsCount,
  collaboratorsIsActive, 
  setCollaboratorsIsActive,
  createNewPartner
}: ReturnType<typeof useNewCompanyModel>) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Nova empresa</h1>
      <form className={styles.form} onSubmit={createNewPartner}>
        <div className={styles.content}>
          <Input id="companyName" label="Nome da empresa" value={companyName} onChange={(event) => setCompanyName(event.target.value)}/>
          <Input id="collaboratorsCount" label="Número de Colaboradores" value={collaboratorsCount} onChange={(event) => setCollaboratorsCount(event.target.value)}/>
          <Switch onChange={() => setCollaboratorsIsActive(state => !state)} value={collaboratorsIsActive}/>
        </div>
        <Button type="submit">
          Criar
        </Button>
      </form>
    </main>
  )
}