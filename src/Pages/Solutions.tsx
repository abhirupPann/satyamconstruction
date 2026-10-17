import vid from "../assets/video/vid3.mp4"

const value = [{
  id: 1,
  head: "Plan, Estimate and Valuation.",
  des: "Plan, Estimate, and Valuation in construction involve creating a blueprint, projecting costs for materials and labor, and assessing market value based on location and quality to ensure a well-organized and financially sound project.",
  img: "https://www.maman-corp.com/assets/img/process-step-2.jpg",
},{
  id: 2,
  head: "Interior and Exterior Design.",
  des: "In interior and exterior design, Plan details the layout and design for both spaces, including aesthetics and materials. Estimate calculates the costs for implementing the design, including materials and labor. Valuation assesses the property's market value based on design quality, appeal, and overall enhancement.",
  img: "https://www.maman-corp.com/assets/img/process-step-3.jpg"
},{
  id: 3,
  head: "Promoting of High storied buildings.",
  des: "Promoting a high-storied building involves showcasing its design, views, amenities, and location through high-quality visuals and compelling descriptions. Targeted online and real estate marketing can boost visibility and attract interest.",
  img: "https://www.maman-corp.com/assets/img/process-step-6.jpg"
}]
function Solutions() {
  return (
    <div>
     
       <div className="relative font-Poiret">
       <div className="  relative h-screen tracking-wider ">
         <div className=" absolute z-0">
         <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70] z-20' ></div>
         <video src={vid} loop muted preload="none" playsInline></video>
         
         </div>
 
       <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
       <div className=" font-bold text-white text-2xl sm:text-3xl lg:text-5xl absolute z-20 capitalize top-[20vh] left-5 md:left-[10vw] mt-6 md:mt-[10vh] bg-uniqueBrown px-4 md:px-[2vw] py-3 md:py-[2vh]"> Expert Solutions, Exceptional <span className=" font-normal text-uniqueYellow text-2xl ">Service</span></div>
       <div className="absolute bg-white px-5 sm:px-[5vw] py-5 sm:py-[5vh] w-full md:w-[50vw] min-h-[50vh] h-auto top-[50vh] right-0">
       <div className="absolute z-20 h-[90%] left-[3vw] border border-l border-uniqueBrown"></div>
         <h1 className=" my-[5vh] text-3xl font-bold"> We don't just build spaces. We create environments.</h1>
         <p className=" font-bold ">We offer customized construction services and capabilities for commercial and industrial clients to help them refresh and reimagine their spaces. Whether yours is new construction, an addition, or a renovation, we’ll bring our expertise and innovation to the challenge.</p>
       </div>
       </div>
       <div className="  relative  mt-[10vh] mb-[37vh] flex flex-col items-center">
       <div className=" font-bold text-white text-2xl sm:text-3xl lg:text-5xl absolute z-20 capitalize top-[20vh] left-5 md:left-[10vw] bg-uniqueBrown px-4 md:px-[2vw] py-3 md:py-[2vh]">Our services  </div>
         {value.map((val)=>(
                    <div className="relative  mt-[38vh]  flex ">
         
                    <div className="relative flex flex-col  text-5xl items-center">
                      <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex justify-center items-center bg-uniqueYellow">{val.id} </div>
                      <div className="absolute z-30 h-[50vh] top-[13vh] left-[2.5vw] border border-l border-uniqueBrown"></div>
                    </div>
                    <div className="relative flex flex-col ml-[5vw] "> 
                      <h1 className="text-2xl sm:text-3xl lg:text-5xl w-full md:w-[30vw] text-uniqueYellow bg-uniqueBrown rounded-md px-2 py-2">{val.head}</h1>
                      <p className="text-base sm:text-lg lg:text-xl mt-4 font-bold w-full md:w-[30vw]">{val.des}</p>
                    </div>
                    <div className=" ml-[2vw] w-[250px] h-[125px]">
          
                      <img src={val.img} alt="" />
                    </div>
                   </div>
         ))}
      
       </div>
   
     </div>
   
    </div>
  )
}

export default Solutions
