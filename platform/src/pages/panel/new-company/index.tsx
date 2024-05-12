import { useNewCompanyModel } from "./model";
import { NewCompanyView } from "./view";



export function NewCompany() {
  const newPartnerModel = useNewCompanyModel()

  return (
    <NewCompanyView 
      {...newPartnerModel}
    />
  )
}