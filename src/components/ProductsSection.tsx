import { motion } from "framer-motion";
import soap1 from "@/assets/soap-1.jpg";
import soap2 from "@/assets/soap-2.jpg";
import soap3 from "@/assets/soap-3.jpg";

const products = [
  { img: soap1, name: "Roselia", desc: "A rose-inspired soap enriched with floral notes for everyday freshness." },
  { img: soap2, name: "Sandal Bloom", desc: "A sandalwood-infused soap enriched with traditional ubtan for everyday care." },
  { img: soap3, name: "Gandhamala", desc: "Refreshing aroma of Lemon and Tea Tree that awakens your senses." },
];

const ProductsSection = () => (
  <section id="products" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden mb-5 bg-muted">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.name}</h3>
            <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
