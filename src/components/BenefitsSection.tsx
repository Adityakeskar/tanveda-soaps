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
      <div className="text-center mb-16">
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

      {/* Organic timeline / flowing layout */}
      <div className="relative">
        {/* Central flowing line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent hidden md:block" />

        {benefits.map((b, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              {/* Dot on the center line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40 ring-4 ring-background hidden md:block z-10" />

              {/* Content bubble */}
              <div
                className={`relative flex items-center gap-5 max-w-md w-full md:w-[45%] px-6 py-5 ${
                  isLeft ? "md:mr-auto md:text-right md:flex-row-reverse" : "md:ml-auto md:text-left"
                }`}
              >
                {/* Organic blob behind icon */}
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 rounded-full bg-primary/10 blur-md" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
