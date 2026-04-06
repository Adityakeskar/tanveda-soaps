import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="heading-display text-foreground mb-8">Privacy Policy</h1>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-6">
        <p><strong className="text-foreground">Effective Date:</strong> April 2026</p>
        <p>Tanveda ("we", "our", "us") is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you visit our website or purchase our products.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
        <p>We may collect personal information you provide voluntarily, such as your name, email address, phone number, and shipping address when you place an order or submit feedback through our contact form.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To process and fulfill your orders</li>
          <li>To respond to your enquiries and feedback</li>
          <li>To send occasional updates about new products (only with your consent)</li>
          <li>To improve our website and customer experience</li>
        </ul>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Data Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (e.g., shipping partners) solely to fulfill orders.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Cookies</h2>
        <p>Our website may use minimal cookies to enhance your browsing experience. No tracking cookies are used for advertising purposes.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground pt-4">Contact Us</h2>
        <p>For any privacy-related questions, reach out to us at <a href="mailto:tanvedasoaps@gmail.com" className="text-primary underline">tanvedasoaps@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
