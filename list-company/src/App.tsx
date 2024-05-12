import { BrowserRouter } from "react-router-dom"
import { AllCompany } from "./page/all-company"
import {Toaster} from "sonner"

function App() {

  return (
    <>
      <BrowserRouter>
        <AllCompany />
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
