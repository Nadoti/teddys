import { Button } from "../../../components/forms/button"
import { Input } from "../../../components/forms/input"
import { useNewPartnerModel } from "./model"
import styles from "./new-partner.module.css"

export function NewPartnerView({
  partnerName, 
  setPartnerName, 
  description, 
  setDescription, 
  repositoryGit, 
  setRepositoryGit, 
  urlDoc, 
  setUrlDoc,
  createNewPartner
}: ReturnType<typeof useNewPartnerModel>) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Novo parceiro</h1>
      <form className={styles.form} onSubmit={createNewPartner}>
        <div className={styles.content}>
          <Input id="partnerName" label="Nome do parceiro" value={partnerName} onChange={(event) => setPartnerName(event.target.value)}/>
          <Input id="description" label="Descrição" value={description} onChange={(event) => setDescription(event.target.value)}/>
          <Input id="repositoryGit" label="Repositório git" value={repositoryGit} onChange={(event) => setRepositoryGit(event.target.value)}/>
          <Input id="urlDoc" label="Url" value={urlDoc} onChange={(event) => setUrlDoc(event.target.value)}/>
          
        </div>
        <Button type="submit">
          Criar
        </Button>
      </form>
    </main>
  )
}