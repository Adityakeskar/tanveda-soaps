import { motion } from "framer-motion";
import sandalBloom from "@/assets/product-sandal-bloom.jpeg";
import roselia from "@/assets/product-roselia.jpeg";
import gandhamala from "@/assets/product-gandhamala.jpeg";
import aloCalm from "@/assets/product-aloecalm.jpeg";
import lemoPure from "@/assets/product-lemopure.jpeg";
import blueMusk from "@/assets/product-bluemusk.jpeg";

const products = [
  {
    id: 1,
    img: sandalBloom,
    name: "Sandal Bloom",
    desc: "A sandalwood-infused soap enriched with traditional ubtan for everyday care.",
    ingredients: "Sandalwood, Ubtan, Ayurvedic",
    weight: "100g",
  },
  {
    id: 2,
    img: roselia,
    name: "Roselia",
    desc: "A rose-inspired soap enriched with floral notes for everyday freshness.",
    ingredients: "Rose, Coconut milk, Floral ",
    weight: "100g",
  },
  {
    id: 3,
    img: gandhamala,
    name: "Gandhamala",
    desc: "Refreshing aroma of Lemon and Tea Tree that awakens your senses.",
    ingredients: "Lemon zest, Tea tree oil, Neem extract, Aloe vera, Coconut oil",
    weight: "100g",
  },
  {
    id: 4,
    img: aloCalm,
    name: "Aloe Calm",
    desc: "A soothing blend of aloe vera and lavender that calms your skin and mind.",
    ingredients:
      "Glycerin soap base, Aloe vera extract, Lavender fragrance oil, Tea tree essential oil, Vegetable glycerine",
    weight: "100g",
  },
  {
    id: 5,
    img: lemoPure,
    name: "Lemo Pure",
    desc: "A zesty citrus cleanse powered by lemon and tea tree for a refreshing glow.",
    ingredients: "Glycerin soap base, Lemon fragrance oil, Tea tree essential oil, Vegetable glycerine",
    weight: "100g",
  },
  {
    id: 6,
    img: blueMusk,
    name: "Blue Musk",
    desc: "A refreshing musk-infused soap with a cool blue essence for an invigorating cleanse.",
    ingredients: "Coming soon",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl bg-card/50 backdrop-blur-sm p-4 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative rounded-xl overflow-hidden mb-5">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={400}
                height={400}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.name}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-accent font-bold mt-0.5 shrink-0">
                  Ingredients
                </span>
                <span className="font-body text-xs text-muted-foreground">{p.ingredients}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-accent font-bold mt-0.5 shrink-0">
                  Weight
                </span>
                <span className="font-body text-xs text-muted-foreground">{p.weight}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Directions to Use - compact rotating banner */}
      <div className="mt-12 overflow-hidden relative">
        <div className="flex items-center gap-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-body text-sm text-muted-foreground italic">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
              Directions to Use: "Until and unless you are a toddler, you know how to use it. If you are, your mom knows
              everything — listen to her ;)"
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
