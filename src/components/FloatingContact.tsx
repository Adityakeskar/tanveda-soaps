import { MessageCircle, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const whatsappLink = `https://api.whatsapp.com/send?phone=918087408524&text=${encodeURIComponent("Hi Tanveda! I'd like to know more about your soaps.")}`;

const FloatingContact = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleIconClick = (iconName: string) => {
    // Clear any existing timeout
    if (tooltipTimeout) clearTimeout(tooltipTimeout);

    // Show tooltip
    setHoveredIcon(iconName);

    // Auto-hide tooltip after 2 seconds on mobile
    const timeout = setTimeout(() => {
      setHoveredIcon(null);
    }, 2000);
    setTooltipTimeout(timeout);
  };

  const handleMouseEnter = (iconName: string) => {
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  useEffect(() => {
    return () => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
    };
  }, [tooltipTimeout]);

  const iconClass = "w-5 h-5";

  return (
    <div className="fixed bottom-8 left-8 z-40 flex flex-col gap-3">
      <div className="relative flex items-center">
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => handleMouseEnter("whatsapp")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleIconClick("whatsapp")}
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className={iconClass} />
        </motion.a>
        {hoveredIcon === "whatsapp" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-16 bg-black/80 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none"
          >
            WhatsApp
          </motion.div>
        )}
      </div>

      <div className="relative flex items-center">
        <motion.a
          href="https://instagram.com/tanvedasoaps"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => handleMouseEnter("instagram")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleIconClick("instagram")}
          aria-label="Contact via Instagram"
        >
          <Instagram className={iconClass} />
        </motion.a>
        {hoveredIcon === "instagram" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-16 bg-black/80 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none"
          >
            Instagram
          </motion.div>
        )}
      </div>

      <div className="relative flex items-center">
        <motion.a
          href="mailto:tanvedasoaps@gmail.com"
          className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => handleMouseEnter("gmail")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleIconClick("gmail")}
          aria-label="Contact via Email"
        >
          <Mail className={iconClass} />
        </motion.a>
        {hoveredIcon === "gmail" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-16 bg-black/80 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none"
          >
            Gmail
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FloatingContact;
