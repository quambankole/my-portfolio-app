'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './links.module.css';

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
    className="text-base border border-black/20 font-medium rounded-xl text-black hover:text-green-600 transition-colors ring-1 ring-white/20 bg-white/50 backdrop-blur-md shadow-lg py-2 px-3 uppercase transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
    >
    Links
    </button>

    {/* Card-style popup menu */}
    {linkOpen && (
    <nav
        className={`${styles.links} absolute left-0 mt-2 flex flex-col space-y-3 bg-white/95 text-black border border-gray-100 p-3 rounded-xl shadow-lg backdrop-blur-sm backdrop-saturate-150 z-50 min-w-[14rem]`}
        aria-label="Social Links">
        {[
            { label: "Code", name: "GitHub", href: "https://github.com/" },
            { label: "Network", name: "LinkedIn", href: "https://linkedin.com/" },
            { label: "Email", name: "Get in touch", href: "mailto:you@example.com" },
            { label: "Social", name: "Instagram", href: "https://instagram.com/" },
        ].map((item) => (
        <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noreferrer"
            className="flex flex-col items-start rounded-xl border border-black/10 bg-white shadow-sm px-3 py-2 hover:shadow-md hover:-translate-y-0.5 hover:border-green-400 transition-transform transition-shadow duration-200"
        >
            <span className="text-xs font-semibold tracking-wide text-gray-500">{item.label}</span>
            <span className="text-sm font-medium">{item.name}</span>
        </a>
        ))}
    </nav>
    )}
</div>
);
}