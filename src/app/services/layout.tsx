import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Fractional CTO & Engineering",
    description: "Full-stack design engineering and managed IT services for growth-focused businesses.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
