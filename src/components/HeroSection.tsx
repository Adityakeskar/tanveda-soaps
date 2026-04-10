import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import sandalBloom from "@/assets/product-sandal-bloom.jpeg";
import roselia from "@/assets/product-roselia.jpeg";
import gandhamala from "@/assets/product-gandhamala.jpeg";
import aloCalm from "@/assets/product-aloecalm.jpeg";
import lemoPure from "@/assets/product-lemopure.jpeg";
import blueMusk from "@/assets/product-bluemusk.jpeg";

const soapImages = [
  { img: sandalBloom, name: "Sandal Bloom" },
  { img: roselia, name: "Roselia" },
  { img: gandhamala, name: "Gandhamala" },
  { img: aloCalm, name: "Aloe Calm" },
  { img: lemoPure, name: "Lemo Pure" },
  { img: blueMusk, name: "Blue Musk" },
];

const AnimatedLeaf = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -100, rotate: 0 }}
    animate={{ opacity: 1, y: 100, rotate: 360 }}
    transition={{ delay, duration: 3, repeat: Infinity }}
    className="absolute text-3xl pointer-events-none"
  >
    🍃
  </motion.div>
);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % soapImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Animated background shapes - desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full bg-accent/6 blur-3xl"
          />
          <AnimatedLeaf delay={0} />
          <AnimatedLeaf delay={1.5} />
          <AnimatedLeaf delay={3} />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              animate={{ y: [0, -60, 0], x: [0, Math.sin(i) * 30, 0] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full border border-accent/30 pointer-events-none"
              style={{
                width: `${40 + i * 15}px`,
                height: `${40 + i * 15}px`,
                top: `${20 + i * 25}%`,
                left: `${10 + i * 30}%`,
                background: `radial-gradient(circle at 30% 30%, rgba(51, 115, 85, 0.1), rgba(51, 115, 85, 0.02))`,
              }}
            />
          ))}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`petal-${i}`}
              animate={{ y: [0, 100], x: [0, Math.cos(i) * 50], rotate: [0, 360] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute text-2xl pointer-events-none opacity-50"
              style={{ top: `${-10 + i * 20}%`, right: `${10 + i * 15}%` }}
            >
              🌸
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block font-body text-sm tracking-[0.25em] uppercase text-accent font-semibold mb-4"
          >
            ✨ Timeless Organic Care ✨
          </motion.span>

          <h1 className="heading-display mb-4 text-foreground">
            Natural Rituals for Radiant Skin
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-body-lg max-w-lg mb-8 text-muted-foreground"
          >
            Crafted with botanical wisdom and pure intention. Each bar of Tanveda carries the essence of nature's healing power, transformed into a luxurious bathing experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-organic bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Discover Collection
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 grid grid-cols-3 gap-6"
          >
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-primary">100%</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider">NATURAL</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-primary">HERBAL</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider">INFUSED</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-primary">ECO</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider">FRIENDLY</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex relative w-full h-full min-h-[600px] items-center justify-center overflow-hidden"
        >
          {/* Seamless blend - no background, transparent to show body gradient */}
          <div className="absolute inset-0" />

          {/* Image carousel - seamless blend */}
          <div className="relative w-full h-full flex items-center justify-center">
            {soapImages.map((soap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 0.4,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ pointerEvents: index === currentImageIndex ? "auto" : "none" }}
              >
                {/* Large soft glow - desktop only */}
                {!isMobile && (
                  <motion.div
                    animate={{
                      scale: index === currentImageIndex ? [0.9, 1.1, 0.9] : 0,
                      opacity: index === currentImageIndex ? [0.25, 0.4, 0.25] : 0,
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/60 via-accent/40 to-primary/60 blur-3xl pointer-events-none"
                  />
                )}

                {/* Image */}
                <motion.div
                  animate={isMobile ? {} : {
                    y: index === currentImageIndex ? [0, -20, 0] : 0,
                    rotateZ: index === currentImageIndex ? [0, 2, -2, 0] : 0,
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                  style={{
                    maskImage: "radial-gradient(circle at center, white 0%, white 55%, rgba(255,255,255,0.7) 75%, rgba(255,255,255,0.2) 90%, rgba(255,255,255,0) 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, white 0%, white 55%, rgba(255,255,255,0.7) 75%, rgba(255,255,255,0.2) 90%, rgba(255,255,255,0) 100%)",
                  }}
                >
                  <img
                    src={soap.img}
                    alt={soap.name}
                    className="w-80 h-80 md:w-96 md:h-96 object-contain"
                  />
                </motion.div>

                {/* Organic floating particles - desktop only */}
                {!isMobile && index === currentImageIndex && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: Math.cos((i / 5) * Math.PI * 2) * 150,
                          y: Math.sin((i / 5) * Math.PI * 2) * 150,
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 6 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-accent/60"
                      />
                    ))}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Floating info badge - minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-12 left-12 z-30"
          >
            <motion.div
              animate={isMobile ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-display text-xl font-semibold text-foreground">
                {soapImages[currentImageIndex].name}
              </p>
              <p className="font-body text-xs tracking-widest text-primary font-semibold">ORGANIC • HANDCRAFTED</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
