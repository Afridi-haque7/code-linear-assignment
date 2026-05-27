import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is at or above the given min-width breakpoint.
 * Defaults to Tailwind's `lg` (1024px). Used to keep heavy Framer-Motion
 * translate animations (which are authored in fixed pixels for desktop) from
 * pushing content off-screen on mobile and tablet.
 */
export function useIsDesktop(minWidth = 1024) {
  const query = `(min-width: ${minWidth}px)`;
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return isDesktop;
}
