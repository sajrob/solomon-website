"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

interface CaseStudyHeaderProps {
    title: string;
    client: string;
    date: string;
    role: string;
    metrics: { label: string; value: string }[];
}

export default function CaseStudyHeader({ title, client, date, role, metrics }: CaseStudyHeaderProps) {
    return (
        <header className="relative space-y-12 mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    href="/warehouse"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-industrial-blue transition-colors uppercase tracking-[0.2em] group"
                >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Back_to_Warehouse
                </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-industrial-blue" />
                        <span className="text-industrial-blue font-mono text-xs tracking-[0.3em] uppercase">Case_Study_Log</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
                        {title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid grid-cols-2 gap-8 p-8 bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                >
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            <User className="w-3 h-3" /> Client
                        </div>
                        <div className="text-sm font-bold text-white/80">{client}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            <Calendar className="w-3 h-3" /> Date
                        </div>
                        <div className="text-sm font-bold text-white/80">{date}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            <Target className="w-3 h-3" /> Role
                        </div>
                        <div className="text-sm font-bold text-white/80">{role}</div>
                    </div>
                    <div className="space-y-1 text-industrial-emerald">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-industrial-emerald/50 uppercase tracking-widest">
                            <BarChart3 className="w-3 h-3" /> Primary_Metric
                        </div>
                        <div className="text-sm font-bold">{metrics[0].value}</div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
                {metrics.map((metric, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-industrial-slate p-6 text-center"
                    >
                        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2">{metric.label}</div>
                        <div className="text-xl font-bold text-white tracking-tight">{metric.value}</div>
                    </motion.div>
                ))}
            </div>
        </header>
    );
}
