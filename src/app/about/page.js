'use client';

import { motion } from "framer-motion";

export default function About() {
return (
    <main>
    <section
        id="about"
        role="region"
        aria-labelledby="about-heading"
        className="flex items-center justify-center w-full ">

        <div className="flex flex-col items-start space-y-3 max-w-screen-lg w-full lg:w-[50vw] mx-auto px-6">
        <motion.h1
            id="about-heading"
            className="lg:text-3xl lg:my-10 md:text-2xl font-medium tracking-widest uppercase text-white mb-4 border-l-1 border-green-400 pl-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
        About me
        </motion.h1>

        <motion.p
            className="lg:text-xl lg:mb-1 font-arial font-light text-center text-white-700 leading-relaxed md:text-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}>
            I’m a Mechatronics Engineer who fell in love with how technology connects people and ideas. Now I bring that curiosity to the digital space, building modern, high-performing web experiences and exploring AI-driven systems.

        </motion.p>

        <motion.div
            className="grid md:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
            <div className="space-y-3 my-3">
            <h2 className="text-xl font-medium uppercase tracking-wide">What I Do</h2>
            <ul className="list-disc pl-5 text-gray-400 leading-relaxed text-lg">
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Next.js + React front‑end development</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Tailwind CSS design systems</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">APIs &amp; integrations</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Performance &amp; accessibility</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Automation and IoT system integration</li>
            </ul>
            </div>
            <div className="space-y-3 my-3">
            <h2 className="text-xl  font-medium uppercase tracking-wide">Stack</h2>
            <ul className="list-disc pl-5 text-gray-400 leading-relaxed text-lg">
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">JavaScript / TypeScript</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Next.js, React</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Node.js</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Python</li>
                <li className="cursor-pointer text-gray-400 hover:text-white transition-colors">Basic AI/agents (in progress)</li>
            </ul>
            </div>
        </motion.div>

        <div className="mt-10">
            <a
            href="#projects"
            className="inline-block border border-black/20 rounded-lg py-2 px-4 uppercase text-sm hover:text-green-600 bg-white/80 shadow-sm transition-colors"
            >
            View Projects
            </a>
        </div>
        </div>
    </section>
    </main>
);
}