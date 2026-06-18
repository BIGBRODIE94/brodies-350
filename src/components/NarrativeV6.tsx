import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { narrative, narrativeImage } from "../data/carData";
import { RevealImage } from "./RevealImage";

export function NarrativeV6() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <section className="section narrative" ref={ref}>
      <div className="container narrative__grid">
        <div className="narrative__media">
          <motion.div className="narrative__parallax" style={{ y: imageY }}>
            <RevealImage
              src={narrativeImage}
              alt="Lexus IS 350 F Sport rear"
              kenBurns
              className="narrative__reveal"
            />
          </motion.div>
          <motion.span
            className="img-chip"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <b>3.5L</b> V6 &middot; 311 HP
          </motion.span>
        </div>

        <div className="narrative__text">
          <span className="kicker">{narrative.kicker}</span>
          <motion.h2
            className="section-title narrative__heading"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {narrative.heading}
          </motion.h2>

          {narrative.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="narrative__p"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.8,
                delay: 0.12 * (i + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
