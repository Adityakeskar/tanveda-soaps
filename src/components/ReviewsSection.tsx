import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    text: "Sandal Bloom is amazing! My skin feels so soft and the fragrance lasts all day. Completely in love with these soaps.",
  },
  {
    name: "Ankit S.",
    rating: 5,
    text: "Finally found a soap that doesn't dry out my skin. Gandhamala is my go-to — refreshing and natural.",
  },
  {
    name: "Meera K.",
    rating: 5,
    text: "Roselia smells heavenly! You can tell it's made with real ingredients. My whole family uses Tanveda now.",
  },
  {
    name: "Rohit D.",
    rating: 4,
    text: "Great quality soaps at a fair price. The packaging is eco-friendly too. Highly recommend!",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3"
        >
          Happy Customers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-foreground"
        >
          What People Are Saying
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50" />
            <div className="relative p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < r.rating ? 'text-accent fill-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">"{r.text}"</p>
              <p className="font-display text-base font-semibold text-foreground">{r.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
