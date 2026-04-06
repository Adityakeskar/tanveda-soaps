import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are Tanveda soaps suitable for all skin types?",
    a: "Yes! We offer a range of soaps formulated for different skin types — oily, dry, sensitive, combination, and mature skin. Check the product labels for the best match.",
  },
  {
    q: "What ingredients do you use?",
    a: "We use only natural, organic ingredients like glycerin soap base, essential oils, aloe vera, sandalwood, rose extracts, and more. No parabens, sulfates, or synthetic chemicals.",
  },
  {
    q: "Are your soaps tested on animals?",
    a: "Absolutely not. Tanveda is 100% cruelty-free. We never test on animals.",
  },
  {
    q: "How should I store the soap?",
    a: "Keep your soap in a well-drained soap dish to extend its life. Avoid leaving it in standing water.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes, we deliver pan-India. Reach out via WhatsApp or our contact form for ordering details.",
  },
  {
    q: "What is the shelf life of your soaps?",
    a: "Our soaps have a shelf life of approximately 12 months from the date of manufacture when stored properly.",
  },
  {
    q: "Can I use these soaps for babies or toddlers?",
    a: "Our soaps are gentle, but we recommend consulting a paediatrician before using any new product on infants. Aloe Calm is our gentlest option.",
  },
  {
    q: "How can I place a bulk order?",
    a: "For bulk or corporate orders, please contact us directly via WhatsApp or email at tanvedasoaps@gmail.com.",
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="heading-display text-foreground mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="font-display text-base text-foreground text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default FAQ;
