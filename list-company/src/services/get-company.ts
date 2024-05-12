
import { CompanyProps } from "../page/all-company/types";
import { api } from "./api";



export async function getCompany() {
  const response = await api.get("");
  const data = await response.data as CompanyProps[];

  return data
}