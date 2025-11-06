'use client';

import { motion } from "framer-motion";

export default function About() {
return (
    <main>
    <section
        id="about"
        role="region"
        aria-labelledby="about-heading"
        className="flex items-center justify-center w-full py-2"
    >
        <div className="max-w-screen-lg w-full px-6">
        <motion.h1
            id="about-heading"
            className="text-3xl md:text-5xl font-light tracking-wider uppercase text-black mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeIn' }}
        >
            About
        </motion.h1>

        <motion.p
            className="text-gray-700 leading-7 md:text-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
            I build modern web experiences with Next.js and I’m expanding into AI‑driven apps and agents.
            My focus is clean interfaces, smooth performance, and pragmatic engineering.
        </motion.p>

        <motion.div
            className="grid md:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
            <div className="space-y-3">
            <h2 className="text-xl font-semibold uppercase tracking-wide">What I Do</h2>
            <ul className="list-disc pl-5 text-gray-700">
                <li>Next.js + React front‑end development</li>
                <li>Tailwind CSS design systems</li>
                <li>APIs &amp; integrations</li>
                <li>Performance &amp; accessibility</li>
            </ul>
            </div>
            <div className="space-y-3">
            <h2 className="text-xl font-semibold uppercase tracking-wide">Stack</h2>
            <ul className="list-disc pl-5 text-gray-700">
                <li>JavaScript / TypeScript (learning path)</li>
                <li>Next.js, React</li>
                <li>Node.js</li>
                <li>Basic AI/agents (in progress)</li>
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