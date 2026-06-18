import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats, car, type Stat } from "../data/carData";
import { useCountUp } from "../hooks/useCountUp";

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="section stats">
      <div className="container">
        <p className="stats__lead">{car.tagline}</p>
        <div className="stats__grid" ref={ref}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} start={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  start,
  index,
}: {
  stat: Stat;
  start: boolean;
  index: number;
}) {
  const display = useCountUp({
    target: stat.value,
    decimals: stat.decimals ?? 0,
    start,
  });

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stat-card__value display">
        {display}
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__caption">{stat.caption}</div>
    </motion.div>
  );
}
