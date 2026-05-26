import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import analytics2 from "@/assets/cards/analytics2.png";

const FEATURES = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

function FeatureItem({ children, index }) {
  return (
    <motion.li
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-start gap-3"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <Check size={12} strokeWidth={3} />
      </span>
      <span className="text-sm leading-snug text-white/85 sm:text-[15px]">
        {children}
      </span>
    </motion.li>
  );
}

export default function EfficientBanking() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — laptop mockup */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: -180 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:-ml-16"
          >
            <div className="relative">
              {/* Screen */}
              <div
                className="rounded-md p-[1.05px]"
                style={{
                  background:
                    "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
                }}
              >
                <div className="rounded-md bg-background p-2 sm:p-3">
                  <img
                    src={analytics2}
                    alt="Connected core banking dashboard"
                    className="block w-full rounded-sm object-contain"
                  />
                </div>
              </div>
              {/* Base */}
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

          {/* Right — heading + checklist */}
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              className="text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[40px]"
            >
              Run a more efficient, flexible, and digitally connected
              corebanking system
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="mt-10 text-sm font-semibold text-white"
            >
              What you will get:
            </motion.p>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <FeatureItem key={f} index={i + 2}>
                  {f}
                </FeatureItem>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
