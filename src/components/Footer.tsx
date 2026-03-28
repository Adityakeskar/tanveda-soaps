const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display text-xl font-bold tracking-wide">Tanveda</p>
        <p className="font-body text-xs opacity-60 mt-1">Handcrafted Organic Soaps</p>
      </div>
      <p className="font-body text-xs opacity-50">
        &copy; {new Date().getFullYear()} Tanveda. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
