'use client';
import React from 'react';
import styles from './hamburger.module.css';

export default function Hamburger({
        label = 'Toggle menu',
        isOpen = false,
        onToggle = () => {},
        className = ''
    }) {
    return (
    <div className={`${styles.nav} inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-8 lg:hidden ${className}`} aria-live="polite">
        <input
        type="checkbox"
        aria-label={label}
        checked={isOpen}
        onChange={(e) => onToggle(e.target.checked)}/>

        <svg viewBox="0 0 100 56" width="100%" height="100%" aria-hidden="true">
        <use href="#menu" />
        <use href="#menu" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true" focusable="false">
            <symbol viewBox="0 0 100 56" id="menu">
                <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
            </symbol>
        </svg>
    </div>
    );
}
