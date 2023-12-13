import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="About"
      className="flex flex-col gap-y-8 sm:flex-row items-center max-container w-full pb-8 md:pb-24"
    >
      <div className="flex-1 flex self-start sm:justify-center sm:self-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="flex flex-col gap-y-2 text-3xl sm:text-5xl font-medium "
        >
          About me
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            exit={{ width: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: 0.5,
            }}
            className="content-[''] w-24 h-[3px] bg-stone-300 rounded"
          />
        </motion.h2>
      </div>
      <div className="flex-1 flex flex-col gap-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur. Venenatis massa ac diam nunc
          ac volutpat erat lorem tempus.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
        >
          Amet fames tellus phasellus orci amet. Vel at neque quisque enim
          sagittis dui varius eros sapien. Sed odio eget in curabitur. Ultrices
          tempor odio diam vitae.
        </motion.p>
      </div>
    </section>
  );
}
