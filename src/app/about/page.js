    'use client';

    import { motion, useInView } from "framer-motion";
    import { useEffect, useRef } from "react";

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
    <main className="overscroll-contain">
        <section
        id="about"
        role="region"
        aria-labelledby="about-heading"
        className="flex items-center justify-center w-full "
        >
        <div className="flex flex-col items-start space-y-3 max-w-screen-lg w-full lg:w-[50vw] mx-auto px-6">
            <motion.h1
            id="about-heading"
            className="lg:text-3xl lg:my-10 md:text-2xl font-bold tracking-widest uppercase text-white mb-4 border-l-1 border-green-400 pl-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            About me
            </motion.h1>

            <motion.p
            ref={textRef}
            className="lg:text-xl lg:mb-1 font-helvetica font-light text-justify text-white leading-relaxed md:text-lg indent-4"
            initial={{ opacity: 0, y: 40 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            I’m a Mechatronics Engineer who fell in love with how technology connects people and ideas. Now I bring that curiosity to the digital space, building modern, high-performing web experiences and exploring AI-driven systems.
            </motion.p>

            <motion.div
            ref={listRef}
            className="grid lg:grid-cols-1 gap-6 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={listInView ? { opacity: 1, y: 0} : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <div className="space-y-3 my-3">
                <h2 className="text-xl font-bold uppercase tracking-wide">What I Do</h2>
                <div className="grid lg:grid-cols-3 text-gray-300 text-lg text-left gap-2">
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">Front‑end Development</div>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">Back‑end Development</div>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">APIs &amp; integrations</div>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">UI/UX Design Systems</div>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">Automation & IoT system </div>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors">Performance &amp; Accessibility</div>
                </div>
            </div>
            <div className="space-y-3 my-3">
            <h2 className="text-xl font-bold uppercase tracking-wider">Stack</h2>
            <div className="grid lg:grid-cols-2 text-gray-300 text-lg text-left gap-2">
                <div className="cursor-pointer text-gray-300 hover:text-white transition-colors"><span className="font-semibold">Front‑End: </span>Next.js, React, JavaScript, TypeScript</div>
                <div className="cursor-pointer text-gray-300 hover:text-white transition-colors"><span className="font-semibold">Back‑End: </span>Node.js (Express), Python, REST APIs </div>
                <div className="cursor-pointer text-gray-300 hover:text-white transition-colors"><span className="font-semibold">Databases: </span>SQL (MySQL) &amp; MongoDB</div>
                <div className="cursor-pointer text-gray-300 hover:text-white transition-colors"><span className="font-semibold">Version Control: </span>Git &amp; GitHub</div>
                <div className="cursor-pointer text-gray-300 hover:text-white transition-colors"><span className="font-semibold">Others: </span>AI/agents (in progress)</div>
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