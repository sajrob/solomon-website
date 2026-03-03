"use client";

import { ArrowRight, Code2, Network, Zap, Activity, Cpu, Search, CheckCircle2, Shield, Palette, Monitor } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import TechnicalPhase from "@/features/portfolio/components/TechnicalPhase";

const METHODOLOGY_PHASES = [
    {
        number: "01",
        title: "Agnostic Discovery",
        description: "We don't start with a solution; we start with your operational reality. We audit your current friction points to determine the most efficient path forward.",
        requirements: [
            "User-maintenance capability assessment",
            "Functional constraint mapping",
            "Hidden technical debt identification",
            "Future-scale requirement modeling"
        ],
        solutions: [
            "Technology-agnostic roadmap",
            "Right-sized platform selection",
            "Risk-mitigation strategy",
            "KPI-driven success metrics"
        ]
    },
    {
        number: "02",
        title: "Precision Engineering",
        description: "Whether it's a headless commerce engine or a simplified CMS for non-technical staff, we build for high-performance and low-friction management.",
        requirements: [
            "Requirement-specific architecture selection",
            "Systemic reliability protocols",
            "Custom-to-needs data integration",
            "Optimized deployment pipelines"
        ],
        solutions: [
            "Platform-specific optimization (Core Web Vitals)",
            "Scalable infrastructure backend",
            "Staff-ready administrative interfaces",
            "Documentation-first delivery"
        ]
    },
    {
        number: "03",
        title: "Strategic Stewardship",
        description: "Post-deployment isn't the end; it's the stabilization phase. We manage the complexity so you can focus on the business.",
        requirements: [
            "Proactive system hardening",
            "Continuous performance tuning",
            "Administrative staff training",
            "Expansion-path monitoring"
        ],
        solutions: [
            "Managed uptime & reliability",
            "On-demand Fractional CTO support",
            "System evolution planning",
            "Zero-friction technical oversight"
        ]
    }
];

export default function ServicesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-industrial-slate text-white pt-24 pb-20 px-6 bg-grid-pattern bg-[size:50px_50px]">
            <div className="max-w-6xl mx-auto">
                <header className="mb-32">
                    <motion.div
                        {...fadeIn}
                        className="flex items-center gap-4 mb-4 text-industrial-blue font-mono text-sm tracking-widest uppercase"
                    >
                        <Cpu className="w-4 h-4" />
                        <span>/ REQ_SPECIFICATION_V2</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        Solutions Over Syntax.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl text-white/50 text-xl leading-relaxed font-light"
                    >
                        We don't force business problems into a pre-selected tech stack. We engineer systems based
                        entirely on your operational needs, staff capabilities, and growth objectives.
                        The technology is a tool; the solution is the standard.
                    </motion.p>
                </header>

                {/* Problem-Solution Matrix (Platform Agnostic) */}
                <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-32 overflow-hidden rounded-2xl">
                    <div className="bg-industrial-slate p-8 md:p-12 space-y-8">
                        <div className="w-12 h-12 bg-industrial-blue/10 border border-industrial-blue/20 rounded flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-industrial-blue" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Adaptive Web Systems</h2>
                        <div className="space-y-6">
                            <div className="group">
                                <div className="text-[10px] font-mono text-white/30 uppercase mb-2 tracking-widest">Client Environment</div>
                                <div className="text-white/60 text-sm leading-relaxed border-l-2 border-industrial-blue/20 pl-4 group-hover:border-industrial-blue transition-colors">
                                    "We need a robust site, but our non-technical marketing team needs to update content daily without touching code."
                                </div>
                            </div>
                            <div className="group">
                                <div className="text-[10px] font-mono text-industrial-blue uppercase mb-2 tracking-widest">Engineered Path</div>
                                <div className="text-white text-sm leading-relaxed bg-white/5 p-4 rounded border border-white/5 group-hover:bg-industrial-blue/5 transition-colors">
                                    Implementation of a hardened, modular WordPress ecosystem or user-friendly CMS, optimized for performance while maintaining simple staff administration.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-industrial-slate p-8 md:p-12 space-y-8 border-t md:border-t-0 border-white/10">
                        <div className="w-12 h-12 bg-industrial-emerald/10 border border-industrial-emerald/20 rounded flex items-center justify-center">
                            <Network className="w-6 h-6 text-industrial-emerald" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contextual Infrastructure</h2>
                        <div className="space-y-6">
                            <div className="group">
                                <div className="text-[10px] font-mono text-white/30 uppercase mb-2 tracking-widest">Client Environment</div>
                                <div className="text-white/60 text-sm leading-relaxed border-l-2 border-industrial-emerald/20 pl-4 group-hover:border-industrial-emerald transition-colors">
                                    "We are scaling our office footprint but don't have the budget or need for a complex enterprise data center."
                                </div>
                            </div>
                            <div className="group">
                                <div className="text-[10px] font-mono text-industrial-emerald uppercase mb-2 tracking-widest">Engineered Path</div>
                                <div className="text-white text-sm leading-relaxed bg-white/5 p-4 rounded border border-white/5 group-hover:bg-industrial-emerald/5 transition-colors">
                                    Simplified, high-reliability network architecture using prosumer-grade hardware that balances enterprise reliability with small-business overhead.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-32 grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-industrial-blue" />
                            Platform Agnostic
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                            Whether it's WordPress, Next.js, Linux, or Managed SaaS—if it solves the problem efficiently and sustainably, it's the right choice.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-industrial-blue" />
                            Operational Fit
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                            We build systems that your team can actually use. Code elegance is secondary to business utility and maintenance ease.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-industrial-blue" />
                            Strategic Alignment
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                            Technology spend should be an investment with a measurable ROI, not just a recurring maintenance cost for trendy stacks.
                        </p>
                    </div>
                </div>

                {/* Methodology Section */}
                <div className="mb-20">
                    <h2 className="text-sm md:text-xl font-mono text-industrial-blue uppercase tracking-widest md:tracking-[0.3em] mb-12 flex items-center gap-4">
                        <Zap className="w-5 h-5" />
                        <span className="break-all md:break-normal">Objective_Driven_Methodology</span>
                    </h2>
                    <div className="space-y-4">
                        {METHODOLOGY_PHASES.map((phase, i) => (
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
                </div>

                {/* Inclusive Services / Retainer Section */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-mono text-industrial-blue uppercase tracking-[0.3em] mb-4">
                                / RETAINER_INCLUSIONS_V1.0
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                                The Integrated IT Department.
                            </h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-md md:text-right"
                        >
                            <p className="text-white/50 text-sm leading-relaxed italic border-r-2 border-industrial-blue/20 pr-6 mr-0 md:mr-0 md:pr-6 hidden md:block">
                                Strategic partners on retainer gain access to a full-spectrum technical and creative suite.
                                We don't just advise; we execute as your internal technology tier.
                            </p>
                            <p className="text-white/50 text-sm leading-relaxed italic border-l-2 border-industrial-blue/20 pl-6 md:hidden">
                                Strategic partners on retainer gain access to a full-spectrum technical and creative suite.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Creative Infrastructure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/5 bg-white/[0.02] rounded-2xl p-8 space-y-8 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-industrial-blue/20 flex items-center justify-center text-industrial-blue group-hover:bg-industrial-blue/10 transition-colors">
                                    <Palette className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold uppercase tracking-tight">Creative Infrastructure</h4>
                            </div>
                            <ul className="space-y-4 font-mono text-[11px] text-white/40 uppercase tracking-widest">
                                <li className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-industrial-blue shrink-0">0A</span>
                                    <div className="space-y-1">
                                        <div className="text-white/80">Graphics Design</div>
                                        <div className="text-[9px] opacity-60">Logos // Posters // Web Graphics // UX Assets</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-industrial-blue shrink-0">0B</span>
                                    <div className="space-y-1">
                                        <div className="text-white/80">Brand Identity Package</div>
                                        <div className="text-[9px] opacity-60">Letterheads // Invoices // Receipts // Brochures</div>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Technical Infrastructure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="border border-white/5 bg-white/[0.02] rounded-2xl p-8 space-y-8 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-industrial-emerald/20 flex items-center justify-center text-industrial-emerald group-hover:bg-industrial-emerald/10 transition-colors">
                                    <Monitor className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold uppercase tracking-tight">Technical Infrastructure</h4>
                            </div>
                            <ul className="space-y-4 font-mono text-[11px] text-white/40 uppercase tracking-widest">
                                <li className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-industrial-emerald shrink-0">01</span>
                                    <div className="space-y-1">
                                        <div className="text-white/80">IT Deployment</div>
                                        <div className="text-[9px] opacity-60">Computer Setup // Hardware Installation</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-industrial-emerald shrink-0">02</span>
                                    <div className="space-y-1">
                                        <div className="text-white/80">Software Ops</div>
                                        <div className="text-[9px] opacity-60">Custom Installation // Platform Configuration</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-industrial-emerald shrink-0">03</span>
                                    <div className="space-y-1">
                                        <div className="text-white/80">Security Audits</div>
                                        <div className="text-[9px] opacity-60">Continuous Monitoring // Hardening Protocols</div>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mt-32 relative overflow-hidden rounded-3xl border border-white/10 bg-industrial-slate p-8 md:p-20 text-center">
                    <div className="absolute top-0 right-0 p-8 flex gap-4 opacity-20 pointer-events-none">
                        <Activity className="w-24 h-24 text-white" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Focus on your business, not the stack.</h2>
                        <p className="text-white/50 text-lg leading-relaxed italic">
                            "The best technology is the one that disappears into your workflow. Let's find the solution that fits your specific operational DNA."
                        </p>
                        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4">
                            <Link
                                href="/audit"
                                className="px-8 py-4 bg-white text-industrial-slate font-bold rounded hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                            >
                                START_DISCOVERY_AUDIT <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/warehouse"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                VIEW_ADAPTIVE_SOLUTIONS <Search className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/retention"
                                className="px-8 py-4 bg-industrial-blue/10 border border-industrial-blue/20 text-industrial-blue font-bold rounded hover:bg-industrial-blue/20 transition-all flex items-center justify-center gap-2 font-mono text-sm"
                            >
                                RETENTION_DOCS <Shield className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                <footer className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    <div>Spec_Sheet // Solutions_Agnostic_V2</div>
                    <div>Operational_Integrity // Guaranteed</div>
                </footer>
            </div>
        </div>
    );
}
