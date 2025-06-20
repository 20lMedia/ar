import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Briefcase, Palette, Sofa, Building, Sparkles, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Luxury Residential Design',
    description: 'Crafting bespoke interiors for private homes, apartments, and estates that reflect your unique taste and lifestyle.',
    icon: Home,
    href: '/services/residential',
  },
  {
    id: 2,
    title: 'High-End Commercial Spaces',
    description: 'Designing sophisticated and functional environments for boutiques, offices, hotels, and restaurants.',
    icon: Building,
    href: '/services/commercial',
  },
  {
    id: 3,
    title: 'Bespoke Furniture & Styling',
    description: 'Curating and designing custom furniture pieces and providing expert styling to perfect every detail of your space.',
    icon: Sofa,
    href: '/services/styling',
  },
  {
    id: 4,
    title: 'Full-Service Project Management',
    description: 'Overseeing every aspect of your design project from conception to completion with meticulous attention.',
    icon: Briefcase,
    href: '/services/project-management',
  },
  {
    id: 5,
    title: 'Art Curation & Acquisition',
    description: 'Selecting and sourcing fine art pieces that complement your interior and enhance its character.',
    icon: Palette,
    href: '/services/art-curation',
  },
  {
    id: 6,
    title: 'Exclusive Event & Show Home Design',
    description: 'Creating memorable and impactful designs for special events, showrooms, and luxury property presentations.',
    icon: Sparkles,
    href: '/services/event-design',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 md:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Our Bespoke Design Services
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Tailored solutions to transform your vision into an exquisitely designed reality.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Card key={service.id} className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-lg">
                <CardHeader className="flex flex-row items-center space-x-4 p-6">
                  <div className="p-3 bg-accent/10 rounded-full"> {/* Slightly adjusted icon bg for new palette */}
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <CardDescription className="text-foreground/70 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                   <Button variant="link" asChild className="p-0 text-accent hover:text-highlight font-semibold">
                    <Link href={service.href}>Learn More <ChevronRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Schedule a discovery call to discuss your project and learn how AR Architecture Design Studio can bring your aspirations to life.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-highlight hover:text-highlight-foreground text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Schedule a Discovery Call <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
