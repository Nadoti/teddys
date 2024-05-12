
import { useAllPartnersModel } from "./model";
import { AllPartnersView } from "./view";



export function AllPartners() {
  const allPartnersModel = useAllPartnersModel()

  return (
    <AllPartnersView 
      {...allPartnersModel}
    />
  )

  
}
