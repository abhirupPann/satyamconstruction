import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo/satyamconslogo.png";
import { SquigglyUnderline } from "../UI/SquigglyUnderline";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/solutions" },
  { name: "Process", path: "/process" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/aboutus" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50">
      <Headroom
        style={{ transition: "all .35s ease-in-out" }}
        className="hidden md:flex absolute top-0 z-50 w-full items-center font-Fjalla tracking-wider"
      >
        <div className={`w-full px-[5vw] py-3 ${
          scrollPosition > 20 ? "bg-black/80 backdrop-blur-xl" : "bg-black/20"
        }`}>
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-8">
            <Link to="/" aria-label="Satyam Construction home">
              <img src={logo} alt="Satyam Construction" width={130} />
            </Link>
            <SquigglyUnderline />
            <Link to="/bookacall" className="whitespace-nowrap rounded-md bg-white px-4 py-3 text-sm text-black transition hover:bg-uniqueYellow hover:text-white">
              Book a call
            </Link>
          </div>
        </div>
      </Headroom>

      <div className="flex w-full items-center justify-between bg-black/30 px-5 py-4 font-Fjalla md:hidden">
        <Link to="/" onClick={closeMenu} aria-label="Satyam Construction home">
          <img src={logo} alt="Satyam Construction" width={90} />
        </Link>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <motion.span animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="mb-1.5 block h-0.5 w-7 origin-center bg-white" />
          <motion.span animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: "1.75rem" }} className="mb-1.5 block h-0.5 bg-white" />
          <motion.span animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-7 origin-center bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82vw] max-w-sm flex-col gap-6 overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 px-8 pb-8 pt-24 md:hidden"
            >
              {navigation.map((item, index) => (
                <motion.div key={item.path} initial={{ x: 25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.05 }}>
                  <NavLink
                    to={item.path} end={item.path === "/"} onClick={closeMenu}
                    className={({ isActive }) => `block py-2 text-2xl font-semibold transition-colors ${
                      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/bookacall" onClick={closeMenu} className="mt-3 rounded-md bg-white px-6 py-3 text-center font-semibold text-black transition hover:bg-yellow-400">
                Book a call
              </Link>
              <p className="mt-auto pt-8 text-center text-sm text-white/60">
                © {new Date().getFullYear()} Satyam Construction
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
