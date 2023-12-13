import { useEffect, useState } from "react";
import logo from "../assets/portfolio.svg";
import { NavLinks } from "../constants";
import { Twirl as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export function Nav() {
  const [toggle, setToggle] = useState(false);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollActive(true);
      } else {
        setIsScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const windowHeight = window.innerHeight;
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;

        if (sectionTop <= windowHeight / 2) {
          setIsLinkActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 w-full fixed bg-stone-900 padding-x z-10 ${
        isScrollActive ? " shadow-2xl transition-shadow duration-300" : ""
      }`}
    >
      <nav className="flex items-center w-full justify-between max-container">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ oapcity: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          src={logo}
          alt=""
        />

        {/* Menu mobile */}
        <div
          className={`fixed ${toggle ? "top-0" : "-top-full"}
          left-0 bg-stone-900 w-full py-10 px-20 text-center 
          transition-top duration-500 shadow-xl sm:hidden`}
        >
          <ul className="flex flex-col gap-y-10">
            {NavLinks.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => setToggle(false)}
                  href={item.href}
                  className={`relative text-base font-medium hover:text-stone-400 hover:after:w-1/4
                  after:content-[''] after:w-0 after:h-[2px] after:bg-stone-400 after:absolute 
                  after:left-0 after:-bottom-2 after:transition-width after:duration-300
                  
                  focus:shadow-none focus:text-stone-400 focus:after:w-1/4 focus:after:content-['']  focus:after:h-[2px] 
                  focus:after:bg-stone-400 focus:after:absolute focus:after:left-0 focus:after:-bottom-2 
                  focus:after:transition-width focus:after:duration-300
                  
                  ${
                    isLinkActive == item.id
                      ? "after:w-1/4 text-stone-400 transition-all duration-300"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Desktop */}
        <div className="hidden sm:block">
          <ul className="flex gap-x-10">
            {NavLinks.map((item, i) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                key={item.label}
              >
                <a
                  onClick={() => {
                    setIsLinkActive(item.id);
                  }}
                  href={item.href}
                  className={`relative text-base font-medium hover:text-stone-400 hover:after:w-1/4
                  after:content-[''] after:w-0 after:h-[2px] after:bg-stone-400 after:absolute 
                  after:left-0 after:-bottom-2 after:transition-width after:duration-300
                  
                  focus:shadow-none focus:text-stone-400 focus:after:w-1/4 focus:after:content-['']  focus:after:h-[2px] 
                  focus:after:bg-stone-400 focus:after:absolute focus:after:left-0 focus:after:-bottom-2 
                  focus:after:transition-width focus:after:duration-300
                  
                  ${
                    isLinkActive == item.id
                      ? "after:w-1/4 text-stone-400 transition-all duration-300"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden">
          <Hamburger
            rounded
            size={20}
            toggled={toggle}
            onToggle={(toggled) => {
              if (toggled) {
                setToggle(true);
              } else {
                setToggle(false);
              }
            }}
          />
        </div>
      </nav>
    </header>
  );
}
