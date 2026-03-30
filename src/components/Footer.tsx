const Footer = () => (
  <footer className="bg-foreground text-primary-foreground px-6 py-10 md:px-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display text-xl font-bold tracking-wide">Tanveda</p>
        <p className="font-body text-xs opacity-60 mt-1">Pure care, everyday.</p>
      </div>
      <p className="font-body text-xs opacity-50">
        &copy; {new Date().getFullYear()} Tanveda. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
