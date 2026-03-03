export interface Metric {
    label: string;
    value: string;
}

export interface Phase {
    number: string;
    title: string;
    description: string;
    requirements: string[];
    solutions: string[];
}

export interface CaseStudy {
    title: string;
    client: string;
    date: string;
    role: string;
    metrics: Metric[];
    overview: string;
    phases: Phase[];
}

export interface PortfolioItem {
    id: string;
    slug: string;
    name: string;
    desc: string;
    date: string;
    stack: string[];
    status: "LIVE_SYSTEM" | "BETA_TEST" | "IN_DEVELOPMENT" | "ARCHIVED";
    metric: string;
    link: string;
    liveUrl?: string;
    details?: CaseStudy;
}
