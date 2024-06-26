import { BrowserRouter } from "react-router-dom"
import { AllPartners } from "./page/all-partners"
import { Toaster } from "sonner"


function App() {
  return (
    <>
      <BrowserRouter>
        <AllPartners />
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
