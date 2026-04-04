import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Organic", desc: "Made with pure, sustainably sourced herbal ingredients — no chemicals, ever." },
  { icon: Heart, title: "All Skin Types", desc: "Gentle formulations that nourish and protect sensitive, dry, oily, and combination skin." },
  { icon: Sparkles, title: "Handcrafted", desc: "Each bar is lovingly hand-poured in small batches to ensure the highest quality." },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    {/* Decorative wave divider */}
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />

    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
      >
        Our Story
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading-section text-foreground mb-6"
      >
        Rooted in Nature, Crafted with Love
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body-lg max-w-2xl mx-auto mb-8"
      >
        Born from a passion for pure, chemical-free skincare, Tanveda is a homemade soap brand that blends ancient herbal wisdom with modern craftsmanship. Every bar tells a story of nature's healing touch.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic max-w-2xl mx-auto mb-14"
      >
        It all started with a simple thought, what if{" "}
        <span className="text-foreground font-semibold not-italic">self care</span> could be truly pure? No chemicals,
        no shortcuts. Just honest, <span className="text-foreground font-semibold not-italic">organic</span> goodness
        shaped by hand. Every bar of Tanveda soap is{" "}
        <span className="text-foreground font-semibold not-italic">handcrafted</span> with love, blending age-old
        Ayurvedic wisdom with a dash of modern charm. Because your skin deserves more than just a wash, it deserves a
        little ritual, a moment of joy, a touch of{" "}
        <span className="text-foreground font-semibold not-italic">nature</span>. That's the Tanveda journey, and we're
        just getting started! 🌿
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-primary/5 scale-95 group-hover:scale-100 transition-transform duration-300" />
            <div className="relative p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
