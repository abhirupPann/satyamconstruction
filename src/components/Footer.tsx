
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className=" font-Poiret font-bold tracking-wider">
        <div className='px-[10vw] relative py-[10vh] bg-uniqueYellow h-auto w-full flex justify-between font-spaceGrotesk rounded-t-xl border-t-2 border-black overflow-y-hidden'>
        <div className='contactus flex flex-col gap-16 cursor-default text-[0.7rem] sm:text-[1rem]'>
         <h1 className=' font-Monarda text-base sm:text-2xl font-medium underline underline-offset-[1vh] sm:underline-offset-[2vh] decoration-black text-uniqueBrown cursor-default'>Contact Us</h1>
         <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'><FaLocationDot/>SH 8, Jagat Berh, Barabalidanga, Bardhaman, West Bengal 713103</li>
            <li className='flex items-center gap-2'><FaPhone/>9434469236/ 7908201181/ 7001577900</li>
            <li className='flex items-center gap-2'><MdEmail/>satyaminfrastructure4962@gmail.com</li>
         </ul>
         <div className='flex gap-5 text-sm sm:text-2xl'>
           <FaInstagram className=' cursor-pointer'/>
           <FaFacebook className=' cursor-pointer'/>
           <MdEmail className=' cursor-pointer'/>
         </div>
      </div>
      <div className="quicklinks flex flex-col gap-16 cursor-default text-[0.7rem] sm:text-[1rem]">
      <h1 className=' font-Monarda  text-base sm:text-2xl font-medium underline underline-offset-[1vh] sm:underline-offset-[2vh] decoration-black text-uniqueBrown cursor-default'>Quick Links</h1>
         <ul className='flex flex-col gap-3'>
            <Link to="/"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Home</li></Link>
            <Link to="/solutions"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Services</li></Link>
            <Link to="/process"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Process</li></Link>
            <Link to="/projects"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Projects</li></Link>
            <Link to="/aboutus"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>About Us</li></Link>
            <Link to="/bookacall"><li className='flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-8'>Book a Call</li></Link>
         </ul>
      </div>
      <div className="services  flex-col gap-16 cursor-default hidden sm:block">
      <h1 className=' font-Monarda  text-2xl font-medium underline underline-offset-[2vh] decoration-black text-uniqueBrown cursor-default mb-[10vh]'>Our Services</h1>
         <ul className='flex flex-col gap-3'>
                                      
            <li className='flex items-center gap-2'>Construct any type of structure</li>
            <li className='flex items-center gap-2'>Plan, Estimate and Valuation </li>
            <li className='flex items-center gap-2'>Interior and Exterior design</li>
            <li className='flex items-center gap-2'>Promoting of High storied building</li>
            
         </ul>
      </div>
        </div>
      <div className="h-[8vh] w-full text-sm sm:text-xl bg-yellow-600 flex items-center gap-3  justify-center font-spaceGrotesk cursor-default"><FaRegCopyright /> <span className=' hidden sm:block'>2024 Satyam Construction.</span>All rights reserved. Website by <a href="https://abhirup-pan-portfolio.vercel.app/" className='hover:underline inline'>Abhirup</a></div>
    </div>
    
  )
}
