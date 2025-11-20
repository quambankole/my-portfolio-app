'use client';

import About from "./about/aboutpage";
import Projects from "./projects/projectspage";
import Contact from "./contact/contactpage";
import Chatbot from "../components/chatbot";
import styles from './page.module.css';
import Header from "../components/header";
import Links from "../components/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Particles } from "../components/ui/shadcn-io/particles"
import { WritingText } from "../components/writing-text/index";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();


  return (
    <>
      <Header/>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
      </a>

      <div id="main-content">
        <section
          className="relative z-35 bg-neutral-100 flex items-center justify-center lg:h-[85vh] h-[82vh] md:h-[85vh] p-[10vw] overflow-hidden">
          {/* Background particles (decorative) */}
            <Particles
              className="relative"
              quantity={75}
              ease={0}
              color="#17ef54ff"
              refresh
            />

        <div className="absolute lg:mt-5 md:mt-2 flex flex-col items-start space-y-7  md:space-y-5 max-w-screen-lg lg:w-[49vw] mx-[7.5vw] md:py-0">

          <div>
            <motion.h1
              ref={ref}
              className="lg:text-5xl lg:w-[49vw] md:text-3xl md:w-[45vw] sm:text-3xl sm:w-[60vw] w-[60vw] pl-6 md:pl-0 text-2xl font-light tracking-wider uppercase text-gray-300 text-left"
              initial={prefersReducedMotion ? false : { color: "#d7d9dbff", scale: 0.9, x: -60, opacity: 0 }}
              animate={isInView ? { color: "#282a2dff", x: -30, opacity: 1 } : {}}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }}
            >
              Hi, I’m Quam.
            </motion.h1>
          </div>

          <Chatbot/>

          <div>
            <motion.h2
              ref={ref}
              initial={prefersReducedMotion ? false : { y: -25, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", bounce: 0.1, duration: 1.4 }}
              className="2xl:text-7xl lg:text-6xl font-medium md:text-5xl sm:text-3xl text-2xl lg:pb-2 lg:w-[49vw] sm:text-3xl md:w-[45vw] uppercase text-slate-900 tracking-normal text-right indent-1"
            >
              <WritingText
                  text="I Develop full-stack web apps"
                  inView={true}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 3,
                    delay: 0.3
                  }}
                />
            </motion.h2>
          </div>

          <div className="border-b border-emerald-400300 lg:border-solid flex flex-row justify-between lg:flex-row items-center w-full lg:w-[49vw] md:w-[45vw] gap-2 md:text-[0.25rem] ">


            <span className="uppercase font-medium flex items-center gap-x-2 p-2 text-black backdrop-blur-lg border-black/10 bg-white/30 text-xs md:text-[10px] lg:text-sm">
                <span>
                  <span className="inline-flex w-3 h-3 items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#00e09d" }} className="w-3 h-3"/>
                  </span>
                </span>
                <span>Toronto, Canada.</span>
            </span>


            <span className="uppercase font-medium flex items-center gap-x-2 p-2 text-black backdrop-blur-lg border-black/10 bg-white/30 text-xs md:text-[10px] lg:text-sm"
                aria-label="Status: Open to work">
                <span
                  className={`${styles.statusDot} inline-block w-2.5 h-2.5 bg-emerald-400 rounded-full`}
                  aria-hidden="true"
                ></span>
                <span className='text-slate-900 font-bold'>Available</span>
            </span>
          </div>

          <div className="lg:w-[49vw] w-[40vw] md:w-[45vw] sm:w-full flex flex-col items-start">
            <div className="flex flex-col gap-2 my-4 my-0 md:mx-0 flex-row items-center justify-between items-start w-full">
              <nav aria-label="Primary" className="flex w-full">
                <ul className="flex w-full flex-col flex-row items-center space-y-0 space-x-5 sm:space-x-10 uppercase">
                  <li>
                    <Links />
                  </li>
                  <li className="duration-200 ease-out text-base">
                    <a
                      href="#resume"
                      className={`flex uppercase font-medium items-center justify-center text-sm md:text-l px-9 w-11 h-9  md:px-10 md:w-20 md:h-12 gap-3 rounded-xl border border-slate-900 bg-white text-slate-900 shadow-sm
                                transition-all duration-500 ease-out
                                hover:bg-slate-900 hover:text-white hover:font-medium hover:border-slate-900`}>
                      Resumé
                    </a>
                  </li>
                  <li className="ml-auto duration-200 ease-out text-base">
                    <a
                      href="#contact"
                      className={`flex font-medium items-center justify-center mx-auto p-3 w-35 h-10 rounded-xl border border-black/10 bg-slate-900 text-white shadow-sm
                                  transition-all duration-500 ease-out text-sm md:text-l
                                  hover:bg-white hover:text-slate-900 hover:font-medium hover:border-slate-900`}
                    >
                      Get in touch
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
        </section>

        {/* #About Section */}
        <section id="about" className="scroll-mt-22">
          <About/>
        </section>

        {/* #Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <Projects/>
        </section>

        <section id="contact" className="scroll-mt-10" >
          <Contact />
        </section>

      </div>
    </>
  );
}
