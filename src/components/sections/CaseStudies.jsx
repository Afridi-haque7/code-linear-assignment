import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import design1 from "@/assets/cards/design1.png";

const CASE_STUDIES = [
  {
    image: design1,
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    brand: "Zoomerr",
  },
  {
    image: design1,
    category: "GETTING STARTED",
    title: "Scaling a regional bank into a digital-first platform",
    brand: "Finexa",
  },
  {
    image: design1,
    category: "GETTING STARTED",
    title: "Modernising legacy core banking infrastructure",
    brand: "Nexbank",
  },
  {
    image: design1,
    category: "GETTING STARTED",
    title: "Launching a digital-only neobank in 90 days",
    brand: "Paytra",
  },
];

function CaseCard({ data }) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-4xl bg-[#0a1a24] p-6 sm:p-8 md:grid-cols-2 md:gap-12">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={data.image}
          alt=""
          className="block aspect-square w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-primary">
          {data.category}
        </span>
        <h3 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
          {data.title}
        </h3>

        <div className="mt-6 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
            <Zap size={14} strokeWidth={2.5} />
          </span>
          <span className="text-base font-medium text-white/65">
            {data.brand}
          </span>
        </div>

        <Button
          variant="outline"
          className="mt-auto h-12 w-full rounded-md border-white/20 bg-transparent text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 hover:bg-white hover:text-background dark:border-white/20 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

function NavButton({ onClick, direction, disabled }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "prev" ? "Previous case study" : "Next case study"
      }
      className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-30 disabled:pointer-events-none"
    >
      <Icon size={18} />
    </button>
  );
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function CaseStudies() {
  const [[index, direction], setState] = useState([0, 0]);
  const total = CASE_STUDIES.length;

  const next = () => setState([(index + 1) % total, 1]);
  const prev = () => setState([(index - 1 + total) % total, -1]);
  const goTo = (i) => setState([i, i > index ? 1 : -1]);

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Our Case Studies
        </motion.h2>

        {/* Carousel */}
        <div className="relative mt-16">
          {/* Stacked ghost cards (left + right) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 hidden w-full max-w-4xl -translate-x-[58%] -translate-y-1/2 scale-[0.9] opacity-15 blur-md md:block"
          >
            <CaseCard data={CASE_STUDIES[(index - 1 + total) % total]} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 hidden w-full max-w-4xl -translate-x-[42%] -translate-y-1/2 scale-[0.9] opacity-15 blur-md md:block"
          >
            <CaseCard data={CASE_STUDIES[(index + 1) % total]} />
          </div>

          {/* Active card — horizontal slide carousel */}
          <div className="relative mx-auto max-w-4xl overflow-hidden">
            {/* Invisible placeholder reserves the container's height */}
            <div className="invisible">
              <CaseCard data={CASE_STUDIES[index]} />
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "tween",
                    duration: 0.45,
                    ease: [0.32, 0.72, 0, 1],
                  },
                  opacity: { duration: 0.25 },
                }}
                className="absolute inset-0"
              >
                <CaseCard data={CASE_STUDIES[index]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls row */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:grid sm:grid-cols-3 sm:gap-4">
          <div className="hidden sm:block" /> {/* spacer */}
          <div className="flex items-center justify-center gap-4">
            <NavButton direction="prev" onClick={prev} />
            <div className="flex items-center gap-1.5">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={
                    i === index
                      ? "h-1.5 w-6 rounded-md bg-primary transition-all"
                      : "h-1.5 w-1.5 rounded-md bg-white/30 transition-all hover:bg-white/50"
                  }
                />
              ))}
            </div>
            <NavButton direction="next" onClick={next} />
          </div>
          <a
            href="#"
            className="group/learn inline-flex w-fit items-center justify-end gap-2 justify-self-end font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#00B4FD]"
          >
            <span className="relative inline-block">
              View All
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
        </div>
      </Container>
    </section>
  );
}
