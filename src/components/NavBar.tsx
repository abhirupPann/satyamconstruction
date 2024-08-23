import { SquigglyUnderline } from "../UI/SquigglyUnderline"
import Headroom from "react-headroom"
import logo from "../assets/logo/satyamconslogo.png"
function NavBar() {
  return (
    
      <Headroom style={{transition: 'all .5s ease-in-out'}} className="z-30 flex items-center w-full font-Fjalla tracking-wider absolute top-[6vh]  bg-transparent">
        <div className="px-[5vw] ">
        <div className=" flex gap-[14vw] items-center w-full">
        <img src={logo} alt="Logo" width={150}/>
        <SquigglyUnderline/>
        <div className=" bg-white px-2 py-2 rounded-md cursor-pointer hover:bg-uniqueYellow hover:text-white transition-all ease-in-out duration-300">Book a call</div>
        </div>
        </div>

      </Headroom>
      
  
  )
}

export default NavBar


