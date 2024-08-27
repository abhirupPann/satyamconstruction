import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./Pages/Home"
import Solutions from "./Pages/Solutions"
import Process from "./Pages/Process"
import Project from "./Pages/Project"
import AboutUs from "./Pages/AboutUs"
import Footer from "./components/Footer"
import Bookacall from "./Pages/Bookacall"
import Preloader from "./components/Preloader"
import { useEffect, useState } from "react"


function App() {
  const [isLoading, setIsLoading]  = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

  },[])
  
  return (
    <div>
      {isLoading? (<Preloader/>) :
            (<div>
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
            </div> )}
    </div>
  )
}

export default App
