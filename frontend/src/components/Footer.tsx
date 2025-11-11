import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Droplets, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Get Involved",
      links: [
        "Start a Drive",
        "Join Cleanup",
        "Volunteer",
        "Partner with Us"
      ]
    },
    {
      title: "Resources",
      links: [
        "Impact Map",
        "Educational Materials",
        "Research Reports",
        "Best Practices"
      ]
    },
    {
      title: "Community",
      links: [
        "Contributors",
        "NGO Partners",
        "Success Stories",
        "Events Calendar"
      ]
    },
    {
      title: "Support",
      links: [
        "Donate",
        "Corporate Partnerships",
        "Grant Programs",
        "Contact Us"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Droplets className="h-8 w-8 text-accent animate-wave" />
              </div>
              <span className="text-xl font-bold">Ripple of Change</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Creating waves of positive environmental impact through community-driven 
              water conservation initiatives worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="ml-2 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info & Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@rippleofchange.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Global Headquarters, Earth</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Our Impact</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Environmental Commitment */}
            <div>
              <h4 className="font-semibold mb-3">Our Commitment</h4>
              <p className="text-sm text-primary-foreground/80">
                Carbon neutral operations • 100% renewable energy • 
                Transparent impact reporting • Community-first approach
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Ripple of Change. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="text-primary-foreground/80 text-sm">
              Made with 💙 for our planet
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;