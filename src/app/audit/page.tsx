"use client";

import { Activity, ArrowRight, CheckCircle2, Zap, Shield, Globe, Layers, BarChart3, Network, Search, MessageSquare, Timer, Palette, Monitor } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AuditPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        objective: "",
        capacity: "",
        challenges: [] as string[],
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const challengeOptions = [
        { id: "extraction", label: "Conversion Bottlenecks", icon: Zap, detail: "Identifying why users drop off or bounce before converting." },
        { id: "fragility", label: "Operational Fragility", icon: Shield, detail: "Securing data and ensuring system resilience under load." },
        { id: "identity", label: "Identity Fragmentation", icon: Palette, detail: "Standardizing brand visuals across invoices, brochures, and web." },
        { id: "governance", label: "IT Governance Gap", icon: Monitor, detail: "Solving friction in hardware setup, software ops, and security." },
        { id: "leakage", label: "Financial Leakage", icon: BarChart3, detail: "Optimizing cloud/vendor spend for actual business value." },
        { id: "expansion", label: "Expansion Constraints", icon: Layers, detail: "Removing technical hurdles to growth and market entry." },
    ];

    const handleChallengeToggle = (id: string) => {
        setFormData((prev) => ({
            ...prev,
            challenges: prev.challenges.includes(id)
                ? prev.challenges.filter((p) => p !== id)
                : [...prev.challenges, id],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-industrial-slate text-industrial-white flex items-center justify-center p-6 bg-grid-pattern bg-[size:40px_40px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-industrial-slate border border-industrial-emerald/30 p-10 text-center relative overflow-hidden backdrop-blur-sm shadow-2xl rounded-sm"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-industrial-emerald/50 animate-pulse" />
                    <div className="w-20 h-20 bg-industrial-emerald/10 text-industrial-emerald rounded-full flex items-center justify-center mx-auto mb-8 border border-industrial-emerald/20">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 tracking-tighter">Diagnostic Initiated</h2>
                    <p className="text-industrial-white/50 mb-10 text-sm leading-relaxed">
                        The intake report has been received. We will analyze your environment and provide a strategic roadmap within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full text-xs font-mono text-industrial-emerald border border-industrial-emerald/30 py-4 hover:bg-industrial-emerald/5 transition-all uppercase tracking-[0.2em]"
                    >
                        Return to Dashboard
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-industrial-slate text-industrial-white pt-24 pb-20 px-6 relative overflow-hidden bg-grid-pattern bg-[size:60px_60px]">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-industrial-blue/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-industrial-emerald/5 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 relative z-10">

                {/* Left Section: Value Proposition */}
                <div className="lg:col-span-5 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-blue/10 border border-industrial-blue/20 mb-6 font-mono text-[10px] text-industrial-blue uppercase tracking-widest">
                            <Search className="w-3 h-3" />
                            <span>STRATEGIC_DIAGNOSTIC_INTAKE</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.95]">
                            Stop guessing. <br />
                            <span className="text-industrial-blue">Scale with intent.</span>
                        </h1>
                        <p className="text-industrial-white/50 text-lg leading-relaxed max-w-md">
                            Provide the baseline operational data below. We will perform a deep-dive diagnostic of your infrastructure and return a roadmap for sustainable growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-4">
                            Diagnostic Scope:
                        </h3>
                        <div className="grid gap-6">
                            {[
                                { title: "Infrastructure & Design Audit", desc: "A diagnostic of core web systems, IT overhead, and brand consistency.", icon: Zap },
                                { title: "Technical ROI Analysis", desc: "Identifying vulnerabilities and cost-saving opportunities.", icon: Shield },
                                { title: "Strategic Roadmap", desc: "A prioritized execution plan aligned with your business goals.", icon: Activity },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-industrial-blue/50 transition-colors">
                                        <item.icon className="w-5 h-5 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-white/80">{item.title}</h4>
                                        <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="pt-8 border-t border-white/5 flex items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2 text-industrial-emerald">
                            <div className="w-2 h-2 rounded-full bg-industrial-emerald animate-pulse" />
                            <span>Systems ready for analysis</span>
                        </div>
                        <span>Avg. turnaround: 24h</span>
                    </div>
                </div>

                {/* Right Section: Diagnostic Form */}
                <div className="lg:col-span-7">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 space-y-12 backdrop-blur-md rounded-sm">

                            {/* Section 1: Business Context */}
                            <div className="space-y-8">
                                <div className="text-[10px] font-mono text-industrial-blue uppercase tracking-widest border-b border-industrial-blue/20 pb-2">
                                    [ 01_BUSINESS_CONTEXT ]
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                                            Principal Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-industrial-blue transition-all font-sans text-base placeholder:text-white/10"
                                            placeholder="Jane Smith"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                                            Strategic Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-industrial-blue transition-all font-sans text-base placeholder:text-white/10"
                                            placeholder="jane@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="company" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                                            Platform / URL
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="url"
                                                id="company"
                                                className="w-full bg-transparent border-b border-white/20 py-3 pl-8 focus:outline-none focus:border-industrial-blue transition-all font-sans text-base placeholder:text-white/10 text-industrial-blue font-bold"
                                                placeholder="https://yourbusiness.com"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                            <Globe className="absolute left-0 top-3.5 w-4 h-4 text-industrial-blue/40" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="objective" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                                            Primary Objective
                                        </label>
                                        <select
                                            id="objective"
                                            className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-industrial-blue transition-all font-sans text-base text-white/60 appearance-none cursor-pointer"
                                            value={formData.objective}
                                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                        >
                                            <option value="" className="bg-industrial-slate">Select Goal</option>
                                            <option value="conversion" className="bg-industrial-slate">Increase Conversion</option>
                                            <option value="efficiency" className="bg-industrial-slate">Operational Efficiency</option>
                                            <option value="stability" className="bg-industrial-slate">System Stability</option>
                                            <option value="cto" className="bg-industrial-slate">Fractional CTO Support</option>
                                            <option value="migration" className="bg-industrial-slate">Legacy Migration</option>
                                            <option value="consultation" className="bg-industrial-slate">General Consultation</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Operational Capacity */}
                            <div className="space-y-8">
                                <div className="text-[10px] font-mono text-industrial-emerald uppercase tracking-widest border-b border-industrial-emerald/20 pb-2">
                                    [ 02_OPERATIONAL_CAPACITY ]
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 block mb-4">
                                        Maintenance Environment
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {[
                                            { id: "non-tech", label: "Non-Technical", sub: "Marketing staff only" },
                                            { id: "sm-tech", label: "Hybrid / Small", sub: "1-2 multi-role devs" },
                                            { id: "eng-team", label: "Full Engineering", sub: "Dedicated tech team" },
                                        ].map((opt) => (
                                            <button
                                                key={opt.id}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, capacity: opt.id })}
                                                className={`p-4 border rounded-sm text-left transition-all ${formData.capacity === opt.id
                                                    ? "bg-industrial-emerald/10 border-industrial-emerald border-b-2"
                                                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                                                    }`}
                                            >
                                                <div className="text-[11px] font-bold text-white uppercase tracking-tight">{opt.label}</div>
                                                <div className="text-[9px] text-white/30 mt-1">{opt.sub}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Strategic Challenges */}
                            <div className="space-y-6">
                                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest border-b border-white/10 pb-2">
                                    [ 03_STRATEGIC_CHALLENGES ]
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {challengeOptions.map((option) => {
                                        const Icon = option.icon;
                                        const isSelected = formData.challenges.includes(option.id);
                                        return (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => handleChallengeToggle(option.id)}
                                                className={`flex items-start gap-4 p-4 text-left transition-all duration-300 border rounded-sm group ${isSelected
                                                    ? "bg-industrial-blue/10 border-industrial-blue"
                                                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                                                    }`}
                                            >
                                                <div className={`mt-1 p-2 rounded-sm ${isSelected ? "bg-industrial-blue text-white" : "bg-white/5 text-white/30"}`}>
                                                    <Icon className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <div className={`text-xs font-bold uppercase tracking-tight ${isSelected ? "text-white" : "text-white/60"}`}>
                                                        {option.label}
                                                    </div>
                                                    <div className="text-[10px] text-white/20 group-hover:text-white/40 transition-colors">
                                                        {option.detail}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Section 4: Narrative Context */}
                            <div className="space-y-3">
                                <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest border-b border-white/10 pb-2">
                                    [ 04_NARRATIVE_CONTEXT ]
                                </div>
                                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 flex items-center gap-2 mt-4">
                                    <MessageSquare className="w-3 h-3" />
                                    Extra Details / Operational Reality
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full bg-white/[0.02] border border-white/10 p-5 focus:outline-none focus:border-industrial-blue transition-all font-sans text-sm h-32 resize-none rounded-sm placeholder:text-white/20"
                                    placeholder="Tell us more about your team's current friction points..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-industrial-blue text-white font-bold py-5 rounded-sm hover:bg-industrial-blue/90 transition-all flex items-center justify-center gap-3 relative group disabled:opacity-50 shadow-lg shadow-industrial-blue/10"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Activity className="w-5 h-5 animate-spin" />
                                        <span className="uppercase tracking-[0.2em] text-xs">Processing_Diagnostic...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="uppercase tracking-[0.2em] text-xs">Initialize Diagnostic Audit</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-center text-white/20 font-mono uppercase tracking-widest">
                                Data handled under secure protocols. Non-tech-founder friendly.
                            </p>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
