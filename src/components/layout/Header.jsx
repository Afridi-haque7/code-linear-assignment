import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Solutions", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "About Us", hasMenu: false },
];

function Logo() {
  return (
    <a
      href="#"
      aria-label="N7 home"
      className="select-none text-2xl font-semibold text-white"
    >
      N<span className="">7</span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(10, 21, 27, 0.85)"
              : "rgba(10, 21, 27, 0.55)",
          }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-between rounded-md border border-white/10 px-5 py-2 backdrop-blur-md sm:px-6 sm:py-2.5"
        >
          <Logo />

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.06em] text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                  {link.hasMenu && (
                    <ChevronDown size={12} className="text-white/60" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-9 rounded-md border-white/30 bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background sm:inline-flex"
            >
              Request Demo
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-card p-6"
            >
              <div className="mb-10 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-md px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:bg-white/5"
                    >
                      {link.label}
                      {link.hasMenu && (
                        <ChevronDown size={14} className="text-white/50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="h-12 w-full rounded-full border-white/30 bg-transparent text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-background dark:border-white/30 dark:bg-transparent dark:hover:bg-white dark:hover:text-background"
              >
                Request Demo
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
