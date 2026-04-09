import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Particles } from "./components/Particles";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <div className="relative">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={150}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <About />
        <Projects />
        <Services />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;