import { FormEvent, useState } from "react";
import { postNewCompany } from "../../../services/post-new-company";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";



export function useNewCompanyModel() {
  const [companyName, setCompanyName] = useState("");
  const [collaboratorsCount, setCollaboratorsCount] = useState("");
  const [collaboratorsIsActive, setCollaboratorsIsActive] = useState(false);
  const navigate = useNavigate();

  async function createNewPartner(event: FormEvent) {
    event.preventDefault();
    
    const response = await postNewCompany({
      companyName: companyName,
      collaboratorsCount: collaboratorsCount,
      isActive: collaboratorsIsActive
    })
    if(response.status === 200 || response.status === 201) {
      toast.success("Parceiro criado com sucesso!")
      navigate("/panel/all-company")
    }
    
  }

  return {companyName, setCompanyName, collaboratorsCount, setCollaboratorsCount,collaboratorsIsActive, setCollaboratorsIsActive, createNewPartner}
}