import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const LOCATIONS = [
  {
    city: "London",
    address: [
      "Linktia Infosystems Ltd – CB7,",
      "26 Main Road Sundridge, TN14 6EP,",
      "England, United Kingdom.",
    ],
  },
  {
    city: "Dubai",
    address: [
      "Linktia Infosystems Ltd –",
      "CB7, Jumeirah Business, Center 5",
      "Cluster W, Jumeirah Lakes Towers,",
      "Dubai, United Arab Emirates",
    ],
  },
  {
    city: "India",
    address: [
      "Linktia Infosystems Ltd –",
      "CB7, Nirmal, Anand Nagar,",
      "Suncity Road, Pune,",
      "Maharashtra, 411041, India",
    ],
  },
];

const LINK_GROUPS = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

function FooterLink({ label }) {
  return (
    <a
      href="#"
      className="group flex items-center justify-between gap-4 text-sm text-white/70 transition-colors hover:text-white"
    >
      <span>{label}</span>
      <ArrowRight
        size={14}
        className="text-primary transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate pt-24 pb-10 lg:pt-32 lg:pb-12">
      {/* Ambient blue glow — bottom, subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-96 w-160 -translate-x-1/2 opacity-10"
        style={{
          background:
            "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          filter: "blur(140px)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-[1fr_2fr]">
          {/* Big N7 wordmark */}
          <div className="flex items-start">
            <span
              aria-label="N7"
              className="select-none leading-none"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(140px, 18vw, 260px)",
                background:
                  "linear-gradient(135deg, #1E73FF 0%, #3D8BFF 45%, #6DCBFF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              N7
            </span>
          </div>

          {/* Right side — locations + link groups */}
          <div className="flex flex-col gap-16">
            {/* Locations */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              {LOCATIONS.map((loc) => (
                <div key={loc.city}>
                  <h3 className="text-base font-semibold text-white">
                    {loc.city}
                  </h3>
                  <address className="mt-4 space-y-0.5 text-sm not-italic leading-relaxed text-white/65">
                    {loc.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </address>
                </div>
              ))}
            </div>

            {/* Link groups */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              {LINK_GROUPS.map((group) => (
                <div key={group.title} className="max-w-40">
                  <h3 className="text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {group.links.map((link) => (
                      <li key={link}>
                        <FooterLink label={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="mt-0 text-center text-xs leading-relaxed text-white/35 lg:text-left">
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
              Commercial Brand] — [Registered under the Companies Act 2006 in
              England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
