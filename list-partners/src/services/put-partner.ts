
import { ChangePartnerProps } from "../page/all-partners/types"
import {  apiPartner } from "./api"


export async function putPartner(id: string, form: ChangePartnerProps) {
  const response = await apiPartner.put(`/${id}`, form)
  return response
}