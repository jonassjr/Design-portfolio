import { ProjectsItems } from "../constants";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="w-full max-container scroll-my-28">
      <div className="flex-1 flex">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="flex flex-col gap-y-2 text-3xl sm:text-5xl font-medium "
        >
          Projects
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
      <div className="flex flex-col gap-y-24 mt-24">
        {ProjectsItems.map((project, i) => (
          <article
            key={project.id}
            className={`flex flex-col gap-y-8 max-w-[380px] md:max-w-full self-center md:flex-row gap-x-16  ${
              project.id % 2 == 0 && "md:flex-row-reverse"
            }`}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.2,
                delay: i * 0.1,
              }}
              src={project.img}
              alt=""
              className="border-2"
            />
            <div className="flex flex-col gap-y-10">
              <div
                className={`flex gap-x-4 items-center  ${
                  project.id % 2 == 0 && "flex-row-reverse"
                }`}
              >
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                    delay: i * 0.3,
                  }}
                  className="bg-stone-950 p-3 md:text-xl"
                >
                  {project.badge}
                </motion.span>
                <motion.h3
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                    delay: i * 0.5,
                  }}
                  className="md:text-3xl"
                >
                  {project.title}
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: i * 0.5,
                }}
                className={`${project.id % 2 == 0 && "text-end"}`}
              >
                {project.description}
              </motion.p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
