import { motion } from "framer-motion";
import { specGroups, type SpecGroup } from "../data/carData";

export function SpecSheet() {
  return (
    <section className="section specs">
      <div className="container">
        <header className="specs__head">
          <span className="kicker">The Numbers</span>
          <h2 className="section-title">Full specification.</h2>
        </header>

        <div className="specs__grid">
          {specGroups.map((group, i) => (
            <SpecColumn key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecColumn({ group, index }: { group: SpecGroup; index: number }) {
  return (
    <motion.div
      className="spec-col"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="spec-col__title">{group.title}</h3>
      <dl className="spec-col__list">
        {group.rows.map((row) => (
          <div className="spec-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </motion.div>
  );
}
