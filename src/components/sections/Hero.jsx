import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import heroImg from "@/assets/hero.png";
import activity from "@/assets/cards/activity.png";
import balance from "@/assets/cards/balance.png";
import logo1 from "@/assets/cards/logo1.png";

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

function BalanceCard() {
  return (
    <motion.img
      src={balance}
      alt="Total balance"
      initial={{ opacity: 0, x: 30, y: -10 }}
      animate={{ opacity: 1, x: -80, y: 10 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      style={{ borderRadius: 12 }}
      className="absolute top-5.75 left-88.25 z-20 hidden h-44.25 w-72 object-cover drop-shadow-2xl lg:block"
    />
  );
}

function ActivityCard() {
  return (
    <motion.img
      src={activity}
      alt="Recent activity"
      initial={{ opacity: 0, x: -30, y: 0 }}
      animate={{ opacity: 1, x: -80, y: 20 }}
      transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
      style={{ borderRadius: 12 }}
      className="absolute top-37.5 -left-7 z-20 hidden h-29.25 w-63.5 object-cover drop-shadow-2xl lg:block"
    />
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative w-full max-w-[400px] p-4"
    >
      {/* Concentrated blue glow halo behind image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,115,255,0.7),rgba(30,115,255,0.2)_60%,transparent_90%)] blur-3xl"
      />

      <motion.img
        src={heroImg}
        alt="Person using mobile banking on a phone with a laptop"
        loading="eager"
        fetchPriority="high"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        width={363}
        height={301}
        className="relative z-10 block aspect-[362.64/300.71] w-full rounded-[31px] object-cover shadow-2xl shadow-black/40"
      />

      <BalanceCard />
      <ActivityCard />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 sm:pt-20 lg:pt-32 lg:pb-48">
      <Container className={``}>
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
          {/* Text column */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="text-[44px] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-[64px]"
            >
              The new foundation <br /> of modern banking
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/65 sm:text-base lg:mx-0"
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button className="h-12 rounded-md bg-linear-to-r from-[#1E73FF] to-[#3D8BFF] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#1E73FF]/30 hover:opacity-90 hover:from-[#1E73FF] hover:to-[#3D8BFF]">
                Request Demo
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-md border-white/30 bg-transparent px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
              >
                Contact Us
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-16 sm:mt-20 lg:mt-32"
            >
              <p className="text-md font-bold text-white/75">Trusted By:</p>
              <img
                src={logo1}
                alt="Trusted by partner logos"
                className="mt-5 mx-auto block max-w-full lg:mx-0"
              />
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="pt-8 lg:mr-20">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
