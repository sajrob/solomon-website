"use client";

import React from "react";
import { Layers, Server, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Fractional CTO",
        desc: "Executive-level technical leadership to bridge the gap between business objectives and engineering reality. I ensure your tech spend is an investment, not a recurring fire.",
        icon: Activity,
        specs: ["STRATEGIC ROADMAP", "CAPABILITY AUDIT", "VENDOR ADVOCACY"],
        color: "text-industrial-blue",
    },
    {
        id: "02",
        title: "Adaptive Web Systems",
        desc: "Engineering high-performance web solutions selected specifically for your team's operational capacity and growth goals. Built for utility and speed.",
        icon: Layers,
        specs: ["AGNOSTIC PLATFORM", "STAFF-READY CMS", "CONVERSION OPTIMIZED"],
        color: "text-industrial-emerald",
    },
    {
        id: "03",
        title: "Contextual Infrastructure",
        desc: "Secure, reliable networking grounded in CCNA-certified expertise. We start at the router to ensure your physical assets support your digital scale.",
        icon: Server,
        specs: ["PERIMETER SECURITY", "NETWORK RESILIENCE", "HYBRID OPS"],
        color: "text-white",
    },
];

export const ServicePillars = () => {
    return (
        <section className="py-16 border-t border-white/5 bg-industrial-slate/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-industrial-blue mb-4">
                            [ SERVICES_OVERVIEW ]
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            Full-Stack Infrastructure.<br />
                            <span className="opacity-40 font-light italic">From the physical to the virtual.</span>
                        </h3>
                    </div>
                    <div className="font-mono text-[10px] text-white/30 uppercase border-l border-white/10 pl-4 py-2">
                        REF_CODE: CTO_CATALOG_2026<br />
                        REV: 2.1.0
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-lg overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 bg-industrial-slate hover:bg-white/[0.02] transition-colors 
                                border-b md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 border-white/10`}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className={`p-3 rounded bg-white/5 border border-white/10 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <span className="font-mono text-xs opacity-20 group-hover:opacity-100 transition-opacity">
                                    ID: {service.id}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 group-hover:text-industrial-blue transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-white/50 text-sm leading-relaxed mb-10 min-h-[80px]">
                                {service.desc}
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                                    {"// TECHN_SPECS"}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {service.specs.map((spec) => (
                                        <span
                                            key={spec}
                                            className="px-2 py-1 text-[9px] font-mono border border-white/5 bg-white/[0.03] text-white/70"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 mt-auto">
                                <Link href="/services" className="inline-flex items-center gap-2 text-xs font-mono group-hover:gap-4 transition-all uppercase tracking-widest text-white/40 group-hover:text-white">
                                    SPEC_SHEET <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* Technical detail: corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                                <div className="absolute top-[-20px] right-[-20px] w-10 h-10 bg-white/5 rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
