import { PortfolioItem } from "@/types/portfolio";

export const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        id: "RD-2015-Q1",
        slug: "radio-democracy",
        name: "RADIO_DEMOCRACY_98.1",
        desc: "Full-scale network architecture for a newly constructed broadcasting office. Hybrid wired and wireless infrastructure with zero-failure live routing.",
        date: "2015.Q1",
        stack: ["Networking", "Cisco", "IT File Servers", "Infrastructure"],
        status: "LIVE_SYSTEM",
        metric: "99.98% Uptime",
        link: "/warehouse/radio-democracy",
        liveUrl: "",
        details: {
            title: "Radio Democracy FM98.1",
            client: "Radio Democracy",
            date: "2015.Q1",
            role: "Lead Infrastructure Engineer",
            metrics: [
                { label: "Network Uptime", value: "99.98%" },
                { label: "Data Transfer", value: "10Gbps" },
                { label: "Client Capacity", value: "48+ Nodes" },
                { label: "Deployment", value: "30 Days" },
            ],
            overview: "A full-scale network architecture and infrastructure deployment for a newly constructed broadcasting office. The project demanded a hybrid zero-failure network to support live broadcasting and high-volume file synchronization.",
            phases: [
                {
                    number: "01",
                    title: "Hybrid Network Architecture",
                    description: "Designing the logical and physical blueprint based on architectural building plans.",
                    requirements: [
                        "Zero-latency audio routing paths",
                        "Redundant backbone for live transmission",
                        "Scalable switch fabric for future nodes",
                        "Integrated wireless density map"
                    ],
                    solutions: [
                        "Hybrid topology design",
                        "Segmented VLANs for Broadcast vs Office data",
                        "Managed IPS/LAN switching core",
                        "High-density WiFi 6 access point survey"
                    ]
                },
                {
                    number: "02",
                    title: "Physical Layer Execution",
                    description: "Coordinating inter-disciplinary teams for physical infrastructure deployment.",
                    requirements: [
                        "Clean cable management",
                        "Fire-rated conduit paths for data",
                        "Main Distribution Frame (MDF) build",
                        "Electrical interference shielding"
                    ],
                    solutions: [
                        "Led team of technicians for Cat6a termination",
                        "Collaborated with builders on cable trays",
                        "Rack-mount cooling and UPS integration",
                        "Standardized patch panel labeling system"
                    ]
                },
                {
                    number: "03",
                    title: "Server & Workspace Logic",
                    description: "Final implementation of data layers and user workstation protocols.",
                    requirements: [
                        "Centralized high-speed file sharing",
                        "Automated backup schedule (Local/Cloud)",
                        "Secure remote access for journalists",
                        "Standardized desktop software image"
                    ],
                    solutions: [
                        "NAS integration with caching",
                        "RAID-10 for fault tolerance",
                        "VPN for secure external sync",
                        "Domain-authenticated workstation setup"
                    ]
                }
            ]
        }
    },
    {
        id: "ST-2015-Q4",
        slug: "sensi-tech-digital-overhaul",
        name: "Sensi Tech Ecosystem",
        desc: "Enterprise-grade WordPress architectural overhaul with custom SQL integration and secure mail infrastructure.",
        date: "2015.Q4",
        stack: ["WordPress", "MySQL", "PHP", "Postfix/Dovecot", "Linux/Ubuntu", "SSL/TLS"],
        status: "ARCHIVED",
        metric: "99.9% System Uptime",
        link: "/warehouse/sensi-tech-digital-overhaul",
        liveUrl: "https://web.archive.org/web/20170705130207/http://sensi-sl.org/",
        details: {
            title: "Full-Stack Infrastructure & Secure Communications Overhaul",
            client: "Sensi Tech",
            date: "2015.Q4",
            role: "Lead Systems Architect & Full-Stack Developer",
            metrics: [
                { label: "Uptime Performance", value: "99.99%" },
                { label: "Active Mail Seats", value: "15+" },
                { label: "Security Patching", value: "Weekly" },
                { label: "Database Latency", value: "< 150ms" }
            ],
            overview: "Executed a complete digital transformation for Sensi Tech, replacing legacy systems with a hardened WordPress engine and a bespoke SQL backend. The project centered on establishing a sovereign mail server environment to ensure data privacy and providing 12+ months of continuous technical administration.",
            phases: [
                {
                    number: "01",
                    title: "Discovery & Infrastructure Design",
                    description: "Audit of existing legacy assets and the architectural mapping of the new secure environment.",
                    requirements: [
                        "Comprehensive audit of existing data silos and mail protocols",
                        "Mapping of custom SQL schema for dynamic content delivery",
                        "Security baseline assessment for internal communications",
                        "Scalability planning for 15+ concurrent staff members"
                    ],
                    solutions: [
                        "Developed a detailed migration roadmap to minimize downtime",
                        "Architected a custom MySQL relational database for optimized queries",
                        "Designed a hardened Linux-based server environment with specific firewall rules",
                        "Selected a modular WordPress framework to allow for future vertical scaling"
                    ]
                },
                {
                    number: "02",
                    title: "Technical Implementation",
                    description: "Deployment of the core WordPress engine and the configuration of the private mail infrastructure.",
                    requirements: [
                        "Implementation of a custom WordPress theme and plugin logic",
                        "Deployment of a private Postfix/Dovecot mail server",
                        "End-to-end SSL/TLS encryption for all web and mail traffic",
                        "Secure integration between the SQL backend and the frontend UI"
                    ],
                    solutions: [
                        "Engineered a bespoke WordPress core with restricted administrative permissions",
                        "Configured DKIM, SPF, and DMARC records to ensure high mail deliverability",
                        "Automated SQL backup routines with off-site redundancy",
                        "Provisioned secure IMAP/SMTP access for 15+ staff workstations"
                    ]
                },
                {
                    number: "03",
                    title: "Optimization & Management",
                    description: "Long-term system administration, security hardening, and performance tuning.",
                    requirements: [
                        "12+ months of proactive security and core software patching",
                        "Continuous monitoring of server resource utilization",
                        "User access control and credential management for staff",
                        "Content integrity audits and database optimization"
                    ],
                    solutions: [
                        "Established a bi-weekly maintenance cycle for security definitions",
                        "Implemented server-side caching to reduce page load speeds",
                        "Managed onboarding/offboarding protocols for mail server accounts",
                        "Provided 24/7 technical oversight to ensure continuous system availability"
                    ]
                }
            ]
        }
    },
    {
        id: "FBS-2017-Q1",
        slug: "freetown-business-school-administration",
        name: "FBS Digital Infrastructure",
        desc: "Full-spectrum management of a business education portal, encompassing design engineering, secure mail protocols, and proactive system maintenance.",
        date: "2017.Q1",
        stack: ["LAMP Stack", "WordPress", "WHM/cPanel", "SMTP/IMAP", "OpenSSL", "Rsync"],
        status: "ARCHIVED",
        metric: "100% Data Retention",
        link: "/warehouse/freetown-business-school-administration",
        liveUrl: "https://web.archive.org/web/20220528193341/https://fbs.edu.sl/",
        details: {
            title: "Institutional Website & Infrastructure Management",
            client: "Freetown Business School",
            date: "2017.Q1",
            role: "Lead Systems Administrator & Web Engineer",
            metrics: [
                { label: "Email Delivery Rate", value: "99.8%" },
                { label: "Backup Frequency", value: "Weekly/Offsite" },
                { label: "Security Incidents", value: "1" },
                { label: "Uptime Consistency", value: "97.9%" }
            ],
            overview: "Assumed total ownership of the Freetown Business School digital ecosystem. This role demanded a hybrid approach of design engineering to maintain a professional academic aesthetic and high-level systems administration to protect institutional data and facilitate reliable internal communications.",
            phases: [
                {
                    number: "01",
                    title: "Infrastructure Audit & Design Refinement",
                    description: "Initial assessment of the existing codebase and server environment to identify vulnerabilities and UX bottlenecks.",
                    requirements: [
                        "Full audit of existing WordPress core and plugins",
                        "Analysis of server resource allocation for academic peak times",
                        "UI/UX review for faculty and student personas",
                        "Security vulnerability scanning and patch mapping"
                    ],
                    solutions: [
                        "Engineered CSS and layout updates to align with FBS branding standards",
                        "Optimized the SQL database to improve backend administrative responsiveness",
                        "Hardened the directory structure to prevent unauthorized script execution",
                        "Redesigned key landing pages to improve information accessibility"
                    ]
                },
                {
                    number: "02",
                    title: "Technical Implementation & Email Governance",
                    description: "Standardizing the mail server environment and streamlining content deployment workflows.",
                    requirements: [
                        "Establishment of secure SMTP/IMAP configurations for faculty",
                        "Migration of content updates to a staging-to-production workflow",
                        "Implementation of automated daily backup routines",
                        "SSL certificate deployment across all subdomains"
                    ],
                    solutions: [
                        "Configured advanced spam filtering and RBL monitoring for the mail server",
                        "Standardized institutional email signatures and relay protocols",
                        "Deployed an Rsync-based offsite backup strategy for disaster recovery",
                        "Managed high-volume content uploads for course syllabi and faculty bios"
                    ]
                },
                {
                    number: "03",
                    title: "Security & Optimization Management",
                    description: "Ongoing proactive maintenance to ensure the integrity of the school's digital assets.",
                    requirements: [
                        "Proactive monitoring of server logs for brute-force attempts",
                        "Regular updates to CMS core and third-party integrations",
                        "Database optimization to ensure long-term performance",
                        "User privilege auditing for administrative accounts"
                    ],
                    solutions: [
                        "Implemented a Web Application Firewall (WAF) to mitigate SQL injection",
                        "Executed monthly performance tuning for the LAMP stack environment",
                        "Provided on-call technical support for staff email and CMS issues",
                        "Maintained 100% system availability during critical enrollment windows"
                    ]
                }
            ]
        }
    },
    {
        id: "NT-2026-Q1",
        slug: "nabeela-tunis-digital-hq",
        name: "Hon. Nabeela Tunis Official Portal",
        desc: "A premium, secure digital hub designed to centralize the professional biography, legislative news, and philanthropic initiatives of Hon. Nabeela Tunis.",
        stack: ["React 18", "Vite", "Tailwind CSS", "TypeScript", "Framermotion"],
        status: "LIVE_SYSTEM",
        metric: "Top 3 Search Ranking",
        link: "/warehouse/nabeela-tunis-digital-hq",
        liveUrl: "https://nabeelatunis.com",
        details: {
            title: "Strategic Digital Identity & Communications Hub",
            client: "Hon. Nabeela Tunis",
            date: "2026.Q1",
            role: "Digital Strategist & Lead Developer",
            metrics: [
                { label: "Search Authority", value: "95/100" },
                { label: "Asset Load Time", value: "< 0.8s" },
                { label: "Mobile Accessibility", value: "WCAG 2.1" },
                { label: "Security Layer", value: "Enterprise WAF" }
            ],
            overview: "Designed and deployed a sophisticated personal brand ecosystem for Hon. Nabeela Tunis. The project focused on a modular, component-driven architecture, ensuring that her extensive career milestones and philanthropic efforts are delivered through a high-performance, type-safe interface.",
            phases: [
                {
                    number: "01",
                    title: "Brand Architecture & Identity Mapping",
                    description: "Translating a multi-decade career into a cohesive digital narrative and structural hierarchy.",
                    requirements: [
                        "Strategic mapping of political and philanthropic milestones",
                        "High-resolution media asset management and optimization",
                        "SEO keyword strategy for public figure authority",
                        "Stakeholder alignment on visual 'Statesman' aesthetic"
                    ],
                    solutions: [
                        "Developed a modular content strategy to separate 'News' from 'Biography'",
                        "Curated a professional color palette emphasizing trust and leadership",
                        "Architected a 'Career Timeline' database schema for dynamic scaling",
                        "Implemented schema.org 'Person' markup for enhanced Google Knowledge Graph presence"
                    ]
                },
                {
                    number: "02",
                    title: "Systemic React Development",
                    description: "Developing a resilient frontend with a modular component architecture for rapid deployment.",
                    requirements: [
                        "Client-side routing with optimized page transitions",
                        "Component-based UI logic for high maintainability",
                        "TypeScript integration for enterprise-grade type safety",
                        "Responsive, media-heavy layout for high-end photography"
                    ],
                    solutions: [
                        "Utilized React 18 and Vite for a lightning-fast build and development cycle",
                        "Standardized the development environment with Tailwind CSS and custom config",
                        "Architected a scalable file structure with pages in src/pages and reusable UI in src/components",
                        "Defined robust technical types in a centralized types.ts to ensure data integrity"
                    ]
                },
                {
                    number: "03",
                    title: "Security Hardening & Management",
                    description: "Establishing a 'fortress' environment to protect the integrity of a high-profile public figure.",
                    requirements: [
                        "Mitigation of DDoS and brute-force attack vectors",
                        "Automated SSL management and secure DNS routing",
                        "Daily cloud backups of the entire media library",
                        "Ongoing performance monitoring and SEO auditing"
                    ],
                    solutions: [
                        "Integrated Cloudflare Enterprise-level WAF for traffic scrubbing",
                        "Established an automated CI/CD pipeline for secure, audited code updates",
                        "Implemented advanced caching layers to handle viral traffic spikes",
                        "Provided quarterly analytics reports on reach and audience engagement"
                    ]
                }
            ]
        },
        date: "2026.Q1"
    },

    {
        id: "UMU-2021-Q4",
        slug: "umu-institutional-portal",
        name: "UMU Academic Ecosystem",
        desc: "A high-performance institutional web portal designed to digitize university heritage and facilitate student recruitment.",
        date: "2021.Q4",
        stack: ["Next.js", "WordPress", "PostgreSQL"],
        status: "ARCHIVED",
        metric: "40% Increase in Inquiries",
        link: "/warehouse/umu-institutional-portal",
        liveUrl: "https://web.archive.org/web/20230919024200/https://umu.edu.sl/",
        details: {
            title: "United Methodist University Digital Transformation",
            client: "United Methodist University",
            date: "2021.Q4",
            role: "Senior Solutions Architect",
            metrics: [
                { label: "Page Load Speed", value: "< 1.2s" },
                { label: "Mobile Optimization", value: "100% Score" },
                { label: "Content Reach", value: "50k+ Monthly Hits" },
                { label: "Uptime Reliability", value: "99.95%" }
            ],
            overview: "Developed a comprehensive digital presence for the newly formed United Methodist University. The project focused on creating a robust 'Digital Brochure' that balances rich historical storytelling with a modern, conversion-optimized interface for student admissions and mission-critical information delivery.",
            phases: [
                {
                    number: "01",
                    title: "Discovery & Content Strategy",
                    description: "Comprehensive audit of university archives and stakeholder alignment on institutional identity.",
                    requirements: [
                        "Information architecture for complex historical data",
                        "Founder biography and mission statement digitization",
                        "User persona mapping for prospective students",
                        "Technical SEO strategy for academic keywords"
                    ],
                    solutions: [
                        "Conducted stakeholder workshops to define brand voice and UX hierarchy",
                        "Engineered a scalable sitemap optimized for multi-generational navigation",
                        "Developed a content migration plan for archival documents and imagery",
                        "Established a mobile-first UI kit reflecting academic prestige"
                    ]
                },
                {
                    number: "02",
                    title: "Technical Implementation",
                    description: "Development of a decoupled frontend and a highly customized administrative backend.",
                    requirements: [
                        "Implementation of a traditional, monolithic CMS for rapid content updates",
                        "Integration of a secure student information repository",
                        "Cross-browser compatibility and ADA compliance",
                        "Customized calendar and event management system",
                    ],
                    solutions: [
                        "Built a high-performance frontend using wordpress.org that was fast and responsive",
                        "Deployed a customized WordPress instance as a monolithic content engine",
                        "Integrated global CDN distribution for low-latency asset delivery",
                        "Developed a custom 'History Timeline' interactive component"
                    ]
                },
                {
                    number: "03",
                    title: "Optimization & Deployment",
                    description: "Final performance tuning and the establishment of an evergreen management workflow.",
                    requirements: [
                        "Rigorous Core Web Vitals optimization",
                        "End-user training for university administrative staff",
                        "Analytics integration for tracking student engagement"
                    ],
                    solutions: [
                        "Implemented image optimization and lazy-loading protocols",
                        "Conducted security hardening and penetration testing",
                        "Delivered a bespoke administrative dashboard for non-technical staff"
                    ]
                }
            ]
        }
    },



    // {
    //     id: "[UNIQUE_ID]",
    //     slug: "[url-friendly-slug]",
    //     name: "[Project Name]",
    //     desc: "[Short one-sentence description for the card view]",
    //     stack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    //     status: "LIVE_SYSTEM", // Options: LIVE_SYSTEM, IN_PROGRESS, ARCHIVED
    //     metric: "[Primary Metric, e.g., 100% Uptime]",
    //     link: "/warehouse/[slug]",
    //     details: {
    //         title: "[Full Project Title]",
    //         client: "[Client Name]",
    //         date: "[YYYY.QX]",
    //         role: "[Your Role, e.g., Lead Developer]",
    //         metrics: [
    //             { label: "[Metric Name]", value: "[Metric Value]" },
    //             { label: "[Metric Name]", value: "[Metric Value]" },
    //             // Add more as needed
    //         ],
    //         overview: "[A detailed 2-3 sentence summary of the project goals and outcome.]",
    //         phases: [
    //             {
    //                 number: "01",
    //                 title: "[Phase Title]",
    //                 description: "[High-level summary of what was achieved in this phase.]",
    //                 requirements: [
    //                     "[Requirement 1]",
    //                     "[Requirement 2]"
    //                 ],
    //                 solutions: [
    //                     "[Solution 1]",
    //                     "[Solution 2]"
    //                 ]
    //             },
    //             // Repeat phase block for 02, 03, etc.
    //         ]
    //     }
    // }



];
