import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import Routers from "./Routers/Routers"
import Courses from "./Components/Courses"


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
