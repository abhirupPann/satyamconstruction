import { SquigglyUnderline } from "../UI/SquigglyUnderline"
import Headroom from "react-headroom"
import logo from "../assets/logo/satyamconslogo.png"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
function NavBar() {

    //-------Fetching Scroll Position For GlassMorphism Effect------ 
    const [scrollPosition, setScrollposition] = useState(0);
    const handleScroll = ()=>{
       setScrollposition(window.scrollY);
    }
    useEffect(()=>{
      window.addEventListener("scroll", handleScroll)},[]);
  return (
    
      <Headroom style={{transition: 'all .5s ease-in-out'}} className={`z-40 flex items-center w-full font-Fjalla tracking-wider absolute top-[6vh]  bg-transparent `}>
        <div className={`px-[5vw] ${scrollPosition===0 ? "bg-transparent": "backdrop-blur-3xl bg-black/50"}`}>
        <div className=" flex gap-[14vw] items-center w-full">
        <img src={logo} alt="Logo" width={150}/>
        <SquigglyUnderline/>
        <NavLink to="/bookacall" ><div className=" bg-white px-2 py-2 rounded-md cursor-pointer hover:bg-uniqueYellow hover:text-white transition-all ease-in-out duration-300">Book a call</div></NavLink>
        </div>
        </div>

      </Headroom>
      
  
  )
}

export default NavBar


