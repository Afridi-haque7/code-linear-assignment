import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import mobile1 from "@/assets/cards/mobile1.png";
import mobile2 from "@/assets/cards/mobile2.png";
import mobile3 from "@/assets/cards/mobile3.png";
import vector from "@/assets/cards/vector.png";
import star from "@/assets/icons/star.svg";
import CtaBanner from "./CtaBanner";

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

const MARQUEE_ITEMS = [
  { label: "N7", brand: true },
  { star: true },
  { label: "Say", wave: true },
  { label: "to the new way of banking" },
  { star: true },
  { label: "CB7", brand: true },
  { star: true },
  { label: "Say", wave: true },
];

const WATERMARK_STYLE = {
  fontFamily: "'Archivo', sans-serif",
  fontWeight: 500,
  color: "transparent",
  WebkitTextStroke: "1.5px rgba(30, 115, 255, 0.18)",
};

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => {
        if (item.star) {
          return (
            <img
              key={i}
              src={star}
              alt=""
              aria-hidden
              className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
            />
          );
        }
        return (
          <span
            key={i}
            className={
              item.brand
                ? "shrink-0 text-4xl font-bold text-[#1E73FF] sm:text-5xl"
                : "shrink-0 text-4xl font-bold text-slate-900 sm:text-5xl"
            }
          >
            {item.label}
            {item.wave && <span className="ml-2">👋</span>}
          </span>
        );
      })}
    </>
  );
}

function ContentBlock({ title, description, features }) {
  return (
    <div>
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        className="font-semibold"
      >
        {title}
      </motion.h3>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={1}
        className="mt-5 max-w-md text-sm leading-relaxed tracking-tight text-slate-600 sm:text-[15px]"
      >
        {description}
      </motion.p>

      <ul className="mt-8 flex flex-col gap-4">
        {features.map((f, i) => (
          <motion.li
            key={f}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={i + 2}
            className="flex items-center gap-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E73FF] text-white">
              <Check size={14} strokeWidth={3} />
            </span>
            <span className="text-sm font-semibold text-slate-700/80 sm:text-[15px]">
              {f}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function PhoneMockup({ src, alt, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 30 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="flex items-center justify-center"
    >
      <img src={src} alt={alt} className="block w-70 drop-shadow-2xl" />
    </motion.div>
  );
}

export default function DigitalBanking() {
  return (
    <section className="relative bg-[#E9F4F9] text-slate-900">
      {/* Marquee strip on top */}
      <div className="relative border-y border-slate-200 bg-white py-5">
        <Marquee speed={40} direction="rtl">
          <MarqueeContent />
        </Marquee>
      </div>

      {/* Main content area */}
      <div className="relative overflow-hidden py-20 lg:py-28">
        <Container className="relative">
          {/* ───── Row 1 — N7 watermark ───── */}
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-12">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/3 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap leading-none"
              style={{
                ...WATERMARK_STYLE,
                fontSize: "clamp(280px, 50vw, 640px)",
              }}
            >
              N7
            </span>

            <div className="relative z-10 flex h-full flex-col items-start pt-0">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={0}
                className="text-3xl font-regular leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]"
              >
                Digital banking
                <br />
                out-of-the-box
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={1}
                className="mt-6 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={2}
                className="mt-10 flex flex-col items-start gap-6"
              >
                <Button className="h-12 rounded-md bg-linear-to-r from-[#1E73FF] to-[#3D8BFF] px-10 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#1E73FF]/30 cursor-pointer hover:opacity-90 hover:from-[#1E73FF] hover:to-[#3D8BFF]">
                  Request Demo
                </Button>

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

            <div className="relative z-10">
              <PhoneMockup src={mobile1} alt="N7 mobile banking app" />
            </div>
            <div className="relative z-10 mr-20 mt-20">
              <ContentBlock
                title="Fully compliant with regulatory requirement"
                description="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
                features={[
                  "Pre-integrated Security System",
                  "Fully Compliant With Regulatory Requirement",
                  "Digitally Connected Core",
                ]}
              />
            </div>
          </div>

          {/* ───── Row 2 — vector.png right-half background, phone on right ───── */}
          <div className="relative mt-20 items-center flex justify-end gap-12 lg:mt-28 lg:gap-16">
            {/* vector.png — right half visible */}
            <img
              src={vector}
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 z-0 h-[120%] max-w-none -translate-y-1/2 opacity-70"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />

            <div className="relative z-10 max-w-70">
              <ContentBlock
                title="No legacy IT systems"
                description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
                features={[
                  "Adaptive & Intelligent API monetization",
                  "Ambient User Experience",
                  "Cloud-native With lower TCO",
                ]}
              />
            </div>
            <div className="relative z-10 mr-16">
              <PhoneMockup
                src={mobile2}
                alt="No legacy IT systems"
                delay={0.1}
              />
            </div>
          </div>

          {/* ───── Row 3 — "7" only watermark, phone center, content right ───── */}
          <div className="relative mt-28 grid grid-cols-1 items-center gap-12 lg:mt-28 lg:grid-cols-3 lg:gap-12">
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 z-0 translate-x-1/3 -translate-y-2/5 select-none whitespace-nowrap leading-none"
              style={{
                ...WATERMARK_STYLE,
                fontSize: "clamp(280px, 100vw, 1640px)",
              }}
            >
              7
            </span>

            <div className="hidden lg:block" />
            <div className="relative z-10">
              <PhoneMockup
                src={mobile3}
                alt="No traditional branches"
                delay={0.1}
              />
            </div>
            <div className="relative z-10 max-w-70">
              <ContentBlock
                title="No traditional branches"
                description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
                features={[
                  "Branchless & Paperless Banking",
                  "Digital Transformation Capability",
                  "Optimized, Adoptable and Scalable",
                ]}
              />
            </div>
          </div>

        </Container>

        <CtaBanner
          watermark="N7"
          description="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
          className="pt-20 pb-0"
          theme="light"
        />
      </div>
    </section>
  );
}
