import { MessageCircle, Instagram, Mail, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const whatsappLink = `https://api.whatsapp.com/send?phone=918830334433&text=${encodeURIComponent("Hi Tanveda! I'd like to know more about your soaps.")}`;

const contacts = [
  { id: "whatsapp", href: whatsappLink, label: "WhatsApp", icon: MessageCircle, className: "bg-green-500" },
  { id: "instagram", href: "https://instagram.com/tanvedasoaps", label: "Instagram", icon: Instagram, className: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { id: "gmail", href: "mailto:tanvedasoaps@gmail.com", label: "Gmail", icon: Mail, className: "bg-red-500" },
];

const FloatingContact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    return () => { if (tooltipTimeout) clearTimeout(tooltipTimeout); };
  }, [tooltipTimeout]);

  const handleIconClick = (id: string) => {
    if (!isMobile) return;
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    setHoveredIcon(id);
    const t = setTimeout(() => setHoveredIcon(null), 2000);
    setTooltipTimeout(t);
  };

  // Mobile: collapsible FAB
  if (isMobile) {
    return (
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2">
        <AnimatePresence>
          {expanded && contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleIconClick(c.id)}
                className={`w-9 h-9 rounded-full ${c.className} text-white flex items-center justify-center shadow-md active:scale-90`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </AnimatePresence>

        <motion.button
          onClick={() => setExpanded((p) => !p)}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
          aria-label="Toggle contact"
        >
          <motion.div animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
            {expanded ? <X className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
          </motion.div>
        </motion.button>
      </div>
    );
  }

  // Desktop: original stacked layout
  return (
    <div className="fixed bottom-8 left-8 z-40 flex flex-col gap-3">
      {contacts.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.id} className="relative flex items-center">
            <motion.a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${c.label}`}
              className={`w-14 h-14 rounded-full ${c.className} text-white flex items-center justify-center shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredIcon(c.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
            {hoveredIcon === c.id && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-16 bg-black/80 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none"
              >
                {c.label}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingContact;
