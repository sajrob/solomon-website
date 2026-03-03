"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "/services", label: "/services" },
        { href: "/warehouse", label: "/warehouse" },
        { href: "/audit", label: "/audit", color: "hover:text-industrial-emerald" },
        { href: "/about", label: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-industrial-slate/80 backdrop-blur-md">
            <nav className="container mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
                <Link href="/" className="flex items-center gap-2 font-bold text-base tracking-tighter">
                    <Cpu className="w-5 h-5 text-industrial-blue" />
                    <span><span className="text-industrial-blue">SOLO</span>MON</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-white/60">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-industrial-blue transition-colors ${link.color || ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/audit" className="hidden sm:block px-4 py-2 bg-industrial-blue text-white font-bold hover:bg-industrial-blue/90 transition-all rounded shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        START_AUDIT
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-industrial-slate border-b border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-4 font-mono">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg text-white/60 hover:text-industrial-blue transition-colors py-2 border-b border-white/5 last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/audit"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 px-6 py-4 bg-industrial-blue text-white font-bold text-center rounded shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            START_DIAGNOSTIC_AUDIT
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
