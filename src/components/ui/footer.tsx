import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CMSLink } from "../Link";


interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ title: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Marketplace", href: "#" },
      { title: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Team", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Help", href: "#" },
      { title: "Sales", href: "#" },
      { title: "Advertise", href: "#" },
      { title: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];


const Footer = ({
  logo = {
    url: "https://www.muahbrands.com",
    src: "/muah_logo.jpg",
    alt: "logo",
    title: "Muah Branding Ltd",
  },
  sections = defaultSections,
  description = "Your Branding and Printing Partner.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} muahbrands.com. All rights reserved.`,
}: FooterProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {/* ts-expect-error type mismatch */}
                <h3 className="mb-4 font-bold">{section.links.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {/* ts-expect-error type mismatch */}
                  {section.links.items.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <CMSLink {...link.link}/>
                    </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          {/* <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <CMSLink {...link}/>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export { Footer };
