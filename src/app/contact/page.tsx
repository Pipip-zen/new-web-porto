import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Muhammad Rafif Nuha Daniswara for portfolio projects, frontend development, and digital design commissions.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <PageShell index="04" label="Contact">
      <ContactPanel />
    </PageShell>
  );
}
