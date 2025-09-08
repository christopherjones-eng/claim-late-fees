import { Mail, MapPin, Phone, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
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
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>claims@claimpayuk.com</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>71-75 Shelton Street, London WC2H 9JQ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Mon-Fri: 9AM-6PM</span>
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
            <h3 className="text-lg font-semibold mb-4">Legal & Compliance</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-primary-foreground/80 hover:text-secondary transition-colors">Cookie Policy</a></li>
              <li><span className="text-primary-foreground/60 text-sm">FCA Regulated</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 ClaimPayUK Limited. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Registered in England & Wales. Company No: 12345678
              </p>
            </div>
            <div className="text-center md:text-right">
              
              <p className="text-primary-foreground/60 text-sm">
                Professional debt recovery services under UK Late Payment Act
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;