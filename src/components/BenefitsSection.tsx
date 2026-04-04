import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Flower2, Recycle } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Chemical-Free", desc: "No parabens, sulfates, or synthetic fragrances." },
  { icon: Droplets, title: "Deep Moisturizing", desc: "Natural oils and butters keep skin hydrated all day." },
  { icon: Flower2, title: "Herbal Goodness", desc: "Infused with Ayurvedic herbs for holistic skin wellness." },
  { icon: Recycle, title: "Eco-Friendly", desc: "Biodegradable, minimal packaging, planet-positive." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A1B 0%, #2D4A2D 40%, #3A5C3A 100%)' }}>
    {/* Decorative glows */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: '#E8C97A', opacity: 0.06 }} />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: '#E8C97A', opacity: 0.04 }} />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.25em] uppercase mb-3"
          style={{ color: '#E8C97A' }}
        >
          ✦ Why Tanveda ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-white"
        >
          Goodness You Can Feel
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 h-[2px] w-20 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #E8C97A, transparent)' }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex flex-col items-center text-center max-w-[200px] group"
          >
            <div className="relative mb-5">
              <div className="absolute -inset-3 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: '#E8C97A', opacity: 0.15 }} />
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                style={{ background: 'linear-gradient(145deg, rgba(232,201,122,0.2), rgba(232,201,122,0.05))', border: '1.5px solid rgba(232,201,122,0.35)' }}
              >
                <b.icon className="w-7 h-7" style={{ color: '#E8C97A' }} />
              </div>
            </div>

            <h3 className="font-display text-base font-semibold mb-1.5" style={{ color: '#E8C97A' }}>{b.title}</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
