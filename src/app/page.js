'use client';

import About from "./about/page";
import styles from './page.module.css';
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Header/>

      <main>
        <section id="home" className="bg-white border border-red-600 flex items-center justify-center lg:h-[76vh] w-full">

        <div className="lg:mt-5 flex flex-col items-start space-y-5 max-w-screen-lg lg:w-[49vw] mx-auto md:py-2">

          <div>
            <motion.h1
              ref={ref}
              className="lg:text-3xl lg:w-[49vw] md:text-5xl md:w-[45vw] sm:text-5xl font-light tracking-wider uppercase text-gray-300 text-left"
              initial={prefersReducedMotion ? false : { color: "#d7d9dbff", scale: 0.9, x: -50, opacity: 0 }}
              animate={isInView ? { color: "#282a2dff", x: 0, opacity: 1 } : {}}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }}
            >
              Hi, I’m Quam.
            </motion.h1>
          </div>

          <div>
            <motion.h2
              ref={ref}
              initial={prefersReducedMotion ? false : { y: -25, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", bounce: 0.1, duration: 1.4 }}
              className="lg:text-5xl lg:pb-2 lg:pl-6 lg:w-[49vw] sm:text-3xl md:w-[45vw] md:text-5xl uppercase text-black tracking-wider text-right"
            >
              <span className="block">I build modern</span>
              <span className="block">web experiences</span>
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
                <span className='font-b\old' >Available</span>
            </span>
          </div>

          <div className="lg:w-[49vw] w-[40vw] md:w-[45vw] sm:w-full flex flex-col items-start">
            <div className="flex flex-col gap-2 my-4 md:my-0 md:mx-0 sm:flex-row sm:items-center sm:justify-between lg:items-start w-full">
              <nav aria-label="Primary" className="flex w-full">
                <div className="flex w-full flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-12 uppercase">
                  <div>
                    <a href="#socials" className={`${styles.cta} text-base border border-black/20 font-medium rounded-xl text-black hover:text-green-600 transition-colors ring-1 ring-white/20 bg-white/50 backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400`}>
                    Links
                    </a>
                  </div>
                  <div>
                    <a href="#resume" className={`${styles.cta} text-base border border-black/20 font-medium rounded-xl text-black hover:text-green-600 transition-colors ring-1 ring-white/20 bg-white/50 backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400`}>
                      Résumé
                    </a>
                  </div>
                  <div className="sm:ml-auto hover:scale-105 duration-200 ease-out">
                    <a
                      href="#getintouch"
                      className={`${styles.cta} text-base font-bold text-white rounded-xl hover:bg-black/10 hover:text-black transition-colors duration-300 ease-in-out border border-black/20 bg-black/90 backdrop-blur-md shadow-lg py-2 px-5 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400`}>
                      Get in touch
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>

        </div>

        </section>

        {/* #ABOUTSECTION */}
        <section id="about" className="lg:h-auto lg:m-2 scroll-mt-24">
          <About/>
        </section>

        {/* <section id="projects" className="min-h-screen scroll-mt-24">
          <h1>Projects</h1>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-24">
          <h1>Contact</h1>
        </section>
 */}

      </main>


    </>
  );
}
