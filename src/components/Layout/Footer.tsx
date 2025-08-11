import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              ClaimPay<span className="text-secondary">UK</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional late payment fee recovery service for UK businesses. 
              We help you recover what's legally owed - quickly, efficiently, 
              and at no upfront cost.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>claims@claimpayuk.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/how-it-works" className="text-primary-foreground/80 hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="/gdpr" className="text-primary-foreground/80 hover:text-secondary transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 ClaimPayUK. All rights reserved. Registered in England & Wales.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              Regulated by the Financial Conduct Authority
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;