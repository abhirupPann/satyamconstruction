import logo from "../assets/logo/satyamconslogotransparent.png"
import CountUp from 'react-countup';
function Preloader() {
  return (
    <div className=' flex flex-col justify-between items-center h-screen w-full bg-white py-10 px-auto'>
      <img src={logo} alt="" width={200} className="mt-[22vh]"/>
      <div className="text-gray-400 flex flex-col items-center justify-center\">
      <CountUp end={100} duration={5} className="font-bold"/>
      <p className=" font-thin  text-gray-500">Quality is our standard</p>
      </div>

    </div>
  )
}

export default Preloader
