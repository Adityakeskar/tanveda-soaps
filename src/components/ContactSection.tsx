import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "918087408524";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Tanveda! I'd like to know more about your soaps.")}`;
  const instagramHandle = "tanveda";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
          >
            Reach Out
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground mb-4"
          >
            We'd Love to Hear from You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg max-w-xl mx-auto"
          >
            Have questions or want to place an order? Reach out to us — we're always happy to chat!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl group-hover:border-primary/30 transition-colors" />
            <div className="relative flex flex-col items-center text-center gap-3 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">WhatsApp</h3>
              <p className="font-body text-sm text-muted-foreground">Message us anytime</p>
            </div>
          </a>

          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl group-hover:border-accent/30 transition-colors" />
            <div className="relative flex flex-col items-center text-center gap-3 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Instagram</h3>
              <p className="font-body text-sm text-muted-foreground">@{instagramHandle}</p>
            </div>
          </a>

          <a
            href="mailto:tanvedasoaps@gmail.com"
            className="group relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl group-hover:border-primary/30 transition-colors" />
            <div className="relative flex flex-col items-center text-center gap-3 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
              <p className="font-body text-sm text-muted-foreground">tanvedasoaps@gmail.com</p>
            </div>
          </a>

          <div className="group relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl" />
            <div className="relative flex flex-col items-center text-center gap-3 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Location</h3>
              <p className="font-body text-sm text-muted-foreground">Handmade in India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
