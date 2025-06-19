
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, MoveRight } from 'lucide-react';

const NewHeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gray-200">
    <Image
      src="https://source.unsplash.com/random/1920x1000/?modern+living"
      alt="Modern interior design"
      layout="fill"
      objectFit="cover"
      className="absolute z-0 opacity-50"
      priority
    />
    <div className="relative z-10 container mx-auto px-4 py-16 text-left">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 text-foreground leading-tight">
          Elysian Interiors and Solutions
        </h1>
        <p className="text-lg text-foreground/80 mb-8">
          Design is beyond just being you, it reflects your personality, taste and style. At Elysian Interiors we make sure to create a space for you that is truly yours.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-base">
          <Link href="/contact">
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const ResidentialServicesSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">Residential Services</h2>
          <Link href="/services/residential" className="text-sm text-accent hover:text-accent/80 font-medium flex items-center">
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] group">
            <Image src="https://source.unsplash.com/random/600x800/?luxury+bedroom" alt="Residential Design 1" layout="fill" objectFit="cover" className="rounded-md" />
            <div className="absolute bottom-4 left-4 text-2xl font-headline font-bold text-white bg-black/30 p-2 rounded">01</div>
          </div>
          <div className="relative aspect-[3/4] group mt-8">
            <Image src="https://source.unsplash.com/random/600x800/?modern+kitchen" alt="Residential Design 2" layout="fill" objectFit="cover" className="rounded-md" />
            <div className="absolute bottom-4 left-4 text-2xl font-headline font-bold text-white bg-black/30 p-2 rounded">02</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const YourHomeReflectionSection = () => {
  const services = [
    { name: 'Commercial Service', image: 'https://source.unsplash.com/random/400x300/?office+workspace', hint: 'office workspace design' },
    { name: 'Retail Shop Design', image: 'https://source.unsplash.com/random/400x300/?boutique+store', hint: 'boutique store interior' },
    { name: 'Home Office', image: 'https://source.unsplash.com/random/400x300/?stylish+home', hint: 'stylish home office' },
    { name: 'Salon Design', image: 'https://source.unsplash.com/random/400x300/?luxury+salon', hint: 'luxury salon interior' },
  ];
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold">Your home, your reflection</h2>
          <p className="text-base text-secondary-foreground/80">
            We deliver exceptional interior design services for residential and commercial projects. Our team of experts ensures that every space we design is a perfect blend of aesthetics and functionality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="bg-card text-card-foreground overflow-hidden group">
              <div className="relative aspect-video">
                <Image src={service.image} alt={service.name} layout="fill" objectFit="cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-headline text-lg font-semibold">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const FullWidthImageSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="relative aspect-[16/7] rounded-lg overflow-hidden">
        <Image src="https://source.unsplash.com/random/1600x700/?panoramic+living" alt="Spacious modern living room" layout="fill" objectFit="cover" />
      </div>
    </div>
  </section>
);

const ExploreProjectsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-end">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
          Explore our selection of completed interior projects
        </h2>
        <p className="text-base text-foreground/80">
          We are proud to share the visions that we have transformed into realities. Our projects showcase our commitment to excellence, creating unique and inspiring spaces.
        </p>
      </div>
    </div>
  </section>
);

const ProjectShowcaseItem = ({
  count,
  category,
  title,
  image1,
  image2,
  href = "/portfolio"
}: {
  count: string;
  category: string;
  title: string;
  image1: string;
  image2: string;
  href?: string;
}) => (
  <div className="py-12 border-b border-border last:border-b-0">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-foreground/70">{count} / {category.toUpperCase()}</p>
        <Button variant="link" asChild className="text-accent hover:text-accent/80 p-0">
          <Link href={href}>View More <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
      <h3 className="text-2xl md:text-3xl font-headline font-semibold text-foreground mb-8">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={image1} alt={title + " - view 1"} layout="fill" objectFit="cover" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={image2} alt={title + " - view 2"} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  </div>
);

const NewsletterSection = () => (
  <section className="relative py-20 md:py-32 bg-gray-300">
    <Image
      src="https://source.unsplash.com/random/1920x600/?subtle+texture"
      alt="Abstract texture background"
      layout="fill"
      objectFit="cover"
      className="absolute z-0 opacity-30"
    />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-6">Newsletter Subscribe</h2>
      <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
        Stay updated with our latest projects, design trends, and exclusive offers.
      </p>
      <form className="max-w-md mx-auto flex gap-2">
        <Input type="email" placeholder="Enter your email" className="bg-background/80" />
        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Enter
        </Button>
      </form>
    </div>
  </section>
);


export default function Home() {
  return (
    <>
      <NewHeroSection />
      <ResidentialServicesSection />
      <YourHomeReflectionSection />
      <FullWidthImageSection />
      <ExploreProjectsSection />
      
      <ProjectShowcaseItem
        count="01"
        category="Apartment & Interior"
        title="Apartment & Interior Design and fitout"
        image1="https://source.unsplash.com/random/800x600/?modern+apartment"
        image2="https://source.unsplash.com/random/800x600/?apartment+kitchen"
      />
      <ProjectShowcaseItem
        count="02"
        category="Villa Interior"
        title="Villa Interior Design & Fitout"
        image1="https://source.unsplash.com/random/800x600/?luxury+villa"
        image2="https://source.unsplash.com/random/800x600/?villa+swimming"
      />

      <div className="py-12 text-center bg-background">
        <div className="container mx-auto px-4">
            <Link href="/portfolio" className="text-lg font-medium text-foreground hover:text-accent inline-flex items-center group">
                View more projects <MoveRight className="ml-2 h-5 w-5 text-accent transform transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
      
      <NewsletterSection />
    </>
  );
}
