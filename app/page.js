import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import {blogs} from "@/utils/data/blogs";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Meriem ZEMANE",
  url: "https://portfolio-meriem-zemane.vercel.app",
  jobTitle: "Cybersecurity Engineer",
  description: "Cybersecurity Engineer and Full-Stack Developer",
  sameAs: [
    "https://github.com/Meriem453",
    "https://www.linkedin.com/in/meriem-zemane-973243248/",
    // add X/Twitter, Dev.to, etc.
  ],
};

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {


  return (
    <div suppressHydrationWarning >
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <AboutSection />
        <Projects />
      <Experience />
      <Skills />
        <Blog blogs={blogs} />
      <Education />
      <ContactSection />
    </div>
  )
};
