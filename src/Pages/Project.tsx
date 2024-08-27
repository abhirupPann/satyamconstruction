import vid from "../assets/video/vid4.mp4"
import { useState } from "react";
import Preloader from "../components/Preloader";
import { useEffect } from "react";
const value = [{
  id: 1,
  head: "LILABATI APARTMENT",
  des: "(G+3) at 2006-2007, located at Nilpur,Purba Bardhaman",
  img: "https://www.maman-corp.com/assets/img/process-step-5.jpg"
},{
  id: 2,
  head: "SATYAM ABASON 1",
  des: "(G+4) at 2008-2009,situated at Nilpur ,Purba Bardhaman",
  img: "https://www.maman-corp.com/assets/img/process-step-1.jpg"
},{
  id: 3,
  head: "MONIKUTHI APARTMENT",
  des: "(G+3) at 2009-2010 situated at Intvata road ,Purba Bardhaman",
  img: "https://www.maman-corp.com/assets/img/process-step-2.jpg"
},{
  id: 4,
  head: "Satyam Apartment",
  des: "(G+3) at 2010-2011 situated at Mousumi club,Purba Bardhaman",
  img: "https://www.maman-corp.com/assets/img/process-step-3.jpg"
},{
  id: 5,
  head: "BALESWAR ABASON",
  des: "(G+4) at 2012-13 to 2013-14 situated at Durgapur",
  img: "https://www.maman-corp.com/assets/img/process-step-4.jpg"
},{
  id: 6,
  head: "SABITRI APARTMENT",
  des: "3 Buildings (each G+4) at 2011-2012 to 2020-2021 situated at Ghordourchhati More,Purba Bardhaman",
  img: "https://www.maman-corp.com/assets/img/process-step-6.jpg"
}]
function Project() {
  const [isLoading, setIsLoading]  = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  },[])
  return (
  <div>{
    isLoading ? <Preloader/> : 
    <div className="relative font-Poiret">
      <div className="  relative tracking-wider h-screen">
        <div className=" absolute z-0">
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70] z-20' ></div>
        <video  autoPlay loop muted >
        <source src={vid} type="video/mp4" /></video>
        
        </div>

      <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]"> Transforming Ideas into Reality, One <span className=" font-normal text-uniqueYellow text-2xl ">Project</span> at a Time</div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-20 h-[90%] left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold"> Crafting Excellence, Delivering Results</h1>
        <p className=" font-bold ">Our projects go beyond mere completion; they are a testament to our commitment to quality and innovation. From concept to execution, we bring your vision to life with precision and creativity. Whether it's a small endeavor or a large-scale project, we ensure every detail is meticulously handled, ensuring a seamless experience and outstanding results. Let us take your ideas and turn them into impactful realities.</p>
      </div>
      </div>
      <div className="  relative  mt-[10vh] mb-[37vh] flex flex-col items-center">
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] bg-uniqueBrown px-[2vw] py-[2vh]">Our few projects </div>
        {value.map((val)=>(
                   <div className="relative  mt-[38vh]  flex ">
        
                   <div className="relative flex flex-col  text-5xl items-center">
                     <div className="rounded-full w-[5vw] h-[10vh] flex justify-center items-center bg-uniqueYellow">{val.id} </div>
                     <div className="absolute z-30 h-[50vh] top-[13vh] left-[2.5vw] border border-l border-uniqueBrown"></div>
                   </div>
                   <div className="relative flex flex-col ml-[5vw] "> 
                     <h1 className=" text-5xl w-[30vw] text-uniqueYellow bg-uniqueBrown rounded-md px-2 py-2 ">{val.head}</h1>
                     <p className=" text-xl mt-[2vh] font-bold w-[30vw]">{val.des}</p>
                   </div>
                   <div className=" ml-[2vw] w-[250px] h-[125px]">
         
                     <img src={val.img} alt="" />
                   </div>
                  </div>
        ))}
     
      </div>
    </div>
    }</div>
    
  )
}

export default Project
