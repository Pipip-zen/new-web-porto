import type { Metadata } from "next";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const metadata: Metadata = {
  title: "Contact — Rafif Nuha",
  description: "Contact Rafif Nuha for portfolio projects, frontend development, and digital design collaborations.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <ContactPanel />
    </div>
  );
}
