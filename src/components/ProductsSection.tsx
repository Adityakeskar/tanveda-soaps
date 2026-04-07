import { motion } from "framer-motion";
import sandalBloom from "@/assets/product-sandal-bloom.jpeg";
import roselia from "@/assets/product-roselia.jpeg";
import gandhamala from "@/assets/product-gandhamala.jpeg";
import aloCalm from "@/assets/product-aloecalm.jpeg";
import lemoPure from "@/assets/product-lemopure.jpeg";
import blueMusk from "@/assets/product-bluemusk.jpeg";
import waterDropletsBg from "@/assets/water-droplets-bg.jpg";

const products = [
  {
    id: 1,
    img: sandalBloom,
    name: "Sandal Bloom",
    desc: "A sandalwood-infused soap enriched with traditional ubtan for everyday care.",
    ingredients: "Sandalwood, Ubtan, Ayurvedic",
    weight: "100g",
    categories: ["Mature", "Dull", "All Types"],
  },
  {
    id: 2,
    img: roselia,
    name: "Roselia",
    desc: "A rose-inspired soap enriched with floral notes for everyday freshness.",
    ingredients: "Rose, Coconut milk, Floral",
    categories: ["Dry", "Normal"],
    weight: "100g",
  },
  {
    id: 3,
    img: gandhamala,
    name: "Gandhamala",
    desc: "Refreshing aroma of Lemon and Tea Tree that awakens your senses.",
    ingredients: "Lavender, Bouquet, Floral",
    weight: "100g",
    categories: ["Normal", "Combination"],
  },
  {
    id: 4,
    img: aloCalm,
    name: "Aloe Calm",
    desc: "A soothing blend of aloe vera and lavender that calms your skin and mind.",
    ingredients: "Aloe vera, Lavender, Tea Tree",
    weight: "100g",
    categories: ["Sensitive", "Combination"],
  },
  {
    id: 5,
    img: lemoPure,
    name: "Lemo Pure",
    desc: "A zesty citrus cleanse powered by lemon and tea tree for a refreshing glow.",
    ingredients: "Lemon, Tea tree, Refreshing",
    weight: "100g",
    categories: ["Oily", "Acne-prone"],
  },
  {
    id: 6,
    img: blueMusk,
    name: "Blue Musk",
    desc: "A refreshing musk-infused soap with a cool blue essence for an invigorating cleanse.",
    ingredients: "Blue Musk, Rosemary, Refreshing",
    weight: "100g",
    categories: ["Mature", "Dull", "All Types"],
  },
];

const ProductsSection = () => (
  <section id="products" className="relative overflow-hidden">
    {/* Water droplets background */}
    <div className="absolute inset-0">
      <img
        src={waterDropletsBg}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(142_30%_12%/0.82)]" />
    </div>

    <div className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.2em] uppercase text-white/60 mb-3"
          >
            Our Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-white"
          >
            Handcrafted with Love
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
              className="group relative rounded-2xl bg-white/10 backdrop-blur-md p-4 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 border border-white/10"
            >
              <div className="relative rounded-xl overflow-hidden mb-5">
                <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1.5">
                  {p.categories.map((cat, idx) => (
                    <span key={idx} className="font-body text-[9px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-emerald-800 text-white shadow-md">
                      {cat}
                    </span>
                  ))}
                </div>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-1">{p.name}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.ingredients.split(",").map((ing, idx) => (
                  <span key={idx} className="font-body text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                    {ing.trim()}
                  </span>
                ))}
              </div>
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-white/50">
                Net Wt. <span className="text-white/80 font-semibold">{p.weight}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Directions to Use - compact rotating banner */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex items-center gap-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 font-body text-sm text-white/50 italic">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                Directions to Use: "Until and unless you are a toddler, you know how to use it. If you are, your mom knows
                everything — listen to her ;)"
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
