'use client';

import About from "./about/aboutpage";
import Projects from "./projects/projectspage";
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

      <main>
        <section
          id="home"
          className="relative bg-white border border-red-600 flex items-center justify-center lg:h-[80vh] w-full overflow-hidden">
          {/* Background particles */}
          <Particles
            className="absolute"
            quantity={70}
            ease={0}
            color="#17ef54ff"
            refresh
          />

        <div className="absolute z-10 lg:mt-5 flex flex-col items-start space-y-5 max-w-screen-lg lg:w-[49vw] mx-auto md:py-2">

          <div>
            <motion.h1
              ref={ref}
              className="lg:text-3xl lg:w-[49vw] md:text-5xl md:w-[45vw] sm:text-5xl font-light tracking-wider uppercase text-gray-300 text-left"
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
              className="2xl:text-8xl lg:text-6xl lg:pb-2 lg:w-[49vw] sm:text-3xl md:w-[45vw] md:text-5xl uppercase text-black tracking-normal text-right indent-1"
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

          <div className="lg:border-b border-green-300 lg:border-solid flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-[49vw] md:w-[45vw] sm:w-full gap-2 md:text-[0.25rem] ">


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
                  className={`${styles.statusDot} inline-block w-2.5 h-2.5 bg-green-500 rounded-full`}
                  aria-hidden="true"
                ></span>
                <span className='font-bold'>Available</span>
            </span>
          </div>

          <div className="lg:w-[49vw] w-[40vw] md:w-[45vw] sm:w-full flex flex-col items-start">
            <div className="flex flex-col gap-2 my-4 md:my-0 md:mx-0 sm:flex-row sm:items-center sm:justify-between lg:items-start w-full">
              <nav aria-label="Primary" className="flex w-full">
                <ul className="flex w-full flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-12 uppercase">
                  <li>
                    <Links />
                  </li>
                  <li className="hover:scale-105 duration-200 ease-out text-base border border-black/20 font-medium rounded-xl text-black hover:text-green-600 transition-all ring-1 ring-white/20 bg-white/50 backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 duration-2">
                    <a href="#resume" className={``}>
                      Resumé
                    </a>
                  </li>
                  <li className="ml-auto duration-200 ease-out text-base border border-black/20 font-medium rounded-xl text-white hover:text-black hover:bg-gray-100  transition-all ring-1 ring-white/20 bg-black backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
                    <a
                      href="#getintouch"
                      className={``}>
                      Get in touch
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        </section>

        {/* #ABOUTSECTION */}
        <section id="about" className="lg:h-auto bg-black py-10 scroll-mt-21">
          <About/>
        </section>

        <section id="projects" className="lg:h-auto bg-white py-10 scroll-mt-24">
          <Projects/>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-24">
          <h1>Contact</h1>
        </section>


      </main>


    </>
  );
}

