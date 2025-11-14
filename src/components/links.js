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
    className="text-base border border-black/20 font-medium rounded-xl text-black hover:text-green-600 transition-all ring-1 ring-white/20 bg-white/50 backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 duration-2"
    >
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
        className={`${styles.links} absolute mt-1 flex flex-row text-black gap-2 p-3 z-50 min-w-auto`}
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
                className="flex items-center justify-center w-12 h-12 gap-3 rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:ease-in-out hover:border-green-400 transition-transform transition-shadow duration-300"
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
