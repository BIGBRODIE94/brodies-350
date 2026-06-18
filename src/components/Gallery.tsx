import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { gallery, type GalleryShot } from "../data/carData";
import { RevealImage } from "./RevealImage";

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
            <GalleryCard
              key={shot.src}
              shot={shot}
              index={i}
              onOpen={() => setActive(shot)}
            />
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
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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

function GalleryCard({
  shot,
  index,
  onOpen,
}: {
  shot: GalleryShot;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);
  const glareX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);

  const handleMove = (e: PointerEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.button
      type="button"
      ref={ref}
      className={`gallery__item gallery__item--${(index % 5) + 1}`}
      onClick={onOpen}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <RevealImage src={shot.src} alt={shot.alt} className="gallery__reveal">
        <motion.span
          className="gallery__glare"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.28), transparent 55%)`
            ),
          }}
        />
        <span className="gallery__index eyebrow-num">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="gallery__meta">
          <span className="gallery__caption">{shot.caption}</span>
          <span className="gallery__view">
            VIEW
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </RevealImage>
    </motion.button>
  );
}
