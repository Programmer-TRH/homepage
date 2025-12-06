"use client";
import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, show };
}
