import { cn } from "@/lib/utils";

/**
 * A continuous horizontal marquee. Renders children duplicated twice for
 * a seamless infinite loop. Direction "rtl" scrolls right-to-left.
 */
export default function Marquee({
  children,
  speed = 30,
  direction = "rtl",
  className,
}) {
  const animation =
    direction === "rtl"
      ? `marquee-scroll ${speed}s linear infinite`
      : `marquee-scroll-rev ${speed}s linear infinite`;

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div className="flex shrink-0 items-center gap-12" style={{ animation }}>
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-12"
        style={{ animation }}
      >
        {children}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-scroll-rev {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
