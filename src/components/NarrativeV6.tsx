import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { narrative, narrativeImage } from "../data/carData";

export function NarrativeV6() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section className="section narrative" ref={ref}>
      <div className="container narrative__grid">
        <div className="narrative__media">
          <motion.div
            className="narrative__media-inner"
            style={{ y: imageY, scale: imageScale }}
          >
            <img src={narrativeImage} alt="Lexus IS 350 F Sport rear" />
          </motion.div>
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
