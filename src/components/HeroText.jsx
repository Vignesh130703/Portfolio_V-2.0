import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [" Modern", " Powerful", " Scalable", " Efficient", " Innovative"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      
      {/* Desktop */}
      <div className="hidden md:flex flex-col c-space">

        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-aqua to-lavender bg-clip-text text-transparent font-semibold">
            Vignesh
          </span>
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-neutral-300 mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Aspiring developer
        </motion.p>

        <motion.div
          className="mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
        </motion.div>

        <motion.p
          className="text-xl text-neutral-400 mt-4 max-w-xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          I Build  
          <FlipWords
            words={words}
            className="font-black text-white text-4xl"
          />
           systems that actually solve problems
        </motion.p>

        {/* 🔥 CTA Buttons */}
        <motion.div
          className="flex gap-4 mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.9 }}
        >
          <a
            href="https://github.com/Vignesh130703"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:vickyvignesh132002@gmail.com"
            className="px-6 py-3 rounded-xl bg-aqua/20 border border-aqua/30 hover:bg-aqua/30 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-5 md:hidden">

        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          Hi, I'm Vignesh
        </motion.p>

        <motion.p
          className="text-4xl font-bold text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          DevOps Engineer
        </motion.p>

        <FlipWords
          words={words}
          className="font-bold text-white text-5xl"
        />

        <p className="text-neutral-400 text-sm">
          Building scalable cloud systems & automation pipelines.
        </p>
      </div>
    </div>
  );
};

export default HeroText;