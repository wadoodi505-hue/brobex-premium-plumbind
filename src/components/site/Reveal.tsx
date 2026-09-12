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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
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
