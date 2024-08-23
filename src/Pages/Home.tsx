import video1 from "../assets/video/vid2.mp4"
import { FlipWords } from "../components/ui/flip-words"
import { IconQuote } from '@tabler/icons-react';
import { IconArrowDownBar } from '@tabler/icons-react';

function Home() {
  const words = ["Planning", "Estimation", "Valuation", "Interiors", "Exteriors", "Promoting"];
 


  return (
    <div>
      <div className=" font-Poiret tracking-wider" >
        <div className=" absolute top-[45%] left-[30%] text-white text-5xl z-10">We do<FlipWords words={words} className=" text-5xl  font-Monarda text-uniqueYellow"/> in Burdwan.</div>
        <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70]' ></div>
        <div className=" px-[10vw] py-[5vh] w-[90%] bg-uniqueYellow absolute h-[50vh] -bottom-[14.3vh] flex gap-[5vw]">
          <div className="absolute h-[70%] left-[5vw] border border-l border-uniqueBrown"></div>
          <div className="w-[90%]">  
            <p className="  tracking-widest text-uniqueBrown font-bold">Experts Since 1990</p>
            <p className=" mt-[2vh] text-2xl font-bold">SATYAM CONSTRUCTION  is a comprehensive construction management team and general contractor. With over <span className=" leading-loose tracking-wider px-2 py-1 rounded-md bg-uniqueBrown text-white">30 years of experience</span></p>
          </div>
          <div className="absolute h-[70%]  left-[45vw] border border-l border-uniqueBrown"></div>
          <div className="ml-[10vw]">
            <div className=" flex gap-[1vw] ">
              <div className=""><IconQuote stroke={2}/></div>
              <p className=" text-4xl ">Brick by brick, we make it stick.</p>
              
            </div>
            <p className="mt-[2vh] ml-[3vw] font-semibold tracking-wider">“In the construction world, tools are important. But the greatest tool you have is your mind.” <span className=" leading-loose tracking-wider px-2 py-1 rounded-md bg-uniqueBrown text-white ml-[14vw] mt-[2vh]">– Rebecca Barnessin</span> </p>
          </div>
          
        </div>
        <div className="absolute h-[94%] left-[94%] top-[20%] border border-l border-uniqueBrown"></div>
        <div className="absolute text-white right-[0vw] bottom-[19.5vh]"><p className=" -rotate-90 flex items-center gap-[1vw] "> <IconArrowDownBar className=" rotate-90 text-uniqueYellow"/>Scroll Down To Explore</p></div>

        <video src={video1} autoPlay loop muted ></video>
      </div>
      {/* <div ref={targetRef}>
      <motion.div style={{x}} className=" sticky flex gap-1 h-full overflow-hidden">
          <div className=" bg-black h-[20vh] w-[1000vw]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
          <div className=" bg-black h-[20vh] w-[100%]"></div>
      </motion.div>
      </div> */}
    </div>
  )
}

export default Home
