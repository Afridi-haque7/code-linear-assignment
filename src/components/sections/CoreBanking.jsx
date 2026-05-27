import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useIsDesktop } from "@/lib/useIsDesktop";
import analytics1 from "@/assets/cards/analytics1.png";

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

export default function CoreBanking() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Giant outlined "CB7" background text — positioned per Figma spec */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none"
      >
        <span
          style={{
            position: "absolute",
            left: "-163.31px",
            top: "-2.25px",
            width: "1141px",
            height: "687px",
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 500,
            fontSize: "572.632px",
            lineHeight: "120%",
            opacity: 0.5,
            color: "transparent",
            WebkitTextStroke: "1px rgba(30, 115, 255, 0.35)",
          }}
        >
          CB7
        </span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy + CTAs */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              className="text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]"
            >
              A complete cloud-based
              <br />
              core banking.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="mt-8 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base"
            >
              Faster time to market with our cloud-based core banking services
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="mt-10 flex flex-col items-start gap-6"
            >
              <Button className="h-12 rounded-md bg-linear-to-r from-[#1E73FF] to-[#3D8BFF] px-10 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#1E73FF]/30 hover:opacity-90 hover:from-[#1E73FF] hover:to-[#3D8BFF]">
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

          {/* Right — dashboard placeholder */}
          <motion.div
            initial={{ opacity: 0, x: isDesktop ? 30 : 0 }}
            whileInView={{ opacity: 1, x: isDesktop ? 180 : 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Laptop mockup frame — gradient border via padding trick */}
            <div className="relative">
              {/* Screen */}
              <div
                className="rounded-md rounded-b-none p-px"
                style={{
                  background:
                    "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
                }}
              >
                <div className="rounded-md bg-background p-2 sm:p-3">
                  <img
                    src={analytics1}
                    alt="Cloud-based core banking dashboard"
                    className="block w-full rounded-sm object-contain"
                  />
                </div>
              </div>
              {/* Base (wider strip below the screen) */}
              <div
                className="relative mx-[-6%] -mt-px h-10 rounded-t-sm rounded-b-2xl p-[1.05px] sm:h-8"
                style={{
                  background:
                    "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
                }}
              >
                <div className="h-full w-full rounded-t-sm rounded-b-2xl bg-background" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
