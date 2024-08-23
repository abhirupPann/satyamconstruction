import { useState } from "react";
import { motion } from "framer-motion";
import {  NavLink } from "react-router-dom";
const navigation = [{ name: "Home", link:"/" }, { name: "Services", link:"/solutions" }, { name: "Process", link:"/process" },{ name: "Projects", link:"/projects" },{ name: "About Us", link:"/aboutus" }];

export const SquigglyUnderline = () => {
  const name = localStorage.getItem('Name') ? localStorage.getItem('Name') : 'Home' ;
  const [selectedLink, setSelectedLink] = useState(name);

  return (
    <div className="flex gap-16">
      {navigation.map((item) => {
        const isSelected = item.name === selectedLink;
        return (
          <NavLink to={item.link}
            key={item.name}
            className={`relative text-sm leading-6 no-underline ${
              isSelected ? "font-semibold text-gray-200" : "text-uniqueYellow"
            }`}
            onClick={(isActive) =>{
              isActive ? setSelectedLink(item.name): "";
              localStorage.setItem('Name', item.name);
            }}
          >
            {item.name}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="yellow"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </NavLink>
        );
      })}
    </div>
  );
};


