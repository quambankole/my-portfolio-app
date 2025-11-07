'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';
// import Hamburger from './hamburger';

export default function Header() {
    const [navOpen, setNavOpen] = useState(true);

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-white/20 text-black border-b border-gray-100 py-3 mt-0 shadow-sm backdrop-blur-sm shadow-lg backdrop-saturate-150">
            <div className="p-3 flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-xl text-black align-right"><Link href="/"><span className="hover:text-green-400 transition-colors duration-250 ease-in-out">QUAM B</span></Link></div>

                <nav className={`${styles.navbar} ${navOpen ? styles.open : ''}`}>
                    <div className="flex space-x-2 text-black text-2xl py-1 px-0 rounded-[0.25rem]">
                        <ul className={`flex lg:flex text-base lg:text-lg sm:text-sm/6 gap-3 lg:gap-10`}>
                            <li><Link href="/#about"><span className="hover:text-gray-300">About</span></Link></li>
                            <li><Link href="/#projects"><span className="hover:text-gray-300">Projects</span></Link></li>
                            <li><Link href="/#contact"><span className="hover:text-gray-300">Contact</span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );``
}
