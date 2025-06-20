
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-border/40 bg-background text-foreground/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm ">
              Designing innovative architectural and interior solutions.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-highlight transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-accent" />
                <span>1st Floor, AMBAL HARWARES, 58, Santhai Rd, Golden Nagar, Mettupatti, Dindigul, Tamil Nadu 624002, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-accent" />
                <a href="mailto:contact@ararchitecturedesignstudio.com" className="hover:text-highlight transition-colors">contact@ararchitecturedesignstudio.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-accent" />
                <a href="tel:+919626111223" className="hover:text-highlight transition-colors">+91 96261 11223</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-highlight transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm">
          &copy; {currentYear} AR Architecture Design Studio. All rights reserved.
          <br />
          <Link href="/privacy-policy" className="hover:text-highlight transition-colors">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-highlight transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
