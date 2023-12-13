import { motion } from "framer-motion";

export function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section
      id="contact"
      className="w-full max-container flex flex-col gap-y-16 md:flex-row scroll-my-28"
    >
      <div className="flex-1 flex">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="flex flex-col gap-y-2 text-3xl sm:text-5xl font-medium "
        >
          Contact me
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
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1,
        }}
        onSubmit={handleSubmit}
        className="w-full flex flex-1 flex-col gap-y-8 max-w-[560px] self-center"
      >
        <input
          type="text"
          placeholder="Name"
          className="border-2 rounded-md p-4 border-stone-300 focus:shadow-none focus:border-red-500 transition-all ease-out duration-300"
        />
        <input
          type="email"
          placeholder="email"
          className="border-2 rounded-md p-4 border-stone-300 focus:shadow-none focus:border-red-500 transition-all ease-out duration-300"
        />
        <textarea
          placeholder="Some message..."
          className="border-2 p-4 rounded-md resize-none border-stone-300 focus:shadow-none focus:border-red-500 transition-all ease-out duration-300"
        />
        <button
          type="submit"
          className="w-fit py-4 px-12 rounded-md self-end bg-stone-300 font-medium
          text-stone-900 hover:bg-red-500 hover:text-stone-300 transition-all ease-out 
          duration-300 
          "
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}
