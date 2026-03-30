import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Flower2, Recycle } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Chemical-Free", desc: "No parabens, sulfates, or synthetic fragrances." },
  { icon: Droplets, title: "Deep Moisturizing", desc: "Natural oils and butters keep skin hydrated all day." },
  { icon: Flower2, title: "Herbal Goodness", desc: "Infused with Ayurvedic herbs for holistic skin wellness." },
  { icon: Recycle, title: "Eco-Friendly", desc: "Biodegradable, minimal packaging, planet-positive." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
        >
          Why Tanveda
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-foreground"
        >
          Goodness You Can Feel
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/20 transition-colors duration-300" />
            <div className="relative flex gap-5 items-start p-6 md:p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
