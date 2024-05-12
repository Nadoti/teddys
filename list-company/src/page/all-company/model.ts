import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CompanyProps } from "./types";
import { toast } from "sonner";
import { getCompany } from "../../services/get-company";
import { deleteCompany } from "../../services/delete-company";
import { putCompany } from "../../services/put-company";



export function useAllCompanyModel() {
  const [idCompany, setIdCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [collaboratorsCount, setCollaboratorsCount] = useState("");
  const [collaboratorsIsActive, setCollaboratorsIsActive] = useState(false);
  
  const [company, setCompany] = useState<CompanyProps[]>([]);
  const [isModalChangePartnerOpen, setIsModalChangePartnerOpen] = useState(false)

  const [search,setSearch] = useState("");

  const [params] = useSearchParams();
  const currentPage = params.get("page")

  const [page, setPage] = useState(currentPage ? currentPage : "1");
  const rowsPerPage = 8;
  const totalRows = company.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)
  

  const items = useMemo(() => {
    const start = (Number(page) - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return company.slice(start, end);
  }, [page, company]);

  async function getAllPartnersSearch(searchParams?: string) {
    let company = await getCompany()
    if(searchParams) {
      company = company.filter(itens => itens.companyName.toLowerCase().includes(search.toLowerCase()))
    }
    setCompany(company);
  }
  
  useEffect(() => {
    async function getAllPartners() {
      const allPartners = await getCompany()
      setCompany(allPartners)
    }
    getAllPartners()
  }, []);

  async function searchTable(e: FormEvent) {
    e.preventDefault()
    await getAllPartnersSearch(search)
  }

  async function removePartner(id: string) {
    await deleteCompany(id)
    toast.success("Empresa excluido com sucesso!")
    await getAllPartnersSearch()
  }

  async function changePartner() {
    const response = await putCompany(idCompany, {
      companyName: companyName,
      collaboratorsCount: collaboratorsCount,
      isActive: collaboratorsIsActive
    })
    if(response.status === 200 || response.status === 201) {
      toast.success("Empresa editado com sucesso!")
      await getAllPartnersSearch()
      setIsModalChangePartnerOpen(false)
    }
  }

  return {searchTable, items, totalPages, page, setPage, search, setSearch, removePartner, changePartner, isModalChangePartnerOpen,setIsModalChangePartnerOpen, companyName, setCompanyName, collaboratorsCount, setCollaboratorsCount, collaboratorsIsActive, setCollaboratorsIsActive, setIdCompany}
}