import vid from "../assets/video/vid1.mp4"
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
const value = [{
  id: 1,
  head: "SANDIP KUMAR GHOSH",
  role: "Owner and Founder of Company , Supervisor, Designer",
  des: "Civil (B.TECH),  I.O.V Valuer, Enlisted L.B.S-1 of BURDWAN MUNICIPALITY and BURDWAN DEVELOPMENT AUTHORITY",
  img: "https://www.maman-corp.com/assets/img/process-step-2.jpg",
},{
  id: 2,
  head: "ANUBHAB KARPHA",
  role: "Site Engineer ,Planner, Designer",
  des: "B.E. (CIVIL), ENLISTED LBS of BURDWAN MUNICIPALITY and BURDWAN DEVELOPMENT AUTHORITY (BDA)",
  img: "https://www.maman-corp.com/assets/img/process-step-3.jpg"
},{
  id: 3,
  head: "SOURAV KUMAR GHOSH",
  role:"SITE ENGINEER ,PLANNER, DESIGNER",
  des: "B.E.(CIVIL), MBA(H.R.),A.M.(I.E.I), ENLISTED STRUCTURAL ENGINEER AT BURDWAN DEVELOPMENT AUTHORITY (BDA) and ENLISTED LICENSE BUILDING SURVAYOR OF BURDWAN MUNICIPALITY",
  img: "https://www.maman-corp.com/assets/img/process-step-6.jpg"
}]
function AboutUs() {
  return (
    <div className=" relative font-Poiret ">
      <div className="  relative h-screen tracking-wider">
        <div className=" absolute z-0">
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70] z-20' ></div>
        <video src={vid} autoPlay loop muted className=" "></video>
        
        </div>

      <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]"><span className=" font-normal text-uniqueYellow text-2xl ">We are</span> Passionate Experts, Driven by Excellence.</div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-20 h-[90%] left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold"> We Don’t Just Build Structures. We Craft Legacies.</h1>
        <p className=" font-bold ">
        Since 1990, SATYAM CONSTRUCTION has been a trusted name in the construction industry, delivering over 30 years of expertise. As a comprehensive construction management team and general contractor, they specialize in building all types of structures, offering services in planning, estimation, valuation, and interior/exterior design.</p>
      </div>
      </div>
      <div className="  relative  mt-[10vh] mb-[38vh] flex flex-col items-center">
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] bg-uniqueBrown px-[2vw] py-[2vh]">Engage Personnels</div>
        {value.map((val)=>(
                   <div className="relative  mt-[42vh]  flex ">
        
                   <div className="relative flex flex-col  text-5xl items-center">
                     <div className="rounded-full w-[5vw] h-[10vh] flex justify-center items-center bg-uniqueYellow">{val.id} </div>
                     <div className="absolute z-30 h-[50vh] top-[13vh] left-[2.5vw] border border-l border-uniqueBrown"></div>
                   </div>
                   <div className="relative flex flex-col ml-[5vw] "> 
                     <h1 className=" text-5xl w-[30vw] text-uniqueYellow bg-uniqueBrown rounded-md px-2 py-2 ">{val.head}</h1>
                     <p className=" text-xl mt-[2vh] font-black bg-uniqueYellow rounded-md px-[0.5vw] py-[0.5vh] w-[30vw]">{val.role}</p>
                     <p className=" text-xl mt-[2vh] font-bold w-[30vw] tracking-wider"><span className=" underline">Designations</span>- {val.des}</p>
                   </div>
                   <div className=" ml-[2vw] w-[250px] h-[125px]">
         
                     <img src={val.img} alt="" />
                   </div>
                  </div>
        ))}
     
      </div>
      <div className=" relative  mt-[10vh] mb-[38vh] flex flex-col items-center">
      <h1 className='  text-2xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default my-[10vh]'>Customer Support</h1>
      <div className='flex flex-col md:flex-row gap-5 '>
      <div className='flex flex-col justify-center gap-4 items-center   bg-uniqueYellow border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <IconPhone className='text-base sm:text-3xl'/>
      
        <h1 className='text-base sm:text-3xl'>Phone</h1>
        <p className='bg-white px-4 font-bold w-full text-center'>Phone No- 9434469236/ 7908201181/ 7001577900</p>
    

      </div>
      <div className=' flex flex-col justify-center gap-4 items-center   bg-uniqueYellow border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <IconMail className='text-base sm:text-3xl'/>
    
        <h1 className='text-base sm:text-3xl'>Email</h1>
        <p className='bg-white px-4 font-bold w-full text-center'>Email Us- satyaminfrastructure4962@gmail.com</p>
   

      </div>
      <div className=' flex flex-col justify-center gap-4  items-center   bg-uniqueYellow border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
        <IconMapPin className='text-base sm:text-3xl'/>
        <h1 className='text-base sm:text-3xl'>Address</h1>
        <p className='bg-white px-4 font-bold w-full text-center'>SH 8, Jagat Berh, Barabalidanga, Bardhaman, West Bengal 713103</p>
      </div>
      </div>
      <h1 className='  text-2xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default my-[10vh]'>Google Maps</h1>
      <div className='my-[5vh]'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.505052243271!2d87.855727!3d23.2247016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8492465c7b385%3A0x97ec3993ec1b9bd0!2sSATYAM%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1724657146582!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe></div>
      </div>
      
    </div>
  )
}

export default AboutUs
