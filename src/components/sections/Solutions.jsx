import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import coreBankingIcon from "@/assets/icons/core-banking.svg";
import digitalBankingIcon from "@/assets/icons/digital-banking.svg";
import openBankingIcon from "@/assets/icons/open-banking.svg";
import loanOriginationIcon from "@/assets/icons/loan-origination.svg";
import loanManagementIcon from "@/assets/icons/loan-management.svg";

const SOLUTIONS = [
  {
    image: coreBankingIcon,
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    image: digitalBankingIcon,
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    image: openBankingIcon,
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    image: loanOriginationIcon,
    title: "Loan Origination System",
    badge: "NBFC",
    glow: true,
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    image: loanManagementIcon,
    title: "Loan Management System",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

function SolutionCard({ Icon, image, title, description, badge, glow, index }) {
  return (
    <div className="group relative isolate">
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 opacity-25"
          style={{
            background:
              "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
            filter: "blur(80px)",
          }}
        />
      )}

      <motion.div
        variants={fadeUp}
        custom={index}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-5"
      >
      <div className="flex items-start justify-between">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-12 w-12 object-contain"
          />
        ) : (
          <Icon
            size={48}
            strokeWidth={1}
            className="text-white/80 transition-colors group-hover:text-primary"
          />
        )}
        {badge && (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-medium tracking-tight text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-white/55">{description}</p>

      <a
        href="#"
        className="group/learn inline-flex w-fit items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#00B4FD]"
      >
        <span className="relative inline-block">
          Learn More
          <span
            aria-hidden
            className="absolute left-0 top-full mt-1 h-px w-[40%] bg-[#00B4FD] transition-all duration-300 group-hover/learn:w-full"
          />
        </span>
        <ArrowRight
          size={14}
          className="transition-transform group-hover/learn:translate-x-0.5"
        />
      </a>
      </motion.div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex justify-between gap-16 lg:gap-20">
          {/* Left column — heading + CTA */}
          <div className="basis-1/2 lg:sticky lg:top-32 lg:self-start">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[40px]"
            >
              All of our solutions are
              <br />
              tailor-made to your needs
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="mt-10"
            >
              <Button
                variant="outline"
                className="h-12 rounded-md border-white border-2 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
              >
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Right column — 2-column card grid */}
          <div className="basis-1/2 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 sm:gap-x-16">
            {SOLUTIONS.map((s, i) => (
              <SolutionCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
