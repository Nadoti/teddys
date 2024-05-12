import { NewCompanyProps } from "../pages/panel/new-company/types";
import { api } from "./api";



export async function postNewCompany(form: NewCompanyProps) {
  const response = await api.post("", form) 

  return response
}