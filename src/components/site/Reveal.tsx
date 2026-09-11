import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export type RevealFrom = "bottom" | "left" | "right" | "scale";

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  from = "bottom",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  from?: RevealFrom;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reveal immediately if IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "200px 0px 200px 0px",
      },
    );

    observer.observe(node);

    // Safety fallback: never leave content permanently invisible.
    const fallback = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      data-from={from}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
