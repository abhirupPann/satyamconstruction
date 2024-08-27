
import vid from "../assets/video/vid1.mp4"
const value = [{
  id: 1,
  head: "Goals and vision",
  des: "Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.",
  img: "https://www.maman-corp.com/assets/img/process-step-5.jpg"
},{
  id: 2,
  head: "Proposal",
  des: "To quote your project, we scope it and send it out to bid. With our industry expertise, we can value engineer elements of the proposal to fit both your vision and budget.",
  img: "https://www.maman-corp.com/assets/img/process-step-1.jpg"
},{
  id: 3,
  head: "Planning and logistics",
  des: "Next, we create a plan for the work with timelines and schedules. Because we’re highly experienced in working in occupied spaces, we’ll ensure everything is business as usual for you.",
  img: "https://www.maman-corp.com/assets/img/process-step-2.jpg"
},{
  id: 4,
  head: "Project kickoff",
  des: "We attend to all necessary documents and permits in preconstruction meetings so your work proceeds smoothly. We also place long lead-time and submittal orders.",
  img: "https://www.maman-corp.com/assets/img/process-step-3.jpg"
},{
  id: 5,
  head: "Building begins",
  des: "When our tradesmen arrive, everything is in place, from temporary partitions to plans and permits. Our attentive team handles ongoing on-site adjustments and maintains a clean and safe work site. Weekly construction meetings keep things proceeding smoothly.",
  img: "https://www.maman-corp.com/assets/img/process-step-4.jpg"
},{
  id: 6,
  head: "Project completion",
  des: "From creating a punch list to walking the entire project, we fine-tune every detail so your site is in tip-top shape. You receive a closeout book with as-builts, warranties, and operating manuals.",
  img: "https://www.maman-corp.com/assets/img/process-step-6.jpg"
}]
function Process() {
  return (
    <div className=" relative font-Poiret">
      
      <div className="  tracking-wider relative h-screen">
        <div className=" absolute">
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70]' ></div>
        <video src={vid} autoPlay loop muted className=" "></video>
        
        </div>
        <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]">Success Comes From <span className=" font-normal text-uniqueYellow text-2xl ">Process</span></div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-30 h-[90%]  left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold">Success is achieved through a structured process.</h1>
        <p className=" font-bold ">A structured and meticulous approach guarantees that creativity is brought to life. Therefore, we handle every aspect and detail, from the initial call to the final walk-through.</p>
      </div>
      </div>
      <div className="  relative  mt-[10vh] mb-[38vh] flex flex-col items-center">
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] bg-uniqueBrown px-[2vw] py-[2vh]">Our process  </div>
        {value.map((val)=>(
                   <div className="relative  mt-[42vh]  flex ">
        
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
  )
}

export default Process
