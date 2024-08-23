import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Preloader from "./components/Preloader"
import Home from "./Pages/Home"
import Solutions from "./Pages/Solutions"
import Process from "./Pages/Process"
import Project from "./Pages/Project"
import AboutUs from "./Pages/AboutUs"
import Footer from "./components/Footer"

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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
