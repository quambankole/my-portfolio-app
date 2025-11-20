'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './links.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Links() {
const [linkOpen, setLinkOpen] = useState(false);
const containerRef = useRef(null);

const toggleLinks = () => {
setLinkOpen((prev) => !prev);
};

// Close the popup when clicking outside
useEffect(() => {
function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
    setLinkOpen(false);
    }
}

if (linkOpen) {
    document.addEventListener('mousedown', handleClickOutside);
} else {
    document.removeEventListener('mousedown', handleClickOutside);
}

return () => {
    document.removeEventListener('mousedown', handleClickOutside);
};
}, [linkOpen]);

return (
<div ref={containerRef} className="relative inline-block">
    {/* Trigger button */}
    <button
    type="button"
    onClick={toggleLinks}
    className={`flex uppercase font-medium items-center justify-center text-sm md:text-l px-8 w-11 h-9 md:px-10 md:w-20 md:h-12 gap-3 rounded-xl border border-slate-900 bg-white text-slate-900 shadow-sm
                transition-all duration-500 ease-out text-sm
                hover:bg-slate-900 hover:text-white hover:font-medium hover:border-slate-900`}>
    Links
    </button>

    {/* Card-style popup menu */}
    <AnimatePresence>
    {linkOpen && (
    <motion.nav
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`${styles.links} absolute mt-1 flex flex-row text-slate-900 gap-2 p-3 z-50 min-w-auto`}
        aria-label="Social Links"
    >
        {[
            { label: "Code", name: "GitHub", href: "https://github.com/" },
            { label: "Network", name: "LinkedIn", href: "https://linkedin.com/" },
            { label: "Social", name: "Instagram", href: "https://instagram.com/" },
        ].map((item) => (
            <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 gap-3 rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 hover:ease-in-out hover:border-slate-900 transition-transform transition-shadow duration-300"
            >
                <FontAwesomeIcon
                    icon={
                        item.name === 'GitHub' ? faGithub :
                        item.name === 'LinkedIn' ? faLinkedin :
                        faInstagram
                    }
                    className="text-3xl"
                />
            </a>
        ))}
    </motion.nav>
    )}
    </AnimatePresence>
</div>
);
}
