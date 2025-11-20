    'use client';

    import { useState, useEffect } from 'react';
    import styles from './header.module.css';

    export default function Header() {
    const [isDarkSection, setIsDarkSection] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        const headerHeight = 64;

        const isSectionDark = (section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= headerHeight && rect.bottom >= 50;
        };

        if (isSectionDark(aboutSection) || isSectionDark(projectsSection)) {
        setIsDarkSection(true);
        } else {
        setIsDarkSection(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
    <header
        className={`
        fixed
        top-0 left-0 w-full
        md:top-2.5 md:left-1/2 md:-translate-x-1/2 md:w-[80%]
        px-4 md:px-10
        border-round border-solid z-50
        bg-white/20 py-2 mt-0 shadow-sm backdrop-blur-sm shadow-lg backdrop-saturate-150
        transition-colors duration-300
        rounded-none md:rounded-4xl
        ${isDarkSection ? 'text-white' : 'text-slate-900'}
        `}
    >
        <div className="p-3 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Name – always visible */}
        <div className="text-lg sm:text-xl md:text-2xl font-medium">
            <a href="#">
            <span className="hover:text-emerald-400 transition-colors duration-150 ease-in-out">
                QUAM B
            </span>
            </a>
        </div>

        {/* Nav – hidden on small/medium, visible on lg+ */}
        <nav className={`${styles.navbar} ${styles.open} hidden md:block`}>
            <div className="flex space-x-2 text-2xl py-1 px-0 rounded-[0.25rem]">
            <ul className="flex text-base md:text-xl lg:text-lg gap-5 lg:gap-12">
                <li>
                <a href="/#about">
                    <span className="hover:text-emerald-400">About</span>
                </a>
                </li>
                <li>
                <a href="/#projects">
                    <span className="hover:text-emerald-400">Projects</span>
                </a>
                </li>
                <li>
                <a href="/#contact">
                    <span className="hover:text-emerald-400">Contact</span>
                </a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    </header>
    );
    }
