import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import design1 from "@/assets/cards/design1.png";

const ARTICLES = [
  {
    image: design1,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
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

function ArticleCard({ article, index, featured }) {
  const { image, category, title, author, date } = article;
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 rounded-2xl  bg-[#0a1a24]/70 p-6"
    >
      <div
        className={
          featured
            ? "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            : "contents"
        }
      >
        {featured && image && (
          <div className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt=""
              className="block aspect-square w-full max-w-70 object-cover"
            />
          </div>
        )}

        <div className="flex flex-col justify-around gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {category}
          </span>
          <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-4 flex items-center gap-4 text-xs text-white/55">
            <span className="font-medium text-white/85">{author}</span>
            <span>{date}</span>
          </p>

          <Button
            variant="outline"
            className="mt-auto h-11 w-full rounded-md border-white/20 bg-transparent text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 hover:bg-white hover:text-background dark:border-white/20 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
            style={{ marginTop: featured ? "1.5rem" : "auto" }}
          >
            Read More
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Insights() {
  const [featured, ...rest] = ARTICLES;

  return (
    <section className="relative isolate pt-24 pb-12 lg:pt-32 lg:pb-16">
      {/* Ambient blue glow — left side */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 opacity-25"
        style={{
          background:
            "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          filter: "blur(120px)",
        }}
      />

      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-28">
          {/* Left — heading + Insights button */}
          <div className="max-w-120 lg:pt-2">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[40px]"
            >
              Get yourself up-to-speed on all the things happening in fintech
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
                className="h-12 rounded-md border-white/30 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
              >
                Insights
              </Button>
            </motion.div>
          </div>

          {/* Right — articles */}
          <div className="flex flex-col gap-6">
            <ArticleCard article={featured} index={0} featured />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {rest.map((article, i) => (
                <ArticleCard key={i} article={article} index={i + 1} />
              ))}
            </div>

            <motion.a
              href="#"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={4}
              className="group/learn mt-2 inline-flex w-fit items-center gap-2 self-end font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#00B4FD]"
            >
              <span className="relative inline-block">
                Read All Insights
                <span
                  aria-hidden
                  className="absolute left-0 top-full mt-1 h-px w-[40%] bg-[#00B4FD] transition-all duration-300 group-hover/learn:w-full"
                />
              </span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover/learn:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  );
}
