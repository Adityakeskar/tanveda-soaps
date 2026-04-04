import { MessageCircle, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=918087408524&text=${encodeURIComponent("Hi Tanveda! I'd like to know more about your soaps.")}`;

  return (
    <footer className="bg-foreground text-primary-foreground px-6 py-10 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold tracking-wide">Tanveda</p>
          <p className="font-body text-xs opacity-60 mt-1">Pure care, everyday.</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/tanveda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:tanvedasoaps@gmail.com"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="font-body text-xs opacity-50">
          &copy; {new Date().getFullYear()} Tanveda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
