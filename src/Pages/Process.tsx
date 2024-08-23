import video3 from "../assets/video/vid3.mp4"
import img1 from "../assets/img1.jpeg"
function Process() {
  return (
    <div className=" relative font-Poiret">
      
      <div className="  tracking-wider relative h-screen">
        <div className=" absolute">
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70]' ></div>
        <video src={video3} autoPlay loop muted className=" "></video>
        
        </div>
        <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]">Success Comes From <span className=" font-normal text-uniqueYellow text-2xl ">Process</span></div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-30 h-[90%]  left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold">Success is achieved through a structured process.</h1>
        <p className=" font-bold ">A structured and meticulous approach guarantees that creativity is brought to life. Therefore, we handle every aspect and detail, from the initial call to the final walk-through.</p>
      </div>
      </div>
      <div className="  relative  mt-[10vh] mb-[30vh] flex flex-col items-center">
        <div className="relative  mt-[30vh]  flex ">
        
          <div className="relative flex flex-col  text-5xl items-center">
            <div className="rounded-full w-[5vw] h-[10vh] flex justify-center items-center bg-uniqueYellow"> 1 </div>
            <div className="absolute z-30 h-[50vh] top-[13vh] left-[2.5vw] border border-l border-uniqueBrown"></div>
          </div>
          <div className="relative flex flex-col ml-[5vw] "> 
            <h1 className=" text-5xl text-uniqueYellow bg-uniqueBrown rounded-md px-2 py-2 ">Tis is heading</h1>
            <p className=" text-3xl mt-[2vh] w-[10vw]">fsadfsadfs fasdf afdsf fasdf fasdfasdkkkfafds fasddfsd</p>
          </div>
          <div className=" ml-[2vw] w-[250px] h-[125px]">

            <img src={img1} alt="" />
          </div>
         </div>
        <div className="relative mt-[30vh] flex ">
        
        <div className="relative flex flex-col  text-5xl items-center">
          <div className="rounded-full w-[5vw] h-[10vh] flex justify-center items-center bg-uniqueYellow"> 1 </div>
          <div className="absolute z-30 h-[50vh] top-[13vh] left-[2.5vw] border border-l border-uniqueBrown"></div>
        </div>
        <div className="relative flex flex-col ml-[5vw] "> 
          <h1 className=" text-5xl text-uniqueYellow bg-uniqueBrown rounded-md px-2 py-2 ">Tis is heading</h1>
          <p className=" text-3xl mt-[2vh] w-[10vw]">fsadfsadfs fasdf afdsf fasdf fasdfasdkkkfafds fasddfsd</p>
        </div>
        <div className=" ml-[2vw]">
            <img src={img1} alt="" width={250}/>
          </div>
       </div>
     
      </div>

    </div>
  )
}

export default Process
