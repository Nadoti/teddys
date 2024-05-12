
import { PartnersProps } from "../pages/panel/all-partners/types";
import { apiPartner } from "./api";



export async function getPartners() {
  const response = await apiPartner.get("");
  const data = await response.data as PartnersProps[];

  return data
}