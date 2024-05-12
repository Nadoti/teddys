
import { NewPartnerProps } from "../pages/panel/new-partner/types";
import { apiPartner } from "./api";



export async function postNewPartner(form: NewPartnerProps) {
  const response = await apiPartner.post("", form) 

  return response
}