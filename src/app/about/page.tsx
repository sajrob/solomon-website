"use client";

import {
    Activity,
    TrendingUp,
    Shield,
    Zap,
    Coins,
    Terminal,
    CheckCircle2,
    ArrowRight,
    Layout,
    Network,
    Crosshair
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const disciplines = [
        {
            icon: Layout,
            label: "Creative Infrastructure",
            desc: "Engineering high-conversion brand assets and UX systems that standardize identity across all digital and physical touchpoints."
        },
        {
            icon: Network,
            label: "Technical Resilience",
            desc: "Deploying hardened network protocols and legacy-free software environments that eliminate operational fragility."
        },
        {
            icon: Crosshair,
            label: "Strategic Oversight",
            desc: "Providing fractional CTO leadership to align technical spend with commercial objectives and long-term scalability."
        }
    ];

    const outcomes = [
        {
            id: "01",
            title: "Capital Preservation",
            impact: "Optimizing vendor spend and cloud costs to redirect capital toward growth-centric assets.",
            metric: "Reduced Tech Overhead"
        },
        {
            id: "02",
            title: "Operational Continuity",
            impact: "Hardening systems against downtime to preserve revenue and market reputation during peak load.",
            metric: "99.9% System Uptime"
        },
        {
            id: "03",
            title: "Execution Velocity",
            impact: "Removing technical friction to allow your team to ship products and updates at market speed.",
            metric: "Zero-Friction Deployment"
        },
        {
            id: "04",
            title: "Brand Authority",
            impact: "Unifying visual governance to convert market trust into sustainable terminal revenue.",
            metric: "Cohesive Visual Integrity"
        }
    ];

    return (
        <div className="min-h-screen bg-industrial-slate text-white pt-24 pb-20 px-6 bg-grid-pattern bg-[size:50px_50px]">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="mb-32">
                    <motion.div
                        {...fadeIn}
                        className="flex items-center gap-4 mb-6 text-industrial-blue font-mono text-xs tracking-[0.3em] uppercase"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>/ STRATEGIC_MANIFESTO_V3</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30"
                        >
                            Business First.<br />
                            Technology Second.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white/50 text-xl font-light leading-relaxed border-l-2 border-industrial-blue/20 pl-8"
                        >
                            We don't build tech for tech's sake. We engineer systems designed to bridge the gap
                            between visionary intent and production-ready reality. Our mission is to solve
                            business problems through the lens of technical precision.
                        </motion.p>
                    </div>
                </header>

                {/* Core Disciplines Grid */}
                <section className="mb-32">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-12 border-b border-white/5 pb-4">
                        / CORE_CAPABILITIES
                    </div>
                    <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                        {disciplines.map((item, i) => (
                            <div key={i} className="bg-industrial-slate p-10 space-y-6 hover:bg-white/[0.02] transition-all group">
                                <div className="w-12 h-12 bg-industrial-blue/10 border border-industrial-blue/20 rounded-lg flex items-center justify-center text-industrial-blue group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">{item.label}</h3>
                                <p className="text-sm text-white/40 leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Strategic Impact section */}
                <section className="mb-32 relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <TrendingUp className="w-64 h-64 text-industrial-blue" />
                    </div>

                    <div className="text-[10px] font-mono text-industrial-emerald uppercase tracking-[0.4em] mb-12">
                        / MEASURABLE_OUTCOMES
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {outcomes.map((outcome, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-4"
                            >
                                <div className="text-3xl font-black text-white/5 font-mono">{outcome.id}</div>
                                <h4 className="text-lg font-bold text-industrial-emerald">{outcome.title}</h4>
                                <p className="text-xs text-white/50 leading-relaxed font-light">
                                    {outcome.impact}
                                </p>
                                <div className="pt-4 border-t border-white/5 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                                    Metric: <span className="text-white/60">{outcome.metric}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* The History of Solved Problems (Career) */}
                <section className="mb-32 grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <h2 className="text-3xl font-bold tracking-tighter mb-6 underline decoration-industrial-blue underline-offset-8">
                                Engineering DNA.
                            </h2>
                            <p className="text-white/40 text-sm leading-relaxed mb-8">
                                From managing enterprise server racks to crafting pixel-perfect brand identities, our trajectory is defined by a relentless focus on stability and high-performance execution.
                            </p>
                            <div className="pt-8 space-y-4 opacity-50">
                                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em]">
                                    <CheckCircle2 className="w-4 h-4 text-industrial-emerald" />
                                    <span>CISCO_NETWORKING_VALIDATED</span>
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em]">
                                    <CheckCircle2 className="w-4 h-4 text-industrial-blue" />
                                    <span>DESIGN_SYSTEM_SPECIALISTS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-12">
                        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-8 pb-4 border-b border-white/5">
                            / HISTORY_OF_SOLVED_PROBLEMS
                        </div>

                        <div className="space-y-16 border-l border-white/5 pl-8 md:pl-16 relative">
                            {[
                                {
                                    year: "2023 - Present",
                                    title: "Strategic Partner & Fractional CTO",
                                    context: "Translation of commercial roadmaps into hardened technical systems for high-growth SMBs."
                                },
                                {
                                    year: "2020 - 2023",
                                    title: "Systems Engineer (Infrastructure)",
                                    context: "Operational oversight of enterprise data centers, VLAN segmentation, and high-compliance network security."
                                },
                                {
                                    year: "Pre-2020",
                                    title: "Design Engineer",
                                    context: "Deployment of cohesive brand infrastructure and performance-optimized web architectures."
                                }
                            ].map((milestone, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-4 h-4 bg-industrial-slate border border-white/20 rounded-full group-hover:border-industrial-blue transition-colors duration-300" />
                                    <div className="text-[10px] font-mono text-industrial-blue uppercase mb-2">{milestone.year}</div>
                                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                    <p className="text-sm text-white/40 font-light italic leading-relaxed max-w-xl">
                                        {milestone.context}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="bg-industrial-blue/[0.03] border border-industrial-blue/10 p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready for a Technical Diagnostic?</h2>
                        <p className="text-white/50 text-lg font-light leading-relaxed">
                            Stop guessing about your technical debt. Let us perform an objective audit of your systems and return a strategic roadmap for sustainable growth.
                        </p>
                        <div className="flex justify-center pt-8">
                            <Link
                                href="/audit"
                                className="px-10 py-5 bg-industrial-blue text-white font-bold rounded-lg hover:bg-industrial-blue/90 transition-all flex items-center gap-3 shadow-2xl shadow-industrial-blue/20 group"
                            >
                                <span className="uppercase tracking-[0.2em] text-xs">Initialize System Audit</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    <div>FIRM_PROFILE // STRATEGIC_ENGINEERING</div>
                    <div className="flex gap-8">
                        <span>EST 2020</span>
                        <span>[ FREETOWN, SL ]</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
