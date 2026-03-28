import { motion } from "framer-motion";
import heroImg from "@/assets/hero-soap.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-28" style={{ background: "var(--gradient-hero)" }}>
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
          Handcrafted &bull; Organic &bull; Herbal
        </span>
        <h1 className="heading-display text-foreground mb-6">
          Pure Nature,{" "}
          <span className="text-primary italic">Gentle Care</span>
        </h1>
        <p className="text-body-lg max-w-lg mb-8">
          Tanveda brings you handcrafted, herbal bathing soaps made with love from nature's finest ingredients — gentle on every skin type.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-body font-medium px-8 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Explore Soaps
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary font-body font-medium px-8 py-3 text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={heroImg}
            alt="Tanveda handcrafted organic soaps on a wooden tray with herbs"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -bottom-4 -left-4 md:-left-8 bg-accent text-accent-foreground rounded-2xl px-5 py-3 shadow-lg"
        >
          <p className="font-display text-lg font-semibold">100%</p>
          <p className="font-body text-xs tracking-wide">Natural & Organic</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
