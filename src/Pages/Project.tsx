import video4 from "../assets/video/vid4.mp4"
function Project() {
  return (
    <div className="relative h-screen">
      <div className=" font-Poiret tracking-wider">
        <div className=" absolute z-0">
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70] z-20' ></div>
        <video src={video4} autoPlay loop muted className=" "></video>
        
        </div>

      <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]"><span className=" font-normal text-uniqueYellow text-2xl ">We provide</span> complete construction Solutions</div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-20 h-[90%] left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold"> We don't just build spaces. We create environments.</h1>
        <p className=" font-bold ">We offer customized construction services and capabilities for commercial and industrial clients to help them refresh and reimagine their spaces. Whether yours is new construction, an addition, or a renovation, we’ll bring our expertise and innovation to the challenge.</p>
      </div>
      </div>
    </div>
  )
}

export default Project
