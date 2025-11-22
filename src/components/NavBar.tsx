import { SquigglyUnderline } from "../UI/SquigglyUnderline"
import Headroom from "react-headroom"
import logo from "../assets/logo/satyamconslogo.png"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function NavBar() {
  const [scrollPosition, setScrollposition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => setScrollposition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 40 }
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 40 }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 24 }
    })
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div>
      <Headroom
        style={{ transition: "all .5s ease-in-out" }}
        className={`z-40 hidden md:flex gap-[14vw] items-center w-full font-Fjalla tracking-wider absolute top-[6vh] bg-transparent`}
      >
        <div className={`px-[5vw] ${scrollPosition === 0 ? "bg-transparent" : "backdrop-blur-3xl bg-black/50"}`}>
          <div className="flex gap-[5vw] lg:gap-[14vw] items-center w-full">
            <img src={logo} alt="Logo" width={150} />
            <SquigglyUnderline />
            <NavLink to="/bookacall">
              <div className="bg-white text-[10px] lg:text-[13px] lg:text-md w-[10vw] lg:w-[5.6vw] px-4 py-3 lg:px-2.5 lg:py-2 rounded-md cursor-pointer hover:bg-uniqueYellow hover:text-white transition-all duration-300">
                Book a call
              </div>
            </NavLink>
          </div>
        </div>
      </Headroom>

      {/* Mobile Header */}
      <div className="md:hidden font-Fjalla flex items-center justify-between w-full py-4 px-5">
      <img src={logo} alt="Logo" width={80} className=" z-50"/> 

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-0.5 bg-white mb-1.5 block origin-center"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: "1.75rem" }}
            transition={{ duration: 0.2 }}
            className="h-0.5 bg-white mb-1.5 block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-0.5 bg-white block origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="font-Fjalla">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <nav className="flex flex-col gap-6">
                  {["Home", "Solutions", "Process", "Projects", "About Us"].map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <a
                        href={`${item == "Home"? "" :item.toLowerCase().split(' ').join('')}`}
                        onClick={handleLinkClick}
                        className="text-white text-2xl font-semibold hover:text-yellow-400 transition-colors duration-300 block py-2"
                      >
                        {item}
                      </a>
                    </motion.div>
                  ))}

                  <motion.div custom={5} variants={menuItemVariants} initial="closed" animate="open" className="mt-8">
                    <button
                      onClick={handleLinkClick}
                      className="w-full bg-white text-black px-6 py-3 rounded-md text-center font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300"
                    >
                      Book a call
                    </button>
                  </motion.div>
                </nav>

                <motion.div
                  custom={6}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-auto mb-8"
                >
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                  <p className="text-white/60 text-sm text-center">© 2024 Satyam Consulting</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
