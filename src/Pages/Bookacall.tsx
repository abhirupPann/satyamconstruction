import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiChevronsRight } from "react-icons/fi";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import toast from "react-hot-toast";

function Bookacall() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    try {
      await emailjs.sendForm("service_bxh5zsu", "template_wten5lu", form.current, {
        publicKey: "vFMU0Sp9Nc7jdm96k",
      });
      toast.success("Your enquiry was sent successfully.");
      form.current.reset();
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      toast.error("We couldn't send your enquiry. Please try again or call us directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="relative mx-auto mt-24 flex w-full max-w-screen-2xl flex-col items-center px-5 pb-12 font-bold sm:mt-32 sm:px-8 lg:mt-[30vh] lg:px-[6vw] font-Poiret">
      <h1 className="text-center text-3xl font-medium underline underline-offset-4 decoration-uniqueYellow cursor-default">Quick Enquiry</h1>
      <p className="my-8 max-w-5xl text-base leading-relaxed sm:my-12 sm:text-xl lg:my-[10vh] lg:text-2xl">
        SATYAM CONSTRUCTION is committed to "Innovation and Excellence" in every project we undertake. We look forward to discussing how SATYAM CONSTRUCTION can support your construction needs and bring your vision to life.
      </p>
      <div className="w-full max-w-6xl">
        <form ref={form} onSubmit={sendEmail} className="letscolab relative grid w-full grid-cols-1 gap-4 rounded-bl-3xl rounded-br-3xl border-2 border-black bg-uniqueYellow px-5 py-6 shadow-md sm:px-8 sm:py-8 md:grid-cols-2 md:gap-5 md:px-10 lg:min-h-[430px] lg:items-center lg:px-12">
          <div className="text-sm leading-6 sm:text-base md:col-span-2 lg:mb-2 lg:max-w-2xl lg:text-xl">
            <span className="bg-white p-1">Let's get this conversation started!</span>
            <p className="mt-2">Tell us a bit about yourself and we'll get in touch as soon as we can.</p>
          </div>
          <input type="text" name="from_name" placeholder="Your Name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className="min-h-12 w-full min-w-0 rounded-md bg-yellow-500 px-4 py-3 text-base placeholder:text-[#6e3636] sm:text-lg" />
          <input type="email" name="from_email" placeholder="Your Email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="min-h-12 w-full min-w-0 rounded-md bg-yellow-500 px-4 py-3 text-base placeholder:text-[#6e3636] sm:text-lg" />
          <textarea name="message" placeholder="Message" required rows={4} className="min-h-32 w-full min-w-0 rounded-md bg-yellow-500 px-4 py-3 text-base placeholder:text-[#6e3636] sm:text-lg md:col-span-2" />
          <button type="submit" disabled={!name.trim() || !email.trim() || isSending} className="flex min-h-12 w-full items-center justify-between rounded-md border-2 border-yellow-500 px-4 py-3 transition-all hover:bg-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2">
            <span className="text-xl">{isSending ? "Sending..." : "Submit"}</span>
            <span className="text-2xl"><FiChevronsRight /></span>
          </button>
        </form>
      </div>

      <section className="my-12 flex w-full flex-col items-center sm:my-16 lg:my-[10vh]">
        <h2 className="my-8 text-center text-2xl font-medium underline underline-offset-4 decoration-uniqueYellow sm:text-3xl">Customer Support</h2>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-bl-lg rounded-br-lg border-2 border-black bg-uniqueYellow px-4 py-6 text-center shadow-lg shadow-gray-500">
            <IconPhone className="text-3xl" />
            <h3 className="text-2xl">Phone</h3>
            <p className="w-full break-words bg-white px-3 py-2 font-bold">Phone No: 9434469236 / 7908201181 / 7001577900</p>
          </div>
          <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-bl-lg rounded-br-lg border-2 border-black bg-uniqueYellow px-4 py-6 text-center shadow-lg shadow-gray-500">
            <IconMail className="text-3xl" />
            <h3 className="text-2xl">Email</h3>
            <p className="w-full break-words bg-white px-3 py-2 font-bold">satyaminfrastructure4962@gmail.com</p>
          </div>
          <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-bl-lg rounded-br-lg border-2 border-black bg-uniqueYellow px-4 py-6 text-center shadow-lg shadow-gray-500">
            <IconMapPin className="text-3xl" />
            <h3 className="text-2xl">Address</h3>
            <p className="w-full break-words bg-white px-3 py-2 font-bold">SH 8, Jagat Berh, Barabalidanga, Bardhaman, West Bengal 713103</p>
          </div>
        </div>
        <h2 className="my-8 text-center text-2xl font-medium underline underline-offset-4 decoration-uniqueYellow sm:my-12 sm:text-3xl">Google Maps</h2>
        <div className="w-full max-w-5xl">
          <iframe title="Satyam Construction location on Google Maps" className="h-[35vh] min-h-64 w-full rounded-lg sm:h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.505052243271!2d87.855727!3d23.2247016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8492465c7b385%3A0x97ec3993ec1b9bd0!2sSATYAM%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1724657146582!5m2!1sen!2sin" loading="lazy" />
        </div>
      </section>
    </main>
  );
}

export default Bookacall;
