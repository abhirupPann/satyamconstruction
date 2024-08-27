
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiChevronsRight } from "react-icons/fi";
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import toast from "react-hot-toast";

function Bookacall() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_bxh5zsu', 'template_wten5lu', form.current!, {
        publicKey: 'vFMU0Sp9Nc7jdm96k',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        (error) => {
          toast.error('FAILED...', error.text);
        }
      );
  };


  return (
    <div className=" relative mt-[30vh] mx-[6vw] font-bold flex flex-col items-center font-Poiret">
      <h1 className=' text-2xl font-medium underline underline-offset-[2vh] decoration-uniqueYellow cursor-default'>
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
            className=' bg-yellow-500 text-base placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh]'
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            name="from_email" 
            placeholder='Your Email' 
            className='bg-yellow-500 text-base placeholder:text-[#6e3636] h-[7vh] rounded-md px-[2vw] py-[2vh]'
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            name="message" 
            placeholder='Message' 
            className='bg-yellow-500 text-base placeholder:text-[#6e3636] h-[20vh] rounded-md px-[2vw] py-[2vh]'
          />
          <button 
            type="submit" 
            className='w-full border-2 px-[2vw] py-[4vh] h-[7vh] flex justify-between items-center rounded-md border-yellow-500 hover:bg-yellow-500 transition-all ease-in-out hover:text-white disabled:hover:bg-transparent disabled:hover:text-black'
            disabled={!name || !email}
          >
            <div className="text-2xl">Submit</div>
            <div className='text-2xl'>
              <FiChevronsRight />
            </div>
          </button>
        </form>
      </div>
      <div className=" relative  mt-[10vh] mb-[10vh] flex flex-col items-center">
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
  );
}

export default Bookacall;
