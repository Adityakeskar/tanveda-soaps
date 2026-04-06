import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="heading-display text-foreground mb-8">Terms & Conditions</h1>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-6">
        <p><strong className="text-foreground">Last Updated:</strong> April 2026</p>
        <p>By accessing and using the Tanveda website, you agree to be bound by these terms and conditions.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Products</h2>
        <p>All products sold by Tanveda are handcrafted organic soaps. Product images are representative; slight variations in colour and texture are natural and expected due to the handmade process.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Orders & Payments</h2>
        <p>Orders are subject to product availability. We reserve the right to refuse or cancel orders at our discretion. Payment must be completed before shipment.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Returns & Refunds</h2>
        <p>Due to the nature of our products (personal care/hygiene), we cannot accept returns on used items. If you receive a damaged product, please contact us within 48 hours of delivery for a replacement.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Intellectual Property</h2>
        <p>All content on this website — including text, images, logos, and design — is the property of Tanveda and may not be reproduced without written permission.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Limitation of Liability</h2>
        <p>Tanveda shall not be liable for any allergic reactions or skin sensitivities. We recommend performing a patch test before first use. Discontinue use if irritation occurs.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Contact</h2>
        <p>Questions about these terms? Email us at <a href="mailto:tanvedasoaps@gmail.com" className="text-primary underline">tanvedasoaps@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
