"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface TechnicalPhaseProps {
    phaseNumber: string;
    title: string;
    description: string;
    requirements: string[];
    solutions: string[];
}

export default function TechnicalPhase({ phaseNumber, title, description, requirements, solutions }: TechnicalPhaseProps) {
    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-12 md:py-20 border-t border-white/5">
            <div className="lg:col-span-4 sticky top-16 lg:top-24 h-fit space-y-6 z-20 bg-industrial-slate/95 backdrop-blur-md -mx-6 px-6 py-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:mx-0">
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-mono font-bold text-white/10">{phaseNumber}</span>
                    <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
                </div>
                <p className="text-sm text-white/50 leading-relaxed italic">
                    {description}
                </p>
            </div>

            <div className="lg:col-span-8 space-y-12">
                <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
                    <div className="bg-industrial-slate p-8 space-y-6">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-industrial-amber/70 uppercase tracking-widest">
                            <AlertCircle className="w-3 h-3" /> System_Requirement
                        </div>
                        <ul className="space-y-4">
                            {requirements.map((req, i) => (
                                <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed group">
                                    <div className="w-1 h-1 rounded-full bg-industrial-amber/30 mt-2 shrink-0 group-hover:bg-industrial-amber transition-colors" />
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/[0.02] p-8 space-y-6">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-industrial-emerald uppercase tracking-widest">
                            <CheckCircle2 className="w-3 h-3" /> Engineered_Solution
                        </div>
                        <ul className="space-y-4">
                            {solutions.map((sol, i) => (
                                <li key={i} className="flex gap-3 text-sm text-white/80 leading-relaxed group">
                                    <div className="w-1 h-1 rounded-full bg-industrial-emerald mt-2 shrink-0" />
                                    {sol}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
