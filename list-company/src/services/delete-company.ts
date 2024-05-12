import { api } from "./api";


export async function deleteCompany(id: string) {
  const response = await api.delete(`/${id}`)
  
  return response.data
}