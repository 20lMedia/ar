import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

// Sections (can be moved to separate files if they grow larger)

const HeroSection = () => (
  <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center text-center text-white bg-slate-700">
    <Image
      src="https://placehold.co/1920x1080.png"
      alt="Luxurious interior design"
      layout="fill"
      objectFit="cover"
      className="absolute z-0"
      data-ai-hint="luxury living room"
      priority
    />
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="relative z-20 p-8 max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 leading-tight shadow-text">
        Crafting Timeless Spaces, Unveiling Your Story
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 font-body text-slate-200 shadow-text">
        Experience bespoke interior design that blends luxury, comfort, and personal expression.
      </p>
      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
        <Link href="/contact">
          Book Your Design Consultation <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

const IntroSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto max-w-4xl text-center px-4">
      <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-6">
        Elegance, Redefined.
      </h2>
      <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
        At Elysian Interiors, we believe that true luxury lies in the artful harmony of form and function. Our design philosophy centers around creating spaces that are not only visually stunning but also deeply personal and reflective of your unique lifestyle.
      </p>
      <p className="text-lg text-foreground/80 leading-relaxed">
        With meticulous attention to detail and a passion for exquisite craftsmanship, we transform houses into homes, and visions into breathtaking realities.
      </p>
    </div>
  </section>
);

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: 'Manhattan Penthouse', description: 'Urban sophistication with panoramic city views.', imageUrl: 'https://placehold.co/600x400.png', hint: 'modern apartment' },
    { id: 2, title: 'Coastal Retreat', description: 'Serene and luxurious beachfront living.', imageUrl: 'https://placehold.co/600x400.png', hint: 'beach house' },
    { id: 3, title: 'Heritage Villa', description: 'Classic elegance meets contemporary comfort.', imageUrl: 'https://placehold.co/600x400.png', hint: 'classic interior' },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center text-primary mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70 mb-4">{project.description}</CardDescription>
                <Button variant="link" asChild className="p-0 text-accent hover:text-accent/80">
                  <Link href="/portfolio">View Project <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/portfolio">
              Explore All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ClientLogos = () => {
  const logos = [
    { name: 'LuxeLiving Magazine', src: 'https://placehold.co/150x60.png?text=LUXE+LIVING', hint: 'magazine logo' },
    { name: 'Architectural Digest', src: 'https://placehold.co/150x60.png?text=ARCH+DIGEST', hint: 'magazine logo' },
    { name: 'Elle Decor', src: 'https://placehold.co/150x60.png?text=ELLE+DECOR', hint: 'magazine logo' },
    { name: 'Forbes', src: 'https://placehold.co/150x60.png?text=FORBES', hint: 'publication logo' },
  ];
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold text-muted-foreground mb-10">
          As Featured In & Trusted By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={150}
              height={60}
              className="object-contain"
              data-ai-hint={logo.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeCtaSection = () => (
  <section className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto max-w-3xl text-center px-4">
      <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
        Ready to Transform Your Space?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Let us help you create the luxurious, personalized environment you've always dreamed of.
      </p>
      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
        <Link href="/contact">
          Schedule Your Discovery Call <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);


export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <ClientLogos />
      <HomeCtaSection />
    </>
  );
}
