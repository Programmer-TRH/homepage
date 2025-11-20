import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-border">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-foreground rounded flex items-center justify-center">
              <span className="text-primary font-bold text-base sm:text-lg">
                C
              </span>
            </div>
            <span className="text-foreground font-bold text-lg sm:text-xl">
              CryptoEx
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <a
              href="#"
              className="text-foreground hover:text-muted-foreground transition-colors text-sm lg:text-base"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-muted-foreground transition-colors text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-muted-foreground transition-colors text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#team"
              className="text-foreground hover:text-muted-foreground transition-colors text-sm lg:text-base"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-muted-foreground transition-colors text-sm lg:text-base"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-foreground hover:bg-primary-foreground/10 text-sm"
            >
              Sign In
            </Button>
            <Button className="bg-foreground text-primary hover:bg-foreground/90 text-sm h-8 sm:h-10 px-3 sm:px-4">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground h-8 w-8"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
