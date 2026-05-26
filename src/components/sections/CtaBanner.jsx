import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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

export default function CtaBanner({
  title = "Take the full advantage of going paper-less now.",
  description = "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  watermark = "CB7",
  className,
  cardClassName,
  theme = "dark",
  bare = false,
}) {
  return (
    <section className={cn("relative py-16 lg:py-24", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "relative",
            !bare &&
              "min-h-100 overflow-hidden rounded-2xl px-8 py-14 sm:px-12 lg:px-16 lg:py-20",
            cardClassName,
          )}
        >
          {!bare && (
            <>
              {/* Card background — fades into the page bg horizontally */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#06141b] via-[#091a23] to-[#06141b]"
                style={{
                  WebkitMaskImage: `linear-gradient(to right, black 0%, black ${theme === "dark" ? "20%" : "100%"}, transparent 100%)`,
                  maskImage: `linear-gradient(to right, black 0%, black ${theme === "dark" ? "20%" : "100%"}, transparent 100%)`,
                }}
              />

              {/* Huge outlined watermark text — contained within the card */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-y-100 left-1/2 translate-x-1/4 select-none whitespace-nowrap leading-none"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(220px, 38vw, 480px)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(30, 115, 255, 0.18)",
                  opacity: 0.9,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {watermark}
              </span>

              {/* Subtle radial glow accents */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-xl bg-[radial-gradient(circle,rgba(30,115,255,0.15),transparent_70%)] blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-xl bg-[radial-gradient(circle,rgba(30,115,255,0.12),transparent_70%)] blur-3xl"
              />
            </>
          )}

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Left — heading + description */}
            <div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={0}
                className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={1}
                className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base"
              >
                {description}
              </motion.p>
            </div>

            {/* Right — CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="flex flex-wrap items-center gap-3 lg:justify-end"
            >
              <Button
                variant="outline"
                className="h-12 rounded-md border-white/30 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
              >
                Contact Us
              </Button>
              <Button className="h-12 rounded-md bg-linear-to-r from-[#1E73FF] to-[#3D8BFF] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#1E73FF]/30 hover:opacity-90 hover:from-[#1E73FF] hover:to-[#3D8BFF]">
                Request Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
