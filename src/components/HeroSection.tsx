import { motion } from "framer-motion";
import heroImg from "@/assets/hero-soap.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
    {/* Organic background shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
          Handcrafted &bull; Organic &bull; Herbal
        </span>
        <h1 className="heading-display text-foreground mb-3">
          Pure Care,{" "}
          <span className="text-primary italic">Everyday.</span>
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            src={heroImg}
            alt="Tanveda handcrafted organic soaps"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>
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
