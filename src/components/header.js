'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';
// import Hamburger from './hamburger';

export default function Header() {
    const [navOpen, setNavOpen] = useState(true);

    return (
        <header className="bg-white text-white border border-white py-3 shadow-md">
            <div className="p-1 flex justify-between items-center">
                <div className="text-xl text-black align-right">qb</div>

                <nav className={`${styles.navbar} ${navOpen ? styles.open : ''}`}>
                    <div className="flex space-x-5 bg-black text-white text-xl py-1.5 px-3 rounded-[0.25rem]">
                        <ul className={`flex lg:flex text-base lg:text-lg sm:text-sm/6 gap-3 lg:gap-10`}>
                            <li><Link href="/"><span className="hover:text-gray-300">Home</span></Link></li>
                            <li><Link href="/#about"><span className="hover:text-gray-300">About</span></Link></li>
                            <li><Link href="/#projects"><span className="hover:text-gray-300">Projects</span></Link></li>
                            <li><Link href="/#contact"><span className="hover:text-gray-300">Contact</span></Link></li>
                        </ul>
                    </div>
                </nav>

                {/* <Hamburger label="Toggle menu" isOpen={navOpen} onToggle={setNavOpen} className="lg:hidden" /> */}
            </div>
        </header>
    );
}
