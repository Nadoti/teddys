import { ChangeCompanyProps } from "../pages/panel/all-company/types"
import { api } from "./api"


export async function putCompany(id: string, form: ChangeCompanyProps) {
  const response = await api.put(`/${id}`, form)
  return response
}