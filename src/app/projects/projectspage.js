'use client';

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


export default function Home() {
const textRef = useRef(null);
const textInView = useInView(textRef, { once: true, margin: "-110px" });

const listRef = useRef(null);
const listInView = useInView(listRef, { once: true, margin: "-110px" });

const projects = [
    {
    name: "1",
    desc: "In progress",
    progress: "In progress"
    },
    {
    name: "2",
    desc: "In progress",
    progress: "In progress"
    },
    {
    name: "3",
    desc: "In progress",
    progress: "In progress"
    },
    {
    name: "4",
    desc: "In progress",
    progress: "In progress"
    }
];

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
<section className="pb-20 rounded-b-xl relative z-20 overscroll-contain bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    <section
    id="projects"
    role="region"
    aria-labelledby="projects-heading"
    className="flex items-center mx-auto w-full ">
        <div className="flex flex-col items-start space-y-3 max-w-screen-lg w-full lg:w-[65vw] mx-auto px-6">
        <motion.h1
        id="projects-heading"
        className="lg:text-7xl text-3xl indent-4 lg:my-6 md:text-5xl font-bold uppercase text-white mb-1 border-l-2 border-green-400"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}>
        Projects
        </motion.h1>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
    {projects.map((project) => (
    <motion.div
        key={project.name}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full bg-white/10 backdrop-blur-lg border border-transparent ring-1 ring-white/30 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-102 hover:ring-green-400">
        <img
        src="#"
        alt={project.name}
        className="w-full h-52 object-cover"
        />
        <div className="p-2">
        <h3 className="text-lg font-semibold text-white">
            {project.name}
        </h3>
        <p className="text-white mt-2 text-sm">
            {project.desc}
        </p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-white">
            {project.progress}
            </span>
            <a className="text-green-500 hover:underline cursor-pointer">
            View →
            </a>
        </div>
        </div>
    </motion.div>
    ))}
</div>

    </div>
    </section>
</section>
);
}
