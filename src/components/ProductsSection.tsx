import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Instagram, X } from "lucide-react";
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
    weight: "Net wt. 100g",
    categories: ["Mature", "Dull", "All Types"],
  },
  {
    id: 2,
    img: roselia,
    name: "Roselia",
    desc: "A rose-inspired soap enriched with floral notes for everyday freshness.",
    ingredients: "Rose, Coconut milk, Floral",
    categories: ["Dry", "Normal"],
    weight: "Net wt. 100g",
  },
  {
    id: 3,
    img: gandhamala,
    name: "Gandhamala",
    desc: "Refreshing aroma of Lemon and Tea Tree that awakens your senses.",
    ingredients: "Lavender, Bouquet, Floral",
    weight: "Net wt. 100g",
    categories: ["Normal", "Combination"],
  },
  {
    id: 4,
    img: aloCalm,
    name: "Aloe Calm",
    desc: "A soothing blend of aloe vera and lavender that calms your skin and mind.",
    ingredients: "Aloe vera, Lavender, Tea Tree",
    weight: "Net wt. 100g",
    categories: ["Sensitive", "Combination"],
  },
  {
    id: 5,
    img: lemoPure,
    name: "Lemo Pure",
    desc: "A zesty citrus cleanse powered by lemon and tea tree for a refreshing glow.",
    ingredients: "Lemon, Tea tree, Refreshing",
    weight: "Net wt. 100g",
    categories: ["Oily", "Acne-prone"],
  },
  {
    id: 6,
    img: blueMusk,
    name: "Blue Musk",
    desc: "A refreshing musk-infused soap with a cool blue essence for an invigorating cleanse.",
    ingredients: "Blue Musk, Rosemary, Refreshing",
    weight: "Net wt. 100g",
    categories: ["Mature", "Dull", "All Types"],
  },
];

type Product = typeof products[0];

const OrderModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=918830334433&text=${encodeURIComponent(`Hi Tanveda! I'd like to order ${product.name}. Please share the details.`)}`;
  const instaLink = `https://instagram.com/tanvedasoaps`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-sm rounded-3xl bg-[#fdf8f2] shadow-2xl overflow-hidden"
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Product image strip */}
          <div className="relative h-44 overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f2] via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-7 pt-2">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">{product.name}</h3>
            <p className="font-body text-xs text-muted-foreground mb-5">Place your order via</p>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#25D366] text-white font-body font-semibold text-sm hover:bg-[#1ebe5a] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Order on WhatsApp
              </a>
              <a
                href={instaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-body font-semibold text-sm transition-colors shadow-md"
                style={{ background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}
              >
                <Instagram className="w-5 h-5 shrink-0" />
                Order on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
  <section id="products" className="section-padding relative overflow-hidden">
    {/* Animated background elements */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 12, repeat: Infinity }}
      className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/6 blur-3xl pointer-events-none"
    />
    <motion.div
      animate={{ scale: [1.05, 1, 1.05] }}
      transition={{ duration: 14, repeat: Infinity, delay: 2 }}
      className="absolute bottom-10 left-0 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none"
    />

    {/* Floating organic elements */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`float-${i}`}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.sin(i) * 25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7 + i * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-2 h-2 rounded-full bg-accent/40 pointer-events-none"
        style={{
          top: `${15 + i * 20}%`,
          left: `${5 + i * 22}%`,
        }}
      />
    ))}

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-4"
        >
          ✨ Curated Collection ✨
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section mb-6"
        >
          Artisanal Wellness Soaps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Each bar is crafted with botanical precision, blending tradition with innovation for a luxurious bathing ritual
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedProduct(p)}
          >
            {/* Soft glow background on hover */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              whileHover={{ scale: 1.05 }}
            />

            <motion.div
              className="relative rounded-3xl p-4"
              style={{ border: "2px solid #DDC299B3" }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(221,194,153,0.35)" }}
              transition={{ duration: 0.25 }}
            >
              {/* Image container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden mb-6 aspect-square"
              >
                {/* Category tags */}
                <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                  {p.categories.map((cat, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="font-body text-[9px] font-bold tracking-wider px-3 py-1.5 rounded-full bg-primary text-white shadow-lg"
                    >
                      {cat}
                    </motion.span>
                  ))}
                </div>

                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.name}</h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

                {/* Ingredient pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.ingredients.split(",").map((ing, idx) => (
                    <span
                      key={idx}
                      className="font-body text-[11px] px-3 py-1 rounded-full text-foreground/70"
                      style={{ background: "rgba(221,194,153,0.25)", border: "1px solid rgba(221,194,153,0.55)" }}
                    >
                      {ing.trim()}
                    </span>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="pt-4 border-t border-border/30">
                  <p className="font-body text-xs tracking-wide text-muted-foreground">{p.weight}</p>
                </div>
              </div>
            </motion.div>
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

    {/* Order Modal */}
    {selectedProduct && (
      <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    )}
  </section>
  );
};

export default ProductsSection;
