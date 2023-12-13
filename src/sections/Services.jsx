import { ServiceItems } from "../constants";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section
      id="services"
      className="w-full max-container flex flex-col scroll-my-28"
    >
      <div className="flex flex-col gap-y-4 items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-3xl sm:text-5xl font-medium"
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          className="text-base"
        >
          Recognition and Accoimplishments
        </motion.p>
      </div>
      <div className="grid sm:grid-cols-2 mt-16 gap-8">
        {ServiceItems.map((item, i) => (
          <motion.article
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: i * 0.2,
            }}
            key={item.title}
            className="border-2 py-8 px-6 flex flex-col gap-y-6 sm:gap-y-12 rounded-sm cursor-pointer 
            hover:bg-stone-950 hover:border-stone-950 hover:ease-in-out hover:duration-300"
          >
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="text-base">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
