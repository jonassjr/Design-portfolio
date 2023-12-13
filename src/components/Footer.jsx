import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import logo from "../assets/Portfolio.svg";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
      id="footer"
      className="py-8 w-full max-container flex flex-col gap-y-8"
    >
      <div className="flex justify-between">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
          src={logo}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.5,
          }}
          className="flex gap-x-4 items-center"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <InstagramLogo className="text-[24px] xs:text-[32px]" />
          </a>
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <TwitterLogo className="text-[24px] xs:text-[32px]" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FacebookLogo className="text-[24px] xs:text-[32px]" />
          </a>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
          delay: 0.8,
        }}
        className="self-end text-sm"
      >
        Copyright © 2023 Portfolio - All Rights Reserved.
      </motion.p>
    </footer>
  );
}
