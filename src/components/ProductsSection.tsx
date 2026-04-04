import { motion } from "framer-motion";
import soap1 from "@/assets/soap-1.jpg";
import soap2 from "@/assets/soap-2.jpg";
import soap3 from "@/assets/soap-3.jpg";

const products = [
  {
    img: soap1,
    name: "Sandal Bloom",
    desc: "A sandalwood-infused soap enriched with traditional ubtan for everyday care.",
    ingredients: "Coconut milk soap base, Natural ubtan, Sandalwood fragrance oil, Sandalwood essential oil, Permitted cosmetic colour",
    
    weight: "100g",
  },
  {
    img: soap2,
    name: "Roselia",
    desc: "A rose-inspired soap enriched with floral notes for everyday freshness.",
    ingredients: "Coconut milk soap base, Rose fragrance oil, Permitted cosmetic colour, Rose essential oil",
    
    weight: "100g",
  },
  {
    img: soap3,
    name: "Gandhamala",
    desc: "Refreshing aroma of Lemon and Tea Tree that awakens your senses.",
    ingredients: "Lemon zest, Tea tree oil, Neem extract, Aloe vera, Coconut oil",
    
    weight: "100g",
  },
];

const ProductsSection = () => (
  <section id="products" className="section-padding relative overflow-hidden">
    <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 left-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
        >
          Our Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-foreground"
        >
          Handcrafted with Purpose
        </motion.h2>
      </div>

      <div className="space-y-20">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative group">
              <div className={`absolute inset-4 rounded-3xl bg-primary/10 ${i % 2 === 0 ? 'rotate-3' : '-rotate-3'} transition-transform group-hover:rotate-0 duration-500`} />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="font-display text-3xl font-semibold text-foreground">{p.name}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-accent font-bold mt-0.5 shrink-0 w-24">Ingredients</span>
                  <span className="font-body text-sm text-muted-foreground">{p.ingredients}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-accent font-bold mt-0.5 shrink-0 w-24">Benefits</span>
                  <span className="font-body text-sm text-muted-foreground">{p.benefits}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-accent font-bold mt-0.5 shrink-0 w-24">Weight</span>
                  <span className="font-body text-sm text-muted-foreground">{p.weight}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center mt-4 font-body text-sm font-medium text-primary hover:text-accent transition-colors tracking-wide"
              >
                Enquire Now →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
