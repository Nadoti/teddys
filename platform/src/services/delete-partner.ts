import { apiPartner } from "./api";


export async function deletePartner(id: string) {
  const response = await apiPartner.delete(`/${id}`)
  
  return response.data
}