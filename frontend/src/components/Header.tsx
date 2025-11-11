import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";
import { Link } from "react-router-dom"; // <-- add this

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Keep all existing hash links for on-page sections
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Start a Drive", href: "#start-drive" },
    { name: "Join Drives", href: "#join-drives" },
    { name: "NGO Partners", href: "#ngo-partners" },
    // Impact Map should go to the route, not a hash
    { name: "Impact Map", href: "/impact", isRoute: true },
    { name: "Contributors", href: "#contributors" },
    { name: "Donate", href: "#donate" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Droplets className="h-8 w-8 text-primary animate-wave" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ripple"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Ripple of Change
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-gradient-wave">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full bg-gradient-wave">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
