'use client';

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react"

function StackGrid({ items = [] }) {
return (
<div className="grid grid-cols-3 md:grid-cols-3 gap-4 bg-black/5 border-white/10 rounded-2xl backdrop-blur-md text-white/90 text-sm md:text-base">
    {items.map((tech, index) => (
    <span
        key={index}
        className="border border-white/20 rounded-xl px-1 py-2 text-center"
    >
        {tech}
    </span>
    ))}
</div>
);
}

export default function About() {
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
<section className="relative py-5 z-20 overscroll-contain bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 gradient-">
    <section
    id="about"
    role="region"
    aria-labelledby="about-heading"
    className="flex items-center justify-center w-full py-3"
    >
    <div className="flex flex-col items-start space-y-3 max-w-screen-lg w-full lg:w-[65vw] mx-auto px-6">
        <motion.h1
        id="about-heading"
        className="lg:text-6xl md:text-4xl text-3xl indent-4 lg:my-5 md:text-5xl font-bold uppercase text-white mb-1 border-l-1 border-emerald-400 pl-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        About me
        </motion.h1>

        <div className="grid w-full space-y-2 max-w-screen-lg gap-6 lg:grid-cols-[3fr_2fr] items-start">
          {/* About text */}
        <motion.p
            ref={textRef}
            className="lg:text-[1.35rem] md:text-lg text-md font-normal text-justify text-white indent-10 p-2"
            initial={{ opacity: 0, y: 40 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            I turn ideas into high-performing digital experiences. Starting as a Mechatronics Engineer, I've evolved into a full-stack developer who bridges hardware, software, and AI to build solutions that work in the real world.
        </motion.p>

          {/* Stack Section */}
        <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 40 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-10 px-6 border-l-1">
            <motion.p className="text-emerald-400 text-3xl font-extrabold mb-1 -mt-10 py-4 pl-2">
                STACK
            </motion.p>

            <StackGrid items={["React", "Next.js", "JS(ES6+)", "TypeScript", "Node.js", "Python"]} />
            </motion.div>
        </div>

        {/* Improved WHAT I DO & STACK section */}
        <motion.div
        ref={listRef}
        initial={{ opacity: 0, y: 50 }}
        animate={listInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="mt-7"
    >
        <div className="rounded-3xl py-4 backdrop-blur-md text-white">
        <h2 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-7 flex items-center gap-5 uppercase tracking-wide">
            What I Do
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
            {[
            { title: "Front‑End Development", description: "Building responsive, interactive interfaces using modern JavaScript frameworks and design systems." },
            { title: "Back‑End Development", description: "Designing scalable server-side logic and crafting robust RESTful APIs." },
            { title: "API Integrations", description: "Connecting services and systems with clean, well-structured API architectures." },
            { title: "UI/UX Systems", description: "Designing cohesive experiences that are both visually appealing and highly usable." },
            { title: "Automation & IoT", description: "Combining hardware and software to engineer intelligent, automated solutions." },
            { title: "Performance & Accessibility", description: "Optimizing user experiences with a focus on speed, reliability, and inclusivity." }
            ].map((item, index) => (
            <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/5 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
                </p>
            </div>
            ))}
            </div>


        </div>
        </motion.div>

    </div>
    </section>
</section>
);
}
