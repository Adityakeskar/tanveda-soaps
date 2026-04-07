import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const EnquirySection = () => {
  const whatsappLink = `https://wa.me/918830334433?text=${encodeURIComponent("Hi Tanveda! I'd like to place an order or know more about your soaps.")}`;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="heading-section text-foreground mb-4">Want to Place an Order?</h2>
        <p className="text-body-lg mb-8 max-w-xl mx-auto">
          We'd love to hear from you! Send us a message on WhatsApp and we'll get back to you right away.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground font-body font-medium px-10 py-4 text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default EnquirySection;
