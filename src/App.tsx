import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./Pages/Home"
import Solutions from "./Pages/Solutions"
import Process from "./Pages/Process"
import Project from "./Pages/Project"
import AboutUs from "./Pages/AboutUs"
import Footer from "./components/Footer"
import Bookacall from "./Pages/Bookacall"

function App() {
  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/process" element={<Process/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="bookacall" element={<Bookacall/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
