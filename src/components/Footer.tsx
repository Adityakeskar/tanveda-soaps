import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ayushLogo from "@/assets/ayush-certified.jpg";

const whatsappLink = `https://api.whatsapp.com/send?phone=918087408524&text=${encodeURIComponent("Hi Tanveda! I'd like to know more about your soaps.")}`;

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Feedback", href: "#contact" },
];

const Footer = () => {
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Brand + Contact Icons */}
        <div>
          <p className="font-display text-xl font-bold tracking-wide">Tanveda</p>
          <p className="font-body text-xs opacity-60 mt-1 mb-4">Pure care, everyday.</p>
          <div className="flex items-center gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/tanveda" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:tanvedasoaps@gmail.com" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display text-sm font-semibold tracking-wide uppercase mb-3 opacity-80">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleScrollLink(e, l.href)} className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Certification */}
        <div>
          <p className="font-display text-sm font-semibold tracking-wide uppercase mb-3 opacity-80">Legal</p>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
            <li><Link to="/faq" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">FAQ</Link></li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <img src={ayushLogo} alt="National Ayush Mission Certified" className="w-8 h-8 rounded-full object-cover opacity-80" />
            <p className="font-body text-[10px] opacity-50">Ayush Certified</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-primary-foreground/10">
        <p className="font-body text-xs opacity-40 text-center">
          &copy; {new Date().getFullYear()} Tanveda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
