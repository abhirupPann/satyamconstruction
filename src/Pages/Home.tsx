import vid from "../assets/video/vid2.mp4";
import img from "../assets/satyamConstructionprimary.png";
import { FlipWords } from "../components/ui/flip-words";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { IconQuote } from '@tabler/icons-react';
import { IconArrowDownBar } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';

function Home() {



  const words = ["Planning", "Estimation", "Valuation", "Interiors", "Exteriors", "Promoting"];
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  // const vid = "https://drive.google.com/file/d/1KY_mMuJAGvf1QD3JnaU_61xLQF8OTqeG/preview";
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    try {
      await emailjs.sendForm("service_bxh5zsu", "template_zwrj105", form.current, {
        publicKey: "vFMU0Sp9Nc7jdm96k",
      });
      toast.success("Your enquiry was sent successfully.");
      form.current.reset();
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      toast.error("We couldn't send your enquiry. Please try again or contact us by phone.");
    } finally {
      setIsSending(false);
    }
  };



  return (
    <div>
      <div className="font-Poiret tracking-wider">
        <div className="relative min-h-[640px] h-screen overflow-hidden">
          <div className="absolute left-1/2 top-[40%] z-10 w-[92%] -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white sm:text-4xl lg:left-[30%] lg:w-auto lg:translate-x-0 lg:text-left lg:text-5xl">We do<FlipWords words={words} className=" text-5xl  font-Monarda text-uniqueYellow" /> in Burdwan.</div>
          <div className=' class w-[100%] absolute h-[114vh] bg-black/[.70]' ></div>
          <div className="px-6 py-6 sm:px-[10vw] sm:py-[5vh] w-full bg-uniqueYellow absolute min-h-[50vh] h-auto -bottom-[14.3vh] flex flex-col md:flex-row gap-6 md:gap-[2vw]">
            <div className="absolute h-[70%] left-[5vw] border border-l border-uniqueBrown"></div>
            <div className="w-[90%]">
              <p className="  tracking-widest text-uniqueBrown font-bold">Experts Since 1990</p>
              <p className=" mt-[2vh] text-2xl font-bold">SATYAM CONSTRUCTION  is a comprehensive construction management team and general contractor. With over <span className=" leading-loose tracking-wider px-2 py-1 rounded-md bg-uniqueBrown text-white">30 years of experience</span></p>
            </div>
            <div className="absolute h-[70%]  left-[50vw] border border-l border-uniqueBrown"></div>
            <div className="ml-[2vw]">
              <div className=" flex gap-[1vw] ">
                <div className=""><IconQuote stroke={2} /></div>
                <p className=" text-4xl ">Brick by brick, we make it stick.</p>

              </div>
              <p className="mt-[2vh] ml-[3vw] font-semibold tracking-wider">“In the construction world, tools are important. But the greatest tool you have is your mind.” <span className=" leading-loose tracking-wider px-2 py-1 rounded-md bg-uniqueBrown text-white ml-[14vw] mt-[2vh]">– Rebecca Barnessin</span> </p>
            </div>

          </div>
          <div className="absolute h-[94%] left-[94%] top-[20%] border border-l border-uniqueBrown"></div>
          <div className="absolute text-uniqueBrown font-bold right-4 bottom-[18vh]"><p className=" -rotate-90 flex items-center gap-[1vw] "> <IconArrowDownBar className=" rotate-90 text-uniqueBrown" />Scroll Down To Explore</p></div>


          <video className="video -mt-40 md:mt-0" src={vid} loop muted playsInline preload="none" aria-hidden="true">

          </video>

        </div>
        <div className="relative h-full ">
          <div className="absolute z-20 h-[94%] left-[5vw] top-[30vh] border border-l border-uniqueYellow "></div>
          <div className="font-bold text-white text-2xl sm:text-3xl lg:text-5xl absolute z-20 capitalize top-[12vh] md:top-[20vh] left-5 md:left-[10vw] right-5 md:right-auto bg-uniqueBrown px-4 md:px-[2vw] py-3 md:py-[2vh]"><span className=" font-normal text-uniqueYellow text-2xl ">We are</span> Passionate Experts, Driven by Excellence.</div>
          <div className="relative bg-white flex flex-col md:flex-row items-center gap-8 justify-around pt-[30vh] md:pt-[50vh]">
            <div className="image w-full px-5 md:pl-[5vw] md:px-0">
              <img src={img} alt="" width={550}/>
            </div>
            <div className="absolute z-20 h-[60%] left-[44vw] border border-l border-uniqueBrown"></div>
            <div className="w-full px-5 md:w-[50vw] md:px-0">
              <h1 className=" my-[5vh] text-3xl font-bold"> We Don’t Just Build Structures. We Craft Legacies.</h1>
              <p className=" font-bold ">
                Since 1990, SATYAM CONSTRUCTION has been a trusted name in the construction industry, delivering over 30 years of expertise. As a comprehensive construction management team and general contractor, they specialize in building all types of structures, offering services in planning, estimation, valuation, and interior/exterior design.</p>
            </div>
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
              <div className="relative mb-4 w-full text-sm leading-6 md:absolute md:mb-0 md:left-20 md:w-[30vw] md:text-3xl md:leading-[7vh]">
                <span className='bg-white p-[0.3rem]'>
                  Let's get this conversation started!
                </span>
                Tell us a bit about yourself and we'll get in touch as soon as we can.
              </div>
              <input
                type="text"
                name="from_name"
                placeholder='Your Name'
                className='w-full min-w-0 bg-yellow-500 text-base sm:text-xl lg:text-2xl placeholder:text-[#6e3636] min-h-12 rounded-md px-4 py-3'
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <input
                type="email"
                name="from_email"
                placeholder='Your Email'
                className='w-full min-w-0 bg-yellow-500 text-base sm:text-xl lg:text-2xl placeholder:text-[#6e3636] min-h-12 rounded-md px-4 py-3'
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder='Message'
                required
                className='w-full min-w-0 bg-yellow-500 text-base sm:text-xl lg:text-2xl placeholder:text-[#6e3636] min-h-32 rounded-md px-4 py-3'
              />
              <button
                type="submit"
                className='w-full min-h-12 border-2 px-4 py-3 flex justify-between items-center rounded-md border-yellow-500 hover:bg-yellow-500 transition-all ease-in-out hover:text-white disabled:hover:bg-transparent disabled:hover:text-black'
                disabled={!name || !email || isSending}
              >
                <div className="text-2xl">{isSending ? "Sending..." : "Submit"}</div>
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
                <IconPhone className='text-base sm:text-3xl' />

                <h1 className='text-base sm:text-3xl'>Phone</h1>
                <p className='bg-white px-4 font-bold w-full text-center'>Phone No- 9434469236/ 7908201181/ 7001577900</p>


              </div>
              <div className=' flex flex-col justify-center gap-4 items-center   bg-uniqueYellow border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
                <IconMail className='text-base sm:text-3xl' />

                <h1 className='text-base sm:text-3xl'>Email</h1>
                <p className='bg-white px-4 font-bold w-full text-center'>Email Us- satyaminfrastructure4962@gmail.com</p>


              </div>
              <div className=' flex flex-col justify-center gap-4  items-center   bg-uniqueYellow border-black border-2 rounded-br-lg rounded-bl-lg w-[55vw] h-[20vh] md:w-[26.5vw] md:h-[40vh] shadow-lg shadow-gray-500 '>
                <IconMapPin className='text-base sm:text-3xl' />
                <h1 className='text-base sm:text-3xl'>Address</h1>
                <p className='bg-white px-4 font-bold w-full text-center'>SH 8, Jagat Berh, Barabalidanga, Bardhaman, West Bengal 713103</p>
              </div>
            </div>
            <h1 className='  text-3xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default my-[10vh]'>Google Maps</h1>
            <div className='mt-[5vh]'><iframe className="w-full max-w-[80vw] h-[35vh] sm:h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.505052243271!2d87.855727!3d23.2247016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8492465c7b385%3A0x97ec3993ec1b9bd0!2sSATYAM%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1724657146582!5m2!1sen!2sin" loading="lazy" ></iframe></div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
