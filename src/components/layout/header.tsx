
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Logo from './logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { FC } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

interface NavLinkProps {
  href: string;
  label: string;
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ href, label, isMobile = false, onClose }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-highlight", 
        isActive ? "text-primary font-semibold" : "text-foreground/80", 
        isMobile && "block py-2 text-sm"
      )}
      onClick={onClose}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="p-6">
                  <div className="mb-8">
                    <Logo />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                         <NavLink href={link.href} label={link.label} isMobile />
                       </SheetClose>
                    ))}
                     <SheetClose asChild>
                        <Button asChild variant="default" className="w-full mt-4 bg-primary text-primary-foreground">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                     </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
