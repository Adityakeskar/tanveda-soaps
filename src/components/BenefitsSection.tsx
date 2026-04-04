import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Flower2, Recycle } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Chemical-Free", desc: "No parabens, sulfates, or synthetic fragrances." },
  { icon: Droplets, title: "Deep Moisturizing", desc: "Natural oils and butters keep skin hydrated all day." },
  { icon: Flower2, title: "Herbal Goodness", desc: "Infused with Ayurvedic herbs for holistic skin wellness." },
  { icon: Recycle, title: "Eco-Friendly", desc: "Biodegradable, minimal packaging, planet-positive." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#2D4A2D' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
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

      <div className="flex flex-wrap justify-center gap-10 md:gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center max-w-[200px] group"
          >
            {/* Organic circular icon */}
            <div className="relative mb-4">
              <div className="absolute -inset-2 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h3 className="font-display text-base font-semibold text-foreground mb-1">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
