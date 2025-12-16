
// import Button from "../shared/ui/Button"
import { Suspense } from "react"

import { AppRoutes } from "./provider"
import "./styles/index.scss"

function App() {
  

  return(
  <Suspense fallback={<></>}>
    <AppRoutes/>
  </Suspense> 
  )
    
}

export default App
