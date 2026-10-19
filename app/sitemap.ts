import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Troque pelo domínio real quando o site tiver um.
const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://luisroquette-labs.github.io/renato-giron-lopes-site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre"].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
