import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Quam Bankole – Portfolio',
  description: 'Mechatronics, IoT, and Frontend projects'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50
                    focus:bg-black focus:text-white focus:px-3 focus:py-2 rounded"
        >
          Skip to main content
        </a>

        <nav aria-label="Primary" className="border-b">
          {/* … your nav … */}
        </nav>

        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>

        <footer className="border-t">
          {/* … */}
        </footer>
      </body>
    </html>
  );
}
