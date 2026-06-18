import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  kenBurns?: boolean;
  eager?: boolean;
  children?: ReactNode;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const WIPE = [0.77, 0, 0.18, 1] as const;

export function RevealImage({
  src,
  alt,
  className = "",
  kenBurns = false,
  eager = false,
  children,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <div className={`reveal-img ${className}`} ref={ref}>
      <motion.div
        className="reveal-img__zoom"
        initial={{ scale: 1.32 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img
          className={`reveal-img__photo${kenBurns ? " is-kenburns" : ""}`}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
        />
      </motion.div>

      <span className="reveal-img__shade" />

      <motion.span
        className="reveal-img__curtain"
        initial={{ y: "0%" }}
        animate={inView ? { y: "-101%" } : {}}
        transition={{ duration: 0.95, ease: WIPE }}
      />
      <motion.span
        className="reveal-img__sheen"
        initial={{ x: "-130%" }}
        animate={inView ? { x: "130%" } : {}}
        transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
      />

      <span className="reveal-img__corner reveal-img__corner--tl" />
      <span className="reveal-img__corner reveal-img__corner--tr" />
      <span className="reveal-img__corner reveal-img__corner--bl" />
      <span className="reveal-img__corner reveal-img__corner--br" />

      {children}
    </div>
  );
}
