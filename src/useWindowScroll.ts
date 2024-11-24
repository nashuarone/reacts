import { useEffect, useState } from "react";

export function useWindowScroll() {
    const [scroll, setScroll] = useState(() => ({ x: window.scrollX, y: window.scrollY }));
  const scrollTo = ({ x = 0, y = 0 }: { x: number; y: number }) => {
    window.scrollTo(x, y);
  };
  useEffect(() => {
    const onScroll = () => setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  })
  return [scroll, scrollTo];
}
