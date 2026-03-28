import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Flower2, Recycle } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Chemical-Free", desc: "No parabens, sulfates, or synthetic fragrances." },
  { icon: Droplets, title: "Deep Moisturizing", desc: "Natural oils and butters keep skin hydrated all day." },
  { icon: Flower2, title: "Herbal Goodness", desc: "Infused with Ayurvedic herbs for holistic skin wellness." },
  { icon: Recycle, title: "Eco-Friendly", desc: "Biodegradable, minimal packaging, planet-positive." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding bg-secondary">
    <div className="max-w-5xl mx-auto">
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

      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-5 items-start card-organic"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
