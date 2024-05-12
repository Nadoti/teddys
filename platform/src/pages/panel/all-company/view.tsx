import { useAllCompanyModel } from "./model";
import { Pagination } from "../../../components/pagination";
import { Search } from "../../../components/search";
import styles from "./all-company.module.css";
import { Tooltip } from "../../../components/tooltip";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Modal } from "../../../components/modal";
import { Input } from "../../../components/forms/input";
import { Button } from "../../../components/forms/button";
import { Switch } from "../../../components/forms/switch";
import { Link } from "react-router-dom";


export function AllCompanyView({
  items,
  page,
  searchTable,
  setPage,
  totalPages,
  search,
  setSearch,
  removePartner,
  isModalChangePartnerOpen,
  setIsModalChangePartnerOpen,
  setCompanyName,
  setCollaboratorsCount,
  setCollaboratorsIsActive,
  companyName,
  collaboratorsCount,
  collaboratorsIsActive,
  changePartner,
  setIdCompany
}: ReturnType<typeof useAllCompanyModel>) {

  function isActive(status: boolean) {
    return status ?<span className={styles.statusActive}>Ativado</span> : <span className={styles.statusInactive}>Desativado</span>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Empresas</h1>
      <div className={styles["content-search"]}>
        <Link to="/panel/new-partner" className={styles["link-new-partner"]}>Nova empresa</Link>
        <Search search={searchTable} value={search} setValue={setSearch}/>
      </div>
      <table>
        <thead className={styles.thead}>
          <tr>
            <th>Nome</th>
            <th>Colaboradores</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((company) => (
            <tr key={company.id}>
              <td>{company.companyName}</td>
              <td>{company.collaboratorsCount}</td>
              <td>{isActive(company.isActive)}</td>
              <td>
                <Tooltip text="Editar" onClick={() => {
                  setCollaboratorsCount(company.collaboratorsCount)
                  setCollaboratorsIsActive(company.isActive)
                  setCompanyName(company.companyName)
                  setIdCompany(company.id)
                  setIsModalChangePartnerOpen(true)
                }}>
                  <CiEdit size={20} />
                </Tooltip>
                <Tooltip color="danger" text="Deletar" onClick={() => removePartner(company.id)}>
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
            <Input id="companyName" label="Nome da compania" value={companyName} onChange={(event) => setCompanyName(event.target.value)}/>
            <Input id="collaboratorsCount" label="Número de Colaboradores" value={collaboratorsCount} onChange={(event) => setCollaboratorsCount(event.target.value)}/>
            <Switch onChange={() => setCollaboratorsIsActive((state: boolean) => !state)} value={collaboratorsIsActive}/>
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