import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { postNewPartner } from "../../../services/post-new-partner";



export function useNewPartnerModel() {
  const [partnerName, setPartnerName] = useState("");
  const [description, setDescription] = useState("");
  const [repositoryGit, setRepositoryGit] = useState("");
  const [urlDoc, setUrlDoc] = useState("");
  const navigate = useNavigate();

  async function createNewPartner(event: FormEvent) {
    event.preventDefault();
    
    const response = await postNewPartner({
      name: partnerName,
      description: description,
      repositoryGit: repositoryGit,
      urlDoc: urlDoc,
    })
    if(response.status === 200 || response.status === 201) {
      toast.success("Parceiro criado com sucesso!")
      navigate("/panel/all-partners")
    }
    
  }

  return {partnerName, setPartnerName, description, setDescription, createNewPartner, repositoryGit, setRepositoryGit, urlDoc, setUrlDoc}
}