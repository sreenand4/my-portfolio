/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";
import avatarImage from "./assets/avatar.png";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: any;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
  /** Strings for the typewriter effect in Hero section */
  typewriterText: string[];
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "Sree",
  title: "Sreenand Mallisetty",
  typewriterText: [
    "Hey, I'm Sree!",
    "I build thoughtful software",
    "I love visual storytelling!"
  ],
  description:
    "I’m currently a student at Northeastern University’s Khoury College of Computer Sciences, interested in building user-centered products that blend creativity with functionality. Outside of tech, I enjoy filmmaking and love spending time outdoors—whether that’s driving aimlessly, hiking, or camping!",
  avatar: avatarImage,
  location: "Boston, MA",
  email: "sreenand6@gmail.com",
  socialLinks: {
    phone: "+1 (631) 352-9719", // Placeholder, user can update
    github: "https://github.com/sreenand4",
    linkedin: "https://www.linkedin.com/in/sree-mallisetty-7753b0207/",
    twitter: "https://x.com/explore",
    bluesky: "https://bsky.app/profile/lauroguedes.bsky.social",
    instagram: "https://instagram.com/lauroguedes.dev",
    youTube: "https://youtube.com/leowgweb",
    codetips: "https://codetips.cloud/u/lauroguedes",
  },
  enableThemeSelector: true,
  extraLinks: {
    enable: false,
    links: [
      {
        link: "/blog/guides/bloomfolio-complete-guide",
        icon: Flower2,
        label: "Bloomfolio Guide",
      },
      {
        link: "/blog/guides/content-collections-guide",
        icon: BookOpen,
        label: "Content Guide",
      },
      {
        link: "/blog/guides/markdown-guide",
        icon: FileText,
        label: "Markdown Guide",
      },
      {
        link: "https://github.com/lauroguedes/bloomfolio",
        icon: CodeXml,
        label: "GitHub Repo",
      },
    ],
  },
  sections: {
    about: false,
    projects: true,
    blog: false,
    work: true,
    education: true,
    hackathons: false,
    contact: true,
  },
};
