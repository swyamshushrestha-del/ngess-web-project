import { Globe, CheckCircle, Star } from "lucide-react";
import type { VisionItem } from "../lib/types";

// ─── About Hero ───────────────────────────────────────────────────────────────

export const ABOUT_HERO = {
  sectionLabel: "Our Story",
  headline: "Shaping lives since 1994",
  photo: "https://picsum.photos/seed/about-school/800/800",
  photoAlt: "New Galaxy English Secondary School campus building — Pokhara, Nepal",
  paragraphs: [
    "New Galaxy English Secondary School, situated at the heart of Pokhara in Gyanmarga, Nadipur, is a well-recognised name for the benchmark of quality education in Western Nepal. Since its establishment on 1st January 1994, we have been focusing continuously on imparting modern education compatible with global standards.",
    "Affiliated with the National Examination Board (NEB) and approved by the Ministry of Education, we provide a comprehensive curriculum from Kindergarten through Class 12, offering Science, Management, and Hotel Management & Tourism streams at the higher secondary level.",
  ],
  tags: ["NEB Affiliated", "Ministry Approved", "32+ Years Legacy"],
};

// ─── Vision / Mission / Values ───────────────────────────────────────────────

export const visionItems: VisionItem[] = [
  {
    title: "Our Vision",
    icon: Globe,
    desc: "To be a centre of excellence producing globally competent and socially responsible citizens.",
  },
  {
    title: "Our Mission",
    icon: CheckCircle,
    desc: "To provide a nurturing environment that fosters intellectual, physical, and emotional growth.",
  },
  {
    title: "Our Values",
    icon: Star,
    desc: "Integrity, excellence, respect, and community — the pillars of everything we do.",
  },
];
