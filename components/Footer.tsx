import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">
                  C
                </span>
              </div>
              <span className="text-foreground font-bold text-lg sm:text-xl">
                CryptoEx
              </span>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-base">
              Your trusted platform for secure and efficient cryptocurrency
              trading.
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              >
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              >
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Support
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Newsletter
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
              Subscribe to get updates on market trends and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary border-border text-xs sm:text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 h-9 sm:h-10 w-9 sm:w-10 p-0">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <span>123 Crypto Street, Digital City, DC 10001</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2024 CryptoEx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
