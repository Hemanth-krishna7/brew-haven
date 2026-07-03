import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-surface border-t border-secondary/20 pt-16 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="font-serif text-2xl font-bold text-primary tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md transition-all duration-200"
          >
            Brew Haven
          </a>
          <p className="font-sans text-sm text-text-dark/70 leading-relaxed">
            A premium specialty coffee experience. We source, roast, and serve extraordinary coffee, creating a welcoming sanctuary for our community.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-base font-semibold text-primary">Quick Links</h4>
          <ul className="flex flex-col space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-text-dark/80 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-base font-semibold text-primary">Contact Us</h4>
          <ul className="flex flex-col space-y-3 text-sm text-text-dark/80 font-sans">
            <li>
              <span className="block text-[10px] uppercase tracking-widest text-accent font-semibold mb-0.5">Email</span>
              <a 
                href="mailto:hello@brewhaven.com" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                hello@brewhaven.com
              </a>
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-widest text-accent font-semibold mb-0.5">Phone</span>
              <a 
                href="tel:+15558675309" 
                className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                (555) 867-5309
              </a>
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-widest text-accent font-semibold mb-0.5">Location</span>
              <span className="block text-text-dark/70">
                123 Espresso Blvd, Coffee City, CC 90210
              </span>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-base font-semibold text-primary">Follow Us</h4>
          <p className="font-sans text-sm text-text-dark/70 leading-relaxed mb-1">
            Stay updated with our latest bean offerings, coffee cuppings, and seasonal menu launches.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-dark/85 hover:text-primary font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-secondary/15 flex flex-col md:flex-row justify-between items-center text-xs text-text-dark/60 space-y-4 md:space-y-0">
        <p>&copy; {currentYear} Brew Haven. All rights reserved.</p>
        <p className="tracking-wide">Freshly Brewed. Warmly Served.</p>
      </div>
    </footer>
  );
}
