import {
  GraduationCap, Users, CheckCircle,
  BookOpen, Globe, Trophy,
  School,
} from "lucide-react";
import type { StatItem, Feature, Testimonial, GalleryImage, NewsItem } from "../lib/types";

// ── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  tagline: "Since 1994 AD",
  headline1: "Empowering",
  headline2: "Minds",
  description:
    "Education for Character, Knowledge & Wisdom. A premier institution in Pokhara from Kindergarten to Class 12.",
  ctaPrimary: "Admission Open",
  ctaSecondary: "Learn More",
  preBadge: "Grade 11 (2026–27) — Limited seats available. Now Open →",
  excellence: {
    label: "Excellence Proven",
    desc: "99% SEE pass rate. Academic excellence recognized across the region. 2024 Results →",
  },
  mandelaQuote: "Education is the most powerful weapon.",
  annotations: ["NEB Affiliated", "Grade K–12"],
};

// ── Principal's Message ──────────────────────────────────────────────────────────

export const PRINCIPAL_MESSAGE = {
  title: "Message from the Principal",
  paragraphs: [
    "Welcome to New Galaxy English Secondary School. Established on 1st January 1994 (17th Poush 2051 BS), our institution has been a well-recognised name for the benchmark of quality education in Western Nepal.",
    "Affiliated with the National Examination Board (NEB) and approved by the Ministry of Education, we are situated in the heart of Pokhara at Gyanmarga, Nadipur — committed to producing globally competent and socially responsible citizens.",
  ],
  quote: "Education is the most powerful weapon.",
  signedBy: "The Principal",
};

// ── Stats ────────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  { label: "Years of Excellence", value: "32+",    icon: BookOpen, desc: "Est. January 1994" },
  { label: "Qualified Teachers",  value: "50+",    icon: GraduationCap, desc: "Expert Faculty" },
  { label: "Students Enrolled",   value: "1,500+", icon: Users, desc: "Active Learners" },
  { label: "SEE Pass Rate",       value: "99%",    icon: CheckCircle, desc: "National Excellence" },
];

// ── Why Choose Us ────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    stat: "99% SEE Pass Rate",
    desc: "NEB-affiliated with three decades of outstanding results. Recognized as the Best Secondary School in Western Nepal — our students consistently excel in regional and national examinations.",
  },
  {
    icon: GraduationCap,
    title: "Dedicated Faculty",
    stat: "50+ Expert Teachers",
    desc: "Specialised streams in Science, Computer Science, Management, Hotel Management & Tourism — taught by 50+ qualified faculty dedicated to building career-ready graduates from Pokhara.",
  },
  {
    icon: Globe,
    title: "Future-Ready Campus",
    stat: "Smart Classrooms",
    desc: "English-medium instruction, advanced science labs, digital library, and state-of-the-art computer facilities — equipping students with 21st-century skills for global opportunities.",
  },
];

// ── AI Tutor Section ─────────────────────────────────────────────────────────

export const AI_TUTOR = {
  title: "Interactive AI Learning",
  description:
    "Our Academia features the cutting-edge Galaxy AI Tutor. Students can practise language skills, ask academic questions, and get real-time voice feedback — powered by Gemini 2.5 Live.",
  feature: "Voice Enabled — Natural conversation with Gemini 2.5 Live",
};

// ── News ─────────────────────────────────────────────────────────────────────

export const newsItems: NewsItem[] = [
  {
    title: "SEE Results 2024: Record-Breaking Performance",
    date: "June 10, 2024",
    excerpt: "New Galaxy students achieved a 99% pass rate in the SEE examination, with 80% scoring A+.",
  },
  {
    title: "Annual Science Fair Winners Announced",
    date: "April 22, 2024",
    excerpt: "Our students claimed top honours at the National Science and Innovation Fair held in Kathmandu.",
  },
  {
    title: "Grade 11 Pre-Registration Now Open",
    date: "March 1, 2024",
    excerpt: "Applications for Science, Management, and HM & Tourism streams for 2026–27 are now being accepted.",
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Thapa",
    role: "Alumni, Class of 2024",
    quote: "The teachers didn't just teach me subjects — they taught me to think critically and pursue my passions.",
  },
  {
    name: "Sita Gurung",
    role: "Parent",
    quote: "Enrolling my daughter here was the best decision. The balance between academics and extracurriculars is phenomenal.",
  },
  {
    name: "Rohan Shrestha",
    role: "Current Student, Class 12",
    quote: "The AI Tutor has completely transformed how I practise English. It's like having a personal guide 24/7.",
  },
];

// ── CTA Section ────────────────────────────────────────────────────────────

export const CTA_SECTION = {
  title: "Ready to join the New Galaxy family?",
  description: "Applications are open for all streams. Take the first step toward a brighter future.",
  button: "Apply Now",
};

// ── Home Gallery Preview (6 images) ─────────────────────────────────────────

export const homeGalleryImages: GalleryImage[] = [
  { id: 1, src: "/images/hero.jpg",                              label: "Main Campus",  span: "col-span-2 row-span-2" },
  { id: 2, src: "https://picsum.photos/seed/library-ng/600/600",  label: "Library" },
  { id: 3, src: "https://picsum.photos/seed/scilab-ng/600/600",   label: "Science Lab" },
  { id: 4, src: "https://picsum.photos/seed/sports-ng/600/600",   label: "Sports Ground" },
  { id: 5, src: "https://picsum.photos/seed/class-ng/600/600",    label: "Classrooms" },
  { id: 6, src: "https://picsum.photos/seed/annualday-ng/1200/600", label: "Annual Day", span: "col-span-2" },
];
