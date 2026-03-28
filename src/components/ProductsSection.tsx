import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productGandhamala from "@/assets/product-gandhamala.jpeg";
import productSandalBloom from "@/assets/product-sandal-bloom.jpeg";
import productRoselia from "@/assets/product-roselia.jpeg";
import labelRose from "@/assets/label-rose.jpeg";
import labelSandalwood from "@/assets/label-sandalwood.jpeg";
import labelLemon from "@/assets/label-lemon.jpeg";

const products = [
  {
    front: productRoselia,
    back: labelRose,
    name: "Roselia",
    desc: "A rose-inspired soap enriched with floral notes for everyday freshness.",
    ingredients: "Coconut Milk Soap Base, Rose Fragrance Oil, Rose Essential Oil, Permitted Cosmetic Colour",
  },
  {
    front: productSandalBloom,
    back: labelSandalwood,
    name: "Sandal Bloom",
    desc: "A sandalwood-infused soap enriched with traditional ubtan for everyday care.",
    ingredients: "Coconut Milk Soap Base, Natural Ubtan, Sandalwood Fragrance Oil, Sandalwood Essential Oil, Permitted Cosmetic Colour",
  },
  {
    front: productGandhamala,
    back: labelLemon,
    name: "Gandhamala",
    desc: "Immerse yourself in the refreshing aroma of Lemon and Tea Tree as their vibrant essence awakens your senses.",
    ingredients: "Glycerin Soap Base, Lemon Fragrance Oil, Tea Tree Essential Oil, Vegetable Glycerin, Permitted Cosmetic Colour",
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="relative rounded-2xl overflow-hidden mb-5 bg-muted aspect-[2/1]">
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.img
              key="front"
              src={product.front}
              alt={`${product.name} front label`}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.img
              key="back"
              src={product.back}
              alt={`${product.name} ingredients`}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute bottom-3 right-3 bg-foreground/70 text-primary-foreground rounded-full px-3 py-1 font-body text-[10px] tracking-wider uppercase">
          {flipped ? "Tap for front" : "Tap for details"}
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-1">{product.name}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
      <p className="font-body text-xs text-muted-foreground/70 mt-2">Net Wt: 100g</p>
    </motion.div>
  );
};

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
          className="heading-section text-foreground mb-3"
        >
          Handcrafted with Purpose
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-sm text-muted-foreground"
        >
          Tap any product to see ingredients
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
