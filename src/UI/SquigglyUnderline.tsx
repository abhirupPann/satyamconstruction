import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/solutions" },
  { name: "Process", link: "/process" },
  { name: "Projects", link: "/projects" },
  { name: "About Us", link: "/aboutus" },
];

export const SquigglyUnderline = () => (
  <nav aria-label="Main navigation" className="flex gap-5 lg:gap-10">
    {navigation.map((item) => (
      <NavLink
        to={item.link}
        key={item.name}
        end={item.link === "/"}
        className={({ isActive }) =>
          `relative whitespace-nowrap text-sm leading-6 no-underline ${
            isActive ? "font-semibold text-gray-100" : "text-uniqueYellow"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.name}
            {isActive && (
              <motion.div className="absolute -bottom-1 left-0 right-0 h-2" aria-hidden="true">
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.4C7.49-1.09 6.45-.13 8.34 6.48c.01.04 3.27-3.75 4-4.14 1.56-.82 4.32.63 6.03.63 3.29 0 4.82-1.27 8.37-.18 3.01.93 5.95.99 9.1.99"
                    stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </svg>
              </motion.div>
            )}
          </>
        )}
      </NavLink>
    ))}
  </nav>
);
