"use client";

import { Cpu } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-industrial-slate py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 font-mono text-xs text-white/40">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 font-bold text-base tracking-tighter mb-4 md:mb-0">
                        <Cpu className="w-5 h-5 text-industrial-blue" />
                        <span><span className="text-industrial-blue">SOLO</span>MON</span>
                    </div>
                    <p className="max-w-xs leading-relaxed uppercase tracking-tighter mt-4">
                        Managed IT and Design Engineering for high-availability businesses.
                        Built on networking fundamentals.
                    </p>
                </div>
                <div>
                    <h4 className="text-white mb-4 font-bold lowercase tracking-widest">{"// links"}</h4>
                    <ul className="space-y-2">
                        <li><a href="https://github.com/sajrob" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a></li>
                        <li><Link href="/retention" className="hover:text-white transition-colors">RETENTION_DOCS</Link></li>
                    </ul>
                </div>
                <div className="text-left md:text-right flex flex-col justify-end">
                    <div className="mb-2">SYSTEM_CLOCK: {new Date().getFullYear()}</div>
                    <Link href="https://www.google.com/maps/place/Freetown/@8.4797303,-13.266966,14z/data=!3m1!4b1!4m6!3m5!1s0x3dd02fb554608749:0x8c53842247484640!8m2!3d8.4797303!4d-13.266966!16zL20vMDF0c3F6?entry=ttu" target="_blank" rel="noopener noreferrer">LOC: [8.47973, -13.266966]</Link>
                </div>
            </div>
        </footer>
    );
}
