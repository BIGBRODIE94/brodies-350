import { motion } from "framer-motion";
import { car } from "../data/carData";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="footer__plate"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="footer__plate-region">{car.region}</span>
          <span className="footer__plate-number">{car.plate}</span>
          <span className="footer__plate-foot">POHANKA LEXUS</span>
        </motion.div>

        <motion.h2
          className="footer__wordmark display"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          BRODIES 350
        </motion.h2>

        <div className="footer__meta">
          <span>{car.make} {car.model}</span>
          <span>{car.generationNote}</span>
          <span>{car.color}</span>
        </div>

        <p className="footer__fine">
          A personal showcase. {car.make} and IS 350 F Sport are marks of their
          respective owner.
        </p>
      </div>
    </footer>
  );
}
