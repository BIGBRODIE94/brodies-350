import { useLenis } from "./hooks/useLenis";
import { Hero } from "./components/Hero";
import { StatsBand } from "./components/StatsBand";
import { NarrativeV6 } from "./components/NarrativeV6";
import { SpecSheet } from "./components/SpecSheet";
import { DesignDetails } from "./components/DesignDetails";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import "./styles/components.css";

export default function App() {
  useLenis();

  return (
    <div className="app-shell">
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <main>
        <Hero />
        <StatsBand />
        <NarrativeV6 />
        <SpecSheet />
        <DesignDetails />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
