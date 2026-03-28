import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Organic", desc: "Made with pure, sustainably sourced herbal ingredients — no chemicals, ever." },
  { icon: Heart, title: "All Skin Types", desc: "Gentle formulations that nourish and protect sensitive, dry, oily, and combination skin." },
  { icon: Sparkles, title: "Handcrafted", desc: "Each bar is lovingly hand-poured in small batches to ensure the highest quality." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary">
    <div className="max-w-5xl mx-auto text-center">
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
        className="text-body-lg max-w-2xl mx-auto mb-14"
      >
        Born from a passion for pure, chemical-free skincare, Tanveda is a homemade soap brand that blends ancient herbal wisdom with modern craftsmanship. Every bar tells a story of nature's healing touch.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-organic flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
