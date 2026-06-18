import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { gallery, type GalleryShot } from "../data/carData";

export function Gallery() {
  const [active, setActive] = useState<GalleryShot | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="section gallery">
      <div className="container">
        <header className="gallery__head">
          <span className="kicker">The Gallery</span>
          <h2 className="section-title">Every angle.</h2>
        </header>

        <div className="gallery__grid">
          {gallery.map((shot, i) => (
            <motion.button
              type="button"
              className={`gallery__item gallery__item--${(i % 5) + 1}`}
              key={shot.src}
              onClick={() => setActive(shot)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <span className="gallery__caption">{shot.caption}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
          >
            <motion.figure
              className="lightbox__figure"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.alt} />
              <figcaption>{active.caption}</figcaption>
            </motion.figure>
            <button
              type="button"
              className="lightbox__close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              CLOSE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
