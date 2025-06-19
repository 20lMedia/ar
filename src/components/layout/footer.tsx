import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Elysian Interiors. All rights reserved.
            <br />
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
