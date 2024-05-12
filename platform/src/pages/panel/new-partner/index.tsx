import { useNewPartnerModel } from "./model";
import { NewPartnerView } from "./view";



export function NewPartner() {
  const newPartnerModel = useNewPartnerModel()

  return (
    <NewPartnerView 
      {...newPartnerModel}
    />
  )
}