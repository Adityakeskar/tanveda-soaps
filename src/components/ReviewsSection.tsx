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

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px]">
    <div className="rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 p-6 md:p-8 h-full">
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
  </div>
);

const ReviewsSection = () => (
  <section id="reviews" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(35 30% 92%), hsl(40 35% 90%), hsl(33 28% 88%))' }}>
    <div className="relative z-10">
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

      <div className="overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-6 px-4 min-w-max">
          {reviews.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
