'use client';

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


export default function Home() {
const textRef = useRef(null);
const textInView = useInView(textRef, { once: true, margin: "-110px" });

const listRef = useRef(null);
const listInView = useInView(listRef, { once: true, margin: "-110px" });


useEffect(() => {
    const onWheel = (e) => {
    if (window.scrollY <= 0 && e.deltaY < 0) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
    };

    let startY = null;
    const onTouchStart = (e) => {
    startY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
    if (window.scrollY <= 0 && startY !== null) {
        const currentY = e.touches[0].clientY;
        // User is pulling down (which would scroll up beyond top)
        if (currentY > startY) {
        e.preventDefault();
        window.scrollTo(0, 0);
        }
    }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchmove', onTouchMove);
    };
}, []);

return (
<main className="overscroll-contain  bg-white">
    <section
    id="about"
    role="region"
    aria-labelledby="about-heading"
    className="flex items-center justify-center w-full "
    >
    <div className="flex flex-col items-start space-y-3 max-w-screen-lg w-full lg:w-[50vw] mx-auto px-6">
        <motion.h1
        id="about-heading"
        className="lg:text-7xl indent-4 lg:my-8 md:text-5xl font-bold uppercase text-black mb-1 border-l-1 border-green-400 pl-2 text-right"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        Projects
        </motion.h1>

        <motion.p
        ref={textRef}
        className="lg:text-xl lg:mb-1 font-extralight text-justify text-black md:text-lg indent-6"
        initial={{ opacity: 0, y: 40 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        I’m a Mechatronics Engineer who fell in love with how technology connects people and ideas. Now I bring that curiosity to the digital space, building modern, high-performing web experiences and exploring AI-driven systems.
        </motion.p>

        <motion.div
        ref={listRef}
        className="grid lg:grid-cols-1 gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={listInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
        <div className="space-y-3 my-3">
            <h2 className="text-2xl text-black font-bold uppercase tracking-wide">What I Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-gray-300 font-semibold text-lg text-left gap-1 mt-4 xl:gap-10">
                {[
                    { task: "Front‑End Development" },
                    { task: "Back‑End Development" },
                    { task: "APIs & Integrations" },
                    { task: "UI/UX Design Systems" },
                    { task: "Automation & IoT Systems" },
                    { task: "Performance & Accessibility" }
                ].map((item) => (
                    <div
                        key={item.task}
                        className="text-center border border-gray-500 rounded-3xl cursor-pointer hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out w-full h-20 px-2 flex items-center justify-center mx-auto shadow-md hover:shadow-lg"
                    >
                        {item.task}
                    </div>
                ))}
            </div>
        </div>
        <div className="space-y-3 my-3">
            <h2 className="text-2xl font-bold text-black uppercase tracking-wider">Stack</h2>
            <div className="grid lg:grid-cols-2 text-lg text-left gap-2">
                {[
                { label: "Front‑End:", list: "JS, Next.js, React, TypeScript" },
                { label: "Back‑End:", list: "Node.js, Python, REST APIs" },
                { label: "Databases:", list: "SQL (MySQL) & MongoDB" },
                { label: "Version Control:", list: "Git & GitHub" },
                { label: "Others:", list: "AI/agents (in progress)" },
            ].map((item) => (
            <div
                key={item.label}
                className="cursor-pointer font-light text-gray-300 hover:text-black transition-colors"
                aria-label="Stack">
                <span className="font-semibold">{item.label} </span>
                {item.list}
            </div>
            ))}
        </div>
        </div>
        </motion.div>

        {/* <div className="mt-10">
        <a
            href="#projects"
            className="inline-block border border-black/20 rounded-lg py-2 px-4 uppercase text-sm hover:text-green-600 bg-white/80 shadow-sm transition-colors"
        >
            View Projects
        </a>
        </div> */}
    </div>
    </section>
</main>
);
}

