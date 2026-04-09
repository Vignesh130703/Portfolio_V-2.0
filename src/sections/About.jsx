import { useRef } from "react";
import { Particles } from "../components/Particles";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="relative c-space section-spacing" id="about">
      <Particles className="absolute inset-0 -z-10" quantity={100} ease={80} color={"#ffffff"} refresh />
      <h2 className="text-heading">About Me</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
      >
        {/* Grid 1 – Rich Bio Card */}
        <motion.div
          variants={itemVariants}
          className="flex items-end grid-default-color grid-1"
        >
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Vignesh</p>
            <p className="subtext">
              Computer Science graduate and freelance developer. Aspiring{" "}
              <span className="text-purple-300 font-semibold">DevOps Engineer</span> &amp; passionate{" "}
              <span className="text-blue-300 font-semibold">3D Designer</span> — bridging stunning
              visual aesthetics with resilient backend architectures.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/20 text-purple-300 font-medium text-[0.6rem] tracking-wide uppercase">
                Freelance Dev
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-[0.6rem] tracking-wide uppercase">
                3D Design
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/20 text-blue-300 font-medium text-[0.6rem] tracking-wide uppercase">
                Cloud &amp; DevOps
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </motion.div>

        {/* Grid 2 – Draggable Cards */}
        <motion.div variants={itemVariants} className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="DevOps" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="3D Design" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Automation" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Freelance Dev" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Cloud" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/react.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/github.svg" containerRef={grid2Container} />
          </div>
        </motion.div>

        {/* Grid 3 – Globe (centred and prominent) */}
        <motion.div variants={itemVariants} className="grid-black-color grid-3 relative overflow-hidden">
          {/* Subtle glow behind globe */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_60%,rgba(99,102,241,0.2),transparent_70%)] pointer-events-none" />
          <div className="z-10 absolute top-5 left-6">
            <p className="headtext">Location</p>
            <p className="subtext">Based in Tamil Nadu, India — open to remote work worldwide</p>
          </div>
          {/* Globe: positioned to fill the card nicely */}
          <figure className="absolute left-[28%] top-[5%] w-[15rem] h-[15rem]">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 4 – Email CTA */}
        <motion.div variants={itemVariants} className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do you Have Any idea <br />
               Want to start a project together?</p>
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* Grid 5 – Tech Stack */}
        <motion.div variants={itemVariants} className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialise in a variety of languages, frameworks, and tools that allow me to build
              robust and applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;