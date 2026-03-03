"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import CaseStudyHeader from "@/features/portfolio/components/CaseStudyHeader";
import TechnicalPhase from "@/features/portfolio/components/TechnicalPhase";
import { Box, Network, Settings, Globe } from "lucide-react";
import { motion } from "framer-motion";

import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = PORTFOLIO_DATA.find(p => p.slug === slug);
    const data = project?.details;

    if (!data) return notFound();

    return (
        <div className="min-h-screen bg-industrial-slate pt-24 pb-20 px-6 bg-grid-pattern bg-[size:50px_50px]">
            <div className="max-w-6xl mx-auto">
                <CaseStudyHeader
                    title={data.title}
                    client={data.client}
                    date={data.date}
                    role={data.role}
                    metrics={data.metrics}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-32"
                >
                    <h2 className="text-xl font-mono text-industrial-blue uppercase tracking-widest mb-6 flex items-center gap-3">
                        Mission_Log
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                        {data.overview}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {data.phases.map((phase, i) => (
                        <TechnicalPhase
                            key={i}
                            phaseNumber={phase.number}
                            title={phase.title}
                            description={phase.description}
                            requirements={phase.requirements}
                            solutions={phase.solutions}
                        />
                    ))}
                </div>

                <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xs font-mono text-white/20 uppercase tracking-[0.3em]">
                        System // Fully_Operational
                    </div>
                    <div className="flex gap-12">
                        <div className="text-center">
                            <div className="text-[10px] font-mono text-white/20 uppercase mb-2">Build_Spec</div>
                            <div className="text-xs font-bold text-white/60 uppercase">Industrial_Standard_v4</div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] font-mono text-white/20 uppercase mb-2">Last_Audit</div>
                            <div className="text-xs font-bold text-white/60 uppercase">2026.02.20</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
