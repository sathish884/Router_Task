import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./Navbar"
import Routers from "./Routers/Routers"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>

    </>
  )
}

export default App
