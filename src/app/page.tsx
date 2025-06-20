
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const NewHeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gray-200">
    <Image
      src="/images/home/hero-modern-living.jpg"
      alt="Modern interior design"
      layout="fill"
      objectFit="cover"
      className="absolute z-0 opacity-50"
      priority
    />
    <div className="relative z-10 container mx-auto px-4 py-16 text-left">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 text-foreground leading-tight">
          AR Architecture Design Studio
        </h1>
        <p className="text-lg text-foreground/80 mb-8">
          Design is beyond just being you, it reflects your personality, taste and style. At AR Architecture Design Studio we make sure to create a space for you that is truly yours.
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

interface FeaturedServiceItem {
  slug: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

const featuredServices: FeaturedServiceItem[] = [
  {
    slug: 'residential',
    title: 'Luxury Residential Design',
    imageUrl: '/images/home/carousel-residential-living.jpg',
    imageAlt: 'Luxurious residential living room design',
    href: '/services/residential',
  },
  {
    slug: 'commercial',
    title: 'High-End Commercial Spaces',
    imageUrl: '/images/home/carousel-commercial-lobby.jpg',
    imageAlt: 'Modern commercial office lobby design',
    href: '/services/commercial',
  },
  {
    slug: 'styling',
    title: 'Bespoke Furniture & Styling',
    imageUrl: '/images/home/carousel-styling-detail.jpg',
    imageAlt: 'Interior styling detail with bespoke furniture',
    href: '/services/styling',
  },
  {
    slug: 'project-management',
    title: 'Full-Service Project Management',
    imageUrl: '/images/home/carousel-project-planning.jpg',
    imageAlt: 'Architectural blueprints for project management',
    href: '/services/project-management',
  },
];

const FeaturedServicesCarousel = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-4">
          Featured Design Services
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore our range of specialized design services, tailored to bring your unique vision to life with precision and artistry.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {featuredServices.map((service) => (
            <CarouselItem key={service.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full group">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-0 relative aspect-[4/3] rounded-t-lg overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-headline text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <div className="mt-auto">
                      <Button asChild variant="link" className="p-0 text-accent hover:text-highlight font-semibold">
                        <Link href={service.href}>
                          View Service <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  </section>
);


const AboutStudioSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src="/images/home/about-studio-showcase.jpg"
              alt="AR Architecture Design Studio - Modern architectural design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary mb-6 leading-tight">
            Transforming Spaces with Visionary Design.
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
            Welcome to AR Architecture Design Studio. We believe that great design has the power to transform. With a rich history of innovation and a forward-thinking approach, we turn ambitious visions into inspiring realities.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-highlight hover:text-highlight-foreground rounded-md">
            <Link href="/about">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const YourHomeReflectionSection = () => {
  const services = [
    { name: 'Commercial Service', image: '/images/home/service-commercial-office.jpg' },
    { name: 'Retail Shop Design', image: '/images/home/service-retail-boutique.jpg' },
    { name: 'Home Office', image: '/images/home/service-home-office.jpg' },
    { name: 'Salon Design', image: '/images/home/service-salon-luxury.jpg' },
  ];
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold">Your home, your reflection</h2>
          <p className="text-base text-foreground/80">
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
        <Image src="/images/home/fullwidth-panoramic-living.jpg" alt="Spacious modern living room" layout="fill" objectFit="cover" />
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
        <Button variant="link" asChild className="text-accent hover:text-highlight p-0">
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


export default function Home() {
  return (
    <>
      <NewHeroSection />
      <FeaturedServicesCarousel />
      <AboutStudioSection />
      <YourHomeReflectionSection />
      <FullWidthImageSection />
      
      <ProjectShowcaseItem
        count="01"
        category="Apartment & Interior"
        title="Apartment & Interior Design and fitout"
        image1="/images/home/project-apartment-interior-1.jpg"
        image2="/images/home/project-apartment-kitchen-2.jpg"
      />
      <ProjectShowcaseItem
        count="02"
        category="Villa Interior"
        title="Villa Interior Design & Fitout"
        image1="/images/home/project-villa-luxury-1.jpg"
        image2="/images/home/project-villa-swimming-2.jpg"
      />
    </>
  );
}
