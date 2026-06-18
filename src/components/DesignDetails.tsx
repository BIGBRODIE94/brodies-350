import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  designDetails,
  designImagePrimary,
  designImageSecondary,
} from "../data/carData";
import { RevealImage } from "./RevealImage";

export function DesignDetails() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const primaryY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], ["12%", "-8%"]);

  return (
    <section className="section design" ref={ref}>
      <div className="container">
        <header className="design__head">
          <span className="kicker">The Details</span>
          <h2 className="section-title">
            Murdered out.
            <br />
            Down to the spindle.
          </h2>
        </header>

        <div className="design__layout">
          <div className="design__media-col">
            <motion.figure className="design__media design__media--tall" style={{ y: primaryY }}>
              <RevealImage
                src={designImagePrimary}
                alt="Lexus IS 350 F Sport at night"
                kenBurns
                className="design__reveal"
              />
              <span className="img-chip img-chip--corner">IVORY CABIN</span>
            </motion.figure>
            <motion.figure className="design__media" style={{ y: secondaryY }}>
              <RevealImage
                src={designImageSecondary}
                alt="Lexus IS 350 F Sport profile"
                kenBurns
                className="design__reveal"
              />
              <span className="img-chip img-chip--corner">CEMENT GRAY</span>
            </motion.figure>
          </div>

          <ol className="design__list">
            {designDetails.map((detail, i) => (
              <motion.li
                key={detail.index}
                className="design-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="design-item__index eyebrow-num">
                  {detail.index}
                </span>
                <div>
                  <h3 className="design-item__title">{detail.title}</h3>
                  <p className="design-item__body">{detail.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
