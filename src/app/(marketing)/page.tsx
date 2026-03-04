"use client";

import { ServicePillars } from "@/features/marketing/components/ServicePillars";
import { ArrowUpRight, Activity, Shield, Terminal, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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
    <>
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-10 md:pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-industrial-blue/10 border border-industrial-blue/20 text-industrial-blue text-xs font-mono mb-8 animate-pulse"
            >
              <Activity className="w-3 h-3" />
              <span>SYSTEMS_OPERATIONAL: READY_FOR_DEPLOYMENT</span>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="flex items-center gap-4 mb-6 text-industrial-blue font-mono text-xs tracking-[0.3em] uppercase"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-8"
            >
              Strategic Engineering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-emerald">
                For Unstoppable Growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-xl text-industrial-white/60 leading-relaxed mb-12 font-light"
            >
              We don't just write code; we engineer business outcomes.
              As your <strong>Fractional CTO</strong> team, we align your technical infrastructure with your
              commercial objectives—deploying high-performance systems that your team can actually maintain.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/audit" className="px-8 py-4 bg-industrial-blue text-white text-lg font-bold rounded flex items-center justify-center gap-3 hover:bg-industrial-blue/90 transition-all group shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                START_DIAGNOSTIC_AUDIT
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm">
                VIEW_CAPABILITIES
              </Link>
            </motion.div>

            {/* Technical Stats Reveal */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-12 font-mono text-center md:text-left">
              <motion.div variants={fadeIn} className="space-y-1">
                <div className="text-[10px] text-white/30 lowercase tracking-widest">{"// network_status"}</div>
                <div className="text-lg md:text-xl font-bold text-industrial-emerald">SYSTEMS_GREEN</div>
              </motion.div>
              <motion.div variants={fadeIn} className="space-y-1">
                <div className="text-[10px] text-white/30 lowercase tracking-widest">{"// technology"}</div>
                <div className="text-lg md:text-xl font-bold text-white break-words">PLATFORM_AGNOSTIC</div>
              </motion.div>
              <motion.div variants={fadeIn} className="space-y-1">
                <div className="text-[10px] text-white/30 lowercase tracking-widest">{"// expertise"}</div>
                <div className="text-lg md:text-xl font-bold text-industrial-blue">NETWORK_ENGINEER</div>
              </motion.div>
              <motion.div variants={fadeIn} className="space-y-1">
                <div className="text-[10px] text-white/30 lowercase tracking-widest">{"// approach"}</div>
                <div className="text-lg md:text-xl font-bold text-white break-words">OUTCOME_DRIVEN</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract Technical Ornaments */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] border-l border-white/5 pointer-events-none hidden xl:block bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-industrial-blue/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-industrial-emerald/50 to-transparent" />
          <div className="p-12 space-y-8 font-mono text-[10px] text-white/20">
            <div className="opacity-50">[SYSTEM_KERNEL_LOG]</div>
            <div className="pl-4 border-l border-white/10 space-y-2">
              <div>&gt; INITIATING_HANDSHAKE: SUCCESS</div>
              <div>&gt; OPTIMIZING_ROUTE_PATHS...</div>
              <div>&gt; ALLOCATING_VIRTUAL_RESOURCES...</div>
              <div>&gt; SECURE_CONNECTION_ESTABLISHED</div>
            </div>
            <div className="opacity-50">[DEPLOYMENT_TARGET]</div>
            <div className="pl-4 border-l border-white/10 space-y-2">
              <div>&gt; SMB_GROWTH_ENGINE</div>
              <div>&gt; LEGACY_MIGRATION_PROTOCOL</div>
              <div>&gt; AUTOMATED_WORKFLOWS</div>
            </div>
          </div>
        </div>
      </section >

      <ServicePillars />

      {/* Target Audience / "Why Layout" Section */}
      <section className="py-20 md:py-32 bg-industrial-slate relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto mb-12 md:mb-20 text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Who We Build For.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/40 text-base md:text-lg">
              We don't just write code. We solve business problems for leaders who value precision.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1: The Non-Tech Founder */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-xl hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 bg-industrial-blue/10 text-industrial-blue rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">The Non-Tech Founder</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                You have a vision and sales, but the "tech stuff" is a black box. You need someone to "just make it work" so you can focus on growing the business.
              </p>
            </motion.div>

            {/* Card 2: The SMB Owner */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-xl hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-industrial-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-industrial-emerald/10 text-industrial-emerald rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">The SMB Owner</h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">
                You're too big for simple DIY tools but not ready for a $180k/yr full-time CTO. You need high-level strategy and execution on a fractional retainer.
              </p>
            </motion.div>

            {/* Card 3: The Ops Manager */}
            <motion.div variants={fadeIn} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-xl hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 bg-white/10 text-white rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">The Ops Manager</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Your workflows are manual and slow. You need automation, custom dashboards, and systems that talk to each other to reduce overhead.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <section className="py-24 md:py-32 border-y border-white/10 bg-industrial-blue/5 relative overflow-hidden">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div variants={fadeIn}>
            <Shield className="w-12 h-12 text-industrial-blue mx-auto mb-8 opacity-50" />
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Stop Guessing. Start Engineering.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-white/40 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Your technical debt is costing you money. A 15-minute Digital Health Audit can save you 150 hours of future downtime.
            No sales scripts. Just raw technical insight.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/audit" className="w-full sm:w-auto px-10 py-4 bg-industrial-blue text-white font-bold rounded shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform text-center">
              INITIALIZE_SYSTEM_AUDIT
            </Link>
          </motion.div>
        </motion.div>

        {/* Background Terminal Code Blur */}
        <div className="absolute inset-0 -z-10 opacity-5 blur-sm font-mono text-[10px] leading-relaxed pointer-events-none select-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap overflow-hidden">
              {`01100101 01101110 01100111 01101001 01101110 01100101 01100101 01110010 01101001 01101110 01100111 2026 STATIC_REDUNDACY_BUFFER`.repeat(10)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
