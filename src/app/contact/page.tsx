import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rafif Nuha for selected portfolio and digital design commissions."
};

export default function ContactPage() {
  return (
    <PageShell index="04" label="Contact">
      <ContactPanel />
    </PageShell>
  );
}
