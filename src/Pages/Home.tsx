import vid from "../assets/video/vid2.mp4"
import { FlipWords } from "../components/ui/flip-words";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { IconQuote } from '@tabler/icons-react';
import { IconArrowDownBar } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import Preloader from "../components/Preloader";
import { useEffect } from "react";
function Home() {
  
  const [isLoading,setIsLoading] = useState(true);


  
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  },[])


  const words = ["Planning", "Estimation", "Valuation", "Interiors", "Exteriors", "Promoting"];
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  // const vid = "https://drive.google.com/file/d/1KY_mMuJAGvf1QD3JnaU_61xLQF8OTqeG/preview";
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_bxh5zsu', 'template_zwrj105', form.current!, {
        publicKey: 'vFMU0Sp9Nc7jdm96k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const notify = () => {
    alert("Form submitted successfully!"); // Basic notification example, you can replace with a toast or other notification.
  };



  return (
    <div>{ isLoading ? (<Preloader/>):(
      <div className="font-Poiret tracking-wider">
      <div  >
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
       
        
        <video className="video" src={vid} autoPlay  loop muted>        
    
        </video>
        
      </div>
      <div className="  relative h-screen tracking-wider">
      <div className="absolute z-20 h-[94%] left-[5vw] border border-l border-uniqueYellow mt-[20vh]"></div>
      <div className=" font-bold text-white text-5xl absolute z-20 capitalize top-[20vh] left-[10vw] mt-[10vh] bg-uniqueBrown px-[2vw] py-[2vh]"><span className=" font-normal text-uniqueYellow text-2xl ">We are</span> Passionate Experts, Driven by Excellence.</div>
      <div className="absolute bg-white px-[5vw] py-[5vh] w-[50vw] h-[50vh] top-[50vh] right-0">
      <div className="absolute z-20 h-[90%] left-[3vw] border border-l border-uniqueBrown"></div>
        <h1 className=" my-[5vh] text-3xl font-bold"> We Don’t Just Build Structures. We Craft Legacies.</h1>
        <p className=" font-bold ">
        Since 1990, SATYAM CONSTRUCTION has been a trusted name in the construction industry, delivering over 30 years of expertise. As a comprehensive construction management team and general contractor, they specialize in building all types of structures, offering services in planning, estimation, valuation, and interior/exterior design.</p>
      </div>
      </div>
      <div className=" relative mt-[30vh] mx-[6vw] mb-[10vh] font-bold flex flex-col items-center font-Poiret">
      <h1 className=' text-3xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default'>
        Quick Enquiry
      </h1>
      <p className=' my-[10vh] text-2xl'>
      SATYAM CONSTRUCTION is committed to "Innovation and Excellence" in every project we undertake. We look forward to discussing how SATYAM CONSTRUCTION can support your construction needs and bring your vision to life.
 
      </p>
      <div className="email">
        <form
          ref={form}
          onSubmit={sendEmail}
          className='letscolab flex flex-col gap-4  rounded-bl-3xl rounded-br-3xl bg-uniqueYellow h-[65vh] justify-center pl-[40vw] pr-[10vw] shadow-md border-black border-2 relative'
        >
          <div className="text absolute left-5 md:left-20 w-[30vw] text-sm md:text-3xl leading-5 md:leading-[7vh]">
            <span className='bg-white p-[0.3rem]'>
              Let's get this conversation started!
            </span> 
            Tell us a bit about yourself and we'll get in touch as soon as we can.
          </div>
          <input 
            type="text" 
            name="from_name" 
            placeholder='Your Name' 
            className=' bg-yellow-500 text-2xl placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh]'
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            name="from_email" 
            placeholder='Your Email' 
            className='bg-yellow-500 text-2xl placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh]'
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name="message" 
            placeholder='Message' 
            className='bg-yellow-500 text-2xl placeholder:text-[#6e3636] h-[20vh] rounded-md px-[2vw] py-[2vh]'
          />
          <button 
            type="submit" 
            className='w-full border-2 px-[2vw] py-[4vh] h-[7vh] flex justify-between items-center rounded-md border-yellow-500 hover:bg-yellow-500 transition-all ease-in-out hover:text-white disabled:hover:bg-transparent disabled:hover:text-black'
            onClick={notify}
            disabled={!name || !email}
          >
            <div className="text-2xl">Submit</div>
            <div className='text-2xl'>
              <FiChevronsRight />
            </div>
          </button>
        </form>
      </div>
      <div className=" relative  my-[10vh] flex flex-col items-center">
      <h1 className='  text-3xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default my-[10vh]'>Customer Support</h1>
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
      <h1 className='  text-3xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default my-[10vh]'>Google Maps</h1>
      <div className='mt-[5vh]'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.505052243271!2d87.855727!3d23.2247016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8492465c7b385%3A0x97ec3993ec1b9bd0!2sSATYAM%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1724657146582!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe></div>
      </div>
    </div>
    </div>
    )}
    
    </div>
  )
}

export default Home
