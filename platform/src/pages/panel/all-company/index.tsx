
import { useAllCompanyModel } from "./model";
import { AllCompanyView } from "./view";



export function AllCompany() {
  const allPartnersModel = useAllCompanyModel()

  return (
    <AllCompanyView 
      {...allPartnersModel}
    />
  )

  
}
