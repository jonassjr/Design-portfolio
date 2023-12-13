import { ArrowSquareDown } from "phosphor-react";
import HeroImg from "../assets/Hero-img.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full max-container flex flex-col md:flex-row md:justify-between 
      mt-[4.5rem] scroll-my-44 relative"
    >
      <div className="flex flex-col gap-y-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <p className="font-extralight text-5xl sm:text-8xl ">Hi! I&apos;m</p>

          <h1 className="font-bold text-5xl sm:text-8xl border-b-2 w-fit">
            DESIGNER
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          className="text-base max-w-[480px]"
        >
          Lorem ipsum dolor sit amet consectetur. Erat imperdiet mauris
          tincidunt lobortis eget. Neque phasellus quisque turpis mattis risus.
        </motion.p>

        <div
          className="relative -bottom-16 -z-10 flex flex-col gap-y-1 md:flex-row 
          md:items-center gap-x-2"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            exit={{ width: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="content-[''] w-16 h-[2px] bg-stone-300"
          />
          <div className="flex items-center gap-x-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            >
              View Project
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            >
              <ArrowSquareDown size={32} />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        className="relative -top-14 sm:-right-14"
      >
        <img
          src={HeroImg}
          alt="A photograp image"
          className="w-[550px] -z-10"
        />
      </motion.div>
    </section>
  );
}
