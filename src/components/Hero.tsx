import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { car, heroImage } from "../data/carData";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      <motion.div
        className="hero__media"
        style={{ scale: imageScale, y: imageY }}
      >
        <img src={heroImage} alt="Lexus IS 350 F Sport" />
      </motion.div>
      <motion.div className="hero__scrim" style={{ opacity: overlayOpacity }} />

      <motion.div
        className="hero__content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {car.make} {"\u00b7"} {car.model}
        </motion.span>

        <h1 className="hero__title display" aria-label={car.badge}>
          <Word delay={0.35}>BRODIES</Word>
          <Word delay={0.5}>350</Word>
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {car.heroSub}
        </motion.p>
      </motion.div>

      <motion.div
        className="hero__cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span>SCROLL</span>
        <span className="hero__cue-line">
          <span className="hero__cue-dot" />
        </span>
      </motion.div>
    </section>
  );
}

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="hero__word">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
