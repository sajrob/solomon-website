"use client";

import { motion } from "framer-motion";
import { Shield, Activity, RefreshCw, FileText, Lock, Globe, Database, ArrowRight, Gauge, Layers } from "lucide-react";
import Link from "next/link";

const RETENTION_SPECS = [
    {
        id: "SLA-01",
        title: "Availability & Uptime Guarantee",
        description: "Zero-latency business operations require proactive monitoring. We maintain a system-first approach to availability.",
        metrics: [
            { label: "Target Uptime", value: "99.9%" },
            { label: "Critical Response", value: "< 4 Hours" },
            { label: "Status Checks", value: "Continuous" }
        ],
        features: [
            "Proactive system health monitoring",
            "Emergency failover infrastructure",
            "Real-time latency alerts",
            "Zero-downtime deployment pipelines"
        ]
    },
    {
        id: "SEC-02",
        title: "Hardened Security Protocols",
        description: "Post-deployment systems are targets. We ensure your infrastructure evolves faster than the threats.",
        metrics: [
            { label: "Patch Cycle", value: "Bi-Weekly" },
            { label: "Audit Frequency", value: "Monthly" },
            { label: "SSL/TLS Grade", value: "A+" }
        ],
        features: [
            "Continuous CVE monitoring & patching",
            "WAF (Web Application Firewall) tuning",
            "Automated database redundancy",
            "Credential & access control rotation"
        ]
    },
    {
        id: "PERF-03",
        title: "Performance Stewardship",
        description: "Technical debt is the enemy of retention. We keep Core Web Vitals at the highest tier through continuous tuning.",
        metrics: [
            { label: "CWV Target", value: "95+" },
            { label: "Image Weights", value: "Optimized" },
            { label: "Server Response", value: "< 200ms" }
        ],
        features: [
            "Recursive image and asset optimization",
            "Database query performance audits",
            "Caching layer strategy (Edge/CDN)",
            "Scalability forecasting"
        ]
    },
    {
        id: "DOC-04",
        title: "Knowledge & Continuity",
        description: "Managed infrastructure shouldn't be a black box. We provide comprehensive technical documentation and staff alignment.",
        metrics: [
            { label: "Doc Freshness", value: "Real-time" },
            { label: "Training Sessions", value: "As Needed" },
            { label: "Handover Readiness", value: "100%" }
        ],
        features: [
            "Living technical documentation",
            "Staff administrative workshops",
            "System architecture mapping",
            "Onboarding/Offboarding protocols"
        ]
    }
];

export default function RetentionPage() {
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
                        <Shield className="w-4 h-4" />
                        <span>/ RETENTION_PROTOCOL_V1.0</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        Strategic Stewardship.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl text-white/50 text-xl leading-relaxed font-light italic"
                    >
                        "I don't just build and hand over. I engineer systems for long-term operational integrity,
                        ensuring that performance, security, and scalability remain the standard, not an afterthought."
                    </motion.p>
                </header>

                {/* CCNA Certification Badge / Callout */}
                <div className="mb-32 flex items-center justify-center">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
                        <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-industrial-blue/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative border-4 border-industrial-blue/40 rounded-full p-4">
                                <Globe className="w-full h-full text-industrial-blue" />
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <div className="inline-block px-3 py-1 bg-industrial-blue/10 border border-industrial-blue/20 rounded-full text-[10px] font-mono text-industrial-blue uppercase tracking-widest mb-2">
                                Network_Engineering_Standard
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">CCNA Rooted Infrastructure</h2>
                            <p className="text-white/50 leading-relaxed font-light">
                                My approach to retention is built on Cisco-standard networking fundamentals.
                                We don't just manage the code; we manage the integrity of the entire data path,
                                from the client interface to the server core.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Retention Specs Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-32">
                    {RETENTION_SPECS.map((spec, i) => (
                        <motion.div
                            key={spec.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl hover:bg-white/[0.07] transition-all"
                        >
                            <div className="absolute top-0 right-0 p-8 text-3xl md:text-4xl font-mono font-bold text-white/[0.03] group-hover:text-industrial-blue/5 transition-colors">
                                {spec.id}
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight">{spec.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed italic">{spec.description}</p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                                    {spec.metrics.map((metric, mi) => (
                                        <div key={mi} className="space-y-1">
                                            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{metric.label}</div>
                                            <div className="text-industrial-blue font-bold font-mono">{metric.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-4">
                                    {spec.features.map((feature, fi) => (
                                        <li key={fi} className="flex gap-4 text-sm text-white/60 leading-relaxed group/item">
                                            <RefreshCw className="w-4 h-4 text-industrial-blue/40 mt-1 shrink-0 group-hover/item:rotate-180 transition-transform duration-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Systems Visual */}
                <section className="mb-32 relative overflow-hidden rounded-3xl border border-white/10 bg-industrial-slate p-8 md:p-20">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Gauge className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold tracking-tighter">Automated Performance Gauging.</h2>
                            <p className="text-white/50 leading-relaxed italic border-l-2 border-industrial-blue/30 pl-6">
                                "Sustainability is engineered by monitoring what others ignore.
                                We track the decay of performance benchmarks to intervene before failure becomes visible."
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-industrial-emerald/10 border border-industrial-emerald/20 text-industrial-emerald text-[10px] font-mono rounded">SYSTEM_HEALTH: OK</div>
                                <div className="px-4 py-2 bg-industrial-blue/10 border border-industrial-blue/20 text-industrial-blue text-[10px] font-mono rounded">LATENCY_STABLE</div>
                                <div className="px-4 py-2 bg-industrial-amber/10 border border-industrial-amber/20 text-industrial-amber text-[10px] font-mono rounded">CORE_VITALS: PASS</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-xl">
                            {[
                                { icon: Database, label: "DB_SYNC", status: "STABLE" },
                                { icon: Layers, label: "CDN_EDGE", status: "DISTRIBUTED" },
                                { icon: Activity, label: "MONITOR", status: "ACTIVE" },
                                { icon: Lock, label: "TLS_AES", status: "ENCRYPTED" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-industrial-slate p-6 space-y-3">
                                    <stat.icon className="w-5 h-5 text-industrial-blue/60" />
                                    <div className="text-[10px] font-mono text-white/30 uppercase">{stat.label}</div>
                                    <div className="text-xs font-bold text-white/80">{stat.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center space-y-12">
                    <div className="inline-flex items-center gap-2 text-industrial-blue font-mono text-xs uppercase tracking-widest">
                        <FileText className="w-4 h-4" />
                        Operational_Continuity_Guaranteed
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                        Ready to stabilize your digital infrastructure?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/audit"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-industrial-slate font-bold rounded hover:bg-white/90 transition-all flex items-center justify-center gap-3 group"
                        >
                            INITIATE_SYSTEM_AUDIT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    <div>RETENTION_DOC // REV_2026.04</div>
                    <div>Stewardship // Absolute_Integrity</div>
                </footer>
            </div>
        </div>
    );
}
