import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PartnersProps } from "./types";
import { toast } from "sonner";
import { getPartners } from "../../../services/get-partner";
import { deletePartner } from "../../../services/delete-partner";
import { putPartner } from "../../../services/put-partner";



export function useAllPartnersModel() {
  const [idPartner, setIdPartner] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [description, setDescription] = useState("");
  const [repositoryGit, setRepositoryGit] = useState("");
  const [urlDoc, setUrlDoc] = useState("");
  
  const [partners, setPartners] = useState<PartnersProps[]>([]);
  const [isModalChangePartnerOpen, setIsModalChangePartnerOpen] = useState(false)

  const [search,setSearch] = useState("");

  const [params] = useSearchParams();
  const currentPage = params.get("page")

  const [page, setPage] = useState(currentPage ? currentPage : "1");
  const rowsPerPage = 8;
  const totalRows = partners.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)
  

  const items = useMemo(() => {
    const start = (Number(page) - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return partners.slice(start, end);
  }, [page, partners]);

  async function getAllPartnersSearch(searchParams?: string) {
    let partners = await getPartners()
    if(searchParams) {
      partners = partners.filter(itens => itens.name.toLowerCase().includes(search.toLowerCase()))
    }
    setPartners(partners);
  }
  
  useEffect(() => {
    async function getAllPartners() {
      const allPartners = await getPartners()
      setPartners(allPartners)
    }
    getAllPartners()
  }, []);

  async function searchTable(e: FormEvent) {
    e.preventDefault()
    await getAllPartnersSearch(search)
  }

  async function removePartner(id: string) {
    await deletePartner(id)
    toast.success("Parceiro excluido com sucesso!")
    await getAllPartnersSearch()
  }

  async function changePartner() {
    const response = await putPartner(idPartner, {
      name: partnerName,
      description: description,
      repositoryGit: repositoryGit,
      urlDoc: urlDoc
    })
    if(response.status === 200 || response.status === 201) {
      toast.success("Parceiro editado com sucesso!")
      await getAllPartnersSearch()
      setIsModalChangePartnerOpen(false)
    }
  }

  return {setIdPartner, searchTable, description, setDescription, partnerName, setPartnerName, items, totalPages, page, setPage, search, setSearch, repositoryGit, setRepositoryGit, urlDoc, setUrlDoc, removePartner, changePartner, isModalChangePartnerOpen,setIsModalChangePartnerOpen}
}