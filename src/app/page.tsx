import type { Metadata } from "next";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { HeroSection } from "@/components/sections/HeroSection";
import { PageShell } from "@/components/layout/PageShell";
import { siteProfile } from "@/data/navigation";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio homepage of Muhammad Rafif Nuha Daniswara, showcasing selected work in frontend development, digital design, and spatial web experiences.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const siteUrl = "https://rafifnuha.my.id";
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Rafif Nuha Daniswara",
    alternateName: siteProfile.name,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    jobTitle: siteProfile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressCountry: "Indonesia"
    },
    email: `mailto:${siteProfile.email}`,
    sameAs: socialLinks
      .filter((link) => !link.href.startsWith("mailto:"))
      .map((link) => link.href)
  };

  return (
    <PageShell index="01" label="Index">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd)
        }}
      />
      <div className="space-y-20 lg:space-y-28">
        <HeroSection />
        <FeaturedProject project={featuredProjects[0]} />
      </div>
    </PageShell>
  );
}
