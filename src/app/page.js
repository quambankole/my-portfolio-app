'use client';
import Image from "next/image";
import About from "./about/page";
import styles from './page.module.css';
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, scale } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [blurOn, setBlurOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBlurOn(true), 900); // enable blur after heading animation settles
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header/>

      <main>
        <section id="home" className="bg-white border border-red-600 flex items-center justify-center lg:h-[60vh] w-full">

        <div className="lg:auto lg:mt-5 flex flex-col items-left space-y-5 max-w-screen-lg lg:w-[49vw] mx-auto md:py-2">

          <div>
            <motion.h1
              className="lg:text-3xl lg:w-[49vw] md:text-5xl md:w-[45vw] sm:text-5xl font-light tracking-wider uppercase text-gray-300 text-left"
              initial={{ color: "#d7d9dbff", scaleY: 0.9 }}
              animate={{ color: "#282a2dff", scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}>
              Hi, I’m Quam.
            </motion.h1>
          </div>

          <div>
            <h2 className="lg:text-5xl lg:pb-2 lg:pl-6 lg:w-[49vw] sm:text-3xl md:w-[45vw] md:text-5xl uppercase text-black tracking-wider text-right" >
              <span className="block">I build modern</span>
              <span className="block">web experiences</span>
            </h2>
          </div>

          <div className="lg:border-b-1 border-green-300 lg:border-solid flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-[49vw] md:w-[45vw] sm:w-full gap-2 md:text-[0.25rem] ">


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
                  className={`${styles.statusDot} inline-block w-2 h-2 bg-green-500 rounded-full`}
                  aria-hidden="true"
                ></span>
                <span>Available</span>
            </span>
          </div>

          <div className="flex items-left flex-col w-[40vw] md:w-[45vw] sm:w-full ">

            <div className="flex flex-col gap-2 my-4 md:my-0 md:mx-0 sm:flex-row sm:items-center sm:justify-between lg:items-start w-full">
              <nav aria-label="Primary" className="flex">
                <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12 uppercase">
                  <li>
                    <a href="#socials" className={`${styles.cta} text-base border border-black/20 font-large rounded-xl text-black hover:text-green-600 transition-colors ring-1 ring-white/20
                        bg-white/50 backdrop-blur-md shadow-lg py-1.5 px-3 uppercase`}>
                      Socials
                    </a>
                  </li>
                  <li>
                    <a href="#resume" className={`${styles.cta} text-base border border-black/20 font-large rounded-xl text-black hover:text-green-600 hover:scaletransition-colors ring-1 ring-white/20
                        bg-white/50 backdrop-blur-md shadow-lg py-1.5 px-3 uppercase`}>
                      Resume´
                    </a>
                  </li>
                </ul>
              </nav>

            </div>

          </div>

        </div>

        </section>

        {/* #ABOUTSECTION */}
        <section id="about" className="lg:h-auto lg:m-2 scroll-mt-24">
          <About/>
        </section>

        <section id="projects" className="min-h-screen scroll-mt-24">
          <h1>Projects</h1>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-24">
          <h1>Contact</h1>
        </section>


      </main>


    </>
  );
}
