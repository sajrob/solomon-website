"use client";

import { ArrowUpRight, Box, Code2, Database, Globe, Layers, Server } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function WarehousePage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-industrial-slate text-white pt-24 pb-20 px-6 bg-grid-pattern bg-[size:50px_50px]">
            <div className="max-w-6xl mx-auto">
                <header className="mb-20">
                    <motion.div
                        {...fadeIn}
                        className="flex items-center gap-4 mb-4 text-industrial-blue font-mono text-sm tracking-widest uppercase"
                    >
                        <Box className="w-4 h-4" />
                        <span>/ PROJECT_WAREHOUSE</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-industrial-blue/20"
                    >
                        Objective Outcomes.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-xl text-white/50 text-lg leading-relaxed font-light"
                    >
                        A repository of solved business problems. These aren't just technical deployments;
                        they are engineered systems designed to drive terminal growth and operational stability.
                    </motion.p>
                </header>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-industrial-blue/5"
                >
                    {[...PORTFOLIO_DATA]
                        .sort((a, b) => b.date.localeCompare(a.date))
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={fadeIn}
                                className="group relative bg-industrial-slate p-8 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col h-full 
                                border-b border-white/5 md:border-r md:last:border-r-0"
                            >
                                <div className="absolute top-6 right-6 font-mono text-xs text-white/20 group-hover:text-industrial-blue transition-colors">
                                    {project.id}
                                </div>

                                <div className="mb-8 mt-2">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-industrial-blue/20">
                                        {index % 2 === 0 ? <Code2 className="w-6 h-6 text-industrial-blue" /> : <Server className="w-6 h-6 text-industrial-emerald" />}
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-industrial-blue transition-colors">
                                            {project.name}
                                        </h3>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${project.status.includes("LIVE") ? 'border-industrial-emerald/30 text-industrial-emerald bg-industrial-emerald/5' :
                                            'border-white/20 text-white/40 bg-white/5'
                                            }`}>
                                            {project.status.split("_")[0]}
                                        </span>
                                    </div>

                                    <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="text-[10px] uppercase tracking-wider text-white/30 font-mono">
                                                #{tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="text-xs font-mono text-white/30">
                                            <span className="text-industrial-blue mr-2">►</span>
                                            {project.metric}
                                        </div>
                                        <a href={project.link} className="flex items-center gap-2 text-xs font-bold tracking-wider text-white hover:text-industrial-blue transition-colors uppercase">
                                            View Case Study <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    {/* Placeholder for "Coming Soon" or styling filler */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={`filler-${i}`}
                            variants={fadeIn}
                            className="bg-industrial-slate p-8 flex items-center justify-center opacity-30 pointer-events-none border-b border-white/5 md:border-r md:last:border-r-0"
                        >
                            <div className="text-center">
                                <Database className="w-8 h-8 text-white/10 mx-auto mb-4" />
                                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Awaiting_Declass...</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
