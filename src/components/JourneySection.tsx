import { motion } from "framer-motion";

const JourneySection = () => (
  <section className="py-16 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center relative z-10"
    >
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
        It all started with a simple thought, what if{" "}
        <span className="text-foreground font-semibold not-italic">self care</span> could be truly pure? No chemicals,
        no shortcuts. Just honest, <span className="text-foreground font-semibold not-italic">organic</span> goodness
        shaped by hand. Every bar of Tanveda soap is{" "}
        <span className="text-foreground font-semibold not-italic">handcrafted</span> with love, blending age-old
        Ayurvedic wisdom with a dash of modern charm. Because your skin deserves more than just a wash, it deserves a
        little ritual, a moment of joy, a touch of{" "}
        <span className="text-foreground font-semibold not-italic">nature</span>. That's the Tanveda journey, and we're
        just getting started! 🌿
      </p>
    </motion.div>
  </section>
);

export default JourneySection;
