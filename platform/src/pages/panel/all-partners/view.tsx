import { useAllPartnersModel } from "./model";
import { Pagination } from "../../../components/pagination";
import { Search } from "../../../components/search";
import styles from "./all-partners.module.css";
import { Tooltip } from "../../../components/tooltip";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Modal } from "../../../components/modal";
import { Input } from "../../../components/forms/input";
import { Button } from "../../../components/forms/button";
import { Link } from "react-router-dom";


export function AllPartnersView({
  setIdPartner, 
  searchTable, 
  description, 
  setDescription, 
  partnerName, 
  setPartnerName, 
  items, 
  totalPages, 
  page, 
  setPage, 
  search, 
  setSearch, 
  repositoryGit, 
  setRepositoryGit, 
  urlDoc, 
  setUrlDoc, 
  removePartner, 
  changePartner, 
  isModalChangePartnerOpen,
  setIsModalChangePartnerOpen
}: ReturnType<typeof useAllPartnersModel>) {

  return (
    <main className={styles.container}>
      <div className={styles["content-search"]}>
        <Link to="/panel/new-partner" className={styles["link-new-partner"]}>Novo Parceiro</Link>
        <Search search={searchTable} value={search} setValue={setSearch}/>
      </div>
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Repositório git</th>
            <th>Url</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((partner) => (
            <tr key={partner.id}>
              <td>{partner.name}</td>
              <td>{partner.description}</td>
              <td>{partner.repositoryGit}</td>
              <td>{partner.urlDoc}</td>
              <td>
                <Tooltip text="Editar" onClick={() => {
                  setPartnerName(partner.name)
                  setDescription(partner.description)
                  setRepositoryGit(partner.repositoryGit)
                  setUrlDoc(partner.urlDoc)
                  setIdPartner(partner.id)
                  setIsModalChangePartnerOpen(true)
                }}>
                  <CiEdit size={20} />
                </Tooltip>
                <Tooltip color="danger" text="Deletar" onClick={() => removePartner(partner.id)}>
                  <RiDeleteBin6Line size={20} />
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className={styles.pagination}>
              <Pagination 
                page={page}
                setPage={setPage}
                pageNumbersToShow={5}
                totalPages={totalPages}
              />
            </td>
          </tr>
        </tfoot>
      </table>

      {isModalChangePartnerOpen && (
        <Modal.Root>
          <Modal.Header>Editar parceiro</Modal.Header>
          <Modal.Body>
            <Input id="partnerName" label="Nome do parceiro" value={partnerName} onChange={(event) => setPartnerName(event.target.value)}/>
            <Input id="description" label="Descrição" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <Input id="repositoryGit" label="Repositório git" value={repositoryGit} onChange={(event) => setRepositoryGit(event.target.value)}/>
            <Input id="urlDoc" label="Url" value={urlDoc} onChange={(event) => setUrlDoc(event.target.value)}/>
          </Modal.Body>
          <Modal.Action>
            <Button onClick={() => changePartner()}>Editar</Button>
            <Button color="danger" onClick={() => setIsModalChangePartnerOpen(false)}>Cancelar</Button>
          </Modal.Action>
        </Modal.Root>
      )}
    </main>
  );
}