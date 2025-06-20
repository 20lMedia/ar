
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
      data-ai-hint="modern interior"
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
  aiHint: string;
}

const featuredServices: FeaturedServiceItem[] = [
  {
    slug: 'residential',
    title: 'Luxury Residential Design',
    imageUrl: '/images/home/carousel-residential-living.jpg',
    imageAlt: 'Luxurious residential living room design',
    href: '/services/residential',
    aiHint: 'luxury living room'
  },
  {
    slug: 'commercial',
    title: 'High-End Commercial Spaces',
    imageUrl: '/images/home/carousel-commercial-lobby.jpg',
    imageAlt: 'Modern commercial office lobby design',
    href: '/services/commercial',
    aiHint: 'commercial lobby'
  },
  {
    slug: 'styling',
    title: 'Bespoke Furniture & Styling',
    imageUrl: '/images/home/carousel-styling-detail.jpg',
    imageAlt: 'Interior styling detail with bespoke furniture',
    href: '/services/styling',
    aiHint: 'furniture detail'
  },
  {
    slug: 'project-management',
    title: 'Full-Service Project Management',
    imageUrl: '/images/home/carousel-project-planning.jpg',
    imageAlt: 'Architectural blueprints for project management',
    href: '/services/project-management',
    aiHint: 'architectural blueprints'
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
                      data-ai-hint={service.aiHint}
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
              src="https://source.unsplash.com/random/800x600/?architecture+studio+interior"
              alt="AR Architecture Design Studio - Modern architectural design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="architecture interior"
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

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional interior design services for residential and commercial projects. Our team of experts ensures that every space we design is a perfect blend of aesthetics and functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

const FullWidthImageSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="relative aspect-[16/7] rounded-lg overflow-hidden">
        <Image 
          src="/images/home/fullwidth-panoramic-living.jpg" 
          alt="Spacious modern living room" 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint="panoramic living room"
        />
      </div>
    </div>
  </section>
);

interface HomePageProject {
  id: string;
  name: string;
  imageUrl: string;
  imageHint: string;
  href: string;
}

const homePageProjects: HomePageProject[] = [
  {
    id: '01',
    name: 'Modern Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1662454419736-de132ff75638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MHx8fHwxNzUwNDE0ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'modern apartment',
    href: '/portfolio/project-1',
  },
  {
    id: '02',
    name: 'Scandinavian Villa',
    imageUrl: 'https://images.unsplash.com/photo-1632803180617-f0dccfb3ba81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjB2aWxsYSUyMGludGVyaW9yfGVufDB8fHx8MTc1MDQxNDg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'scandinavian villa interior',
    href: '/portfolio/project-2',
  },
  {
    id: '03',
    name: 'Urban Loft Conversion',
    imageUrl: 'https://images.unsplash.com/photo-1656956171950-599bb9ab2f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dXJiYW4lMjBsb2Z0JTIwbGl2aW5nfGVufDB8fHx8MTc1MDQxNDg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'urban loft living',
    href: '/portfolio/project-3',
  },
  {
    id: '04',
    name: 'Minimalist Office',
    imageUrl: 'https://images.unsplash.com/photo-1737305457496-dc7503cdde1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwZGVzaWdufGVufDB8fHx8MTc1MDQxNDg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'minimalist office design',
    href: '/portfolio/project-4',
  },
];

const DesignProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground mb-2">
            Selected Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into our diverse portfolio of inspiring spaces, where design meets functionality.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {homePageProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                <Link href={project.href} className="block h-full">
                  <Card className="relative aspect-[3/4] overflow-hidden h-full border-0 shadow-none rounded-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent " />
                    <CardContent className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-base font-semibold">{project.id}. {project.name}</p>
                        </div>
                        <div className="bg-white/20 hover:bg-white/30 transition-colors rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

interface HomePageTestimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarHint: string;
}

const homePageTestimonials: HomePageTestimonial[] = [
  {
    id: 1,
    quote: "The design team exceeded my expectations. Elegant, sturdy, and incredibly comfortable!",
    name: "Michael L.",
    role: "Verified Buyer",
    avatarUrl: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUwNDE0NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarHint: "professional portrait"
  },
  {
    id: 2,
    quote: "Love the craftsmanship. I get compliments every time someone visits my home.",
    name: "Rachel M.",
    role: "Homeowner",
    avatarUrl: "https://images.unsplash.com/photo-1661758408961-c5fd2eaf3b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bGlmZXN0eWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUwNDE0NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarHint: "lifestyle portrait"
  },
  {
    id: 3,
    quote: "Fast delivery and the quality is top-notch. Definitely recommending AR Studio again.",
    name: "Tom S.",
    role: "Interior Designer",
    avatarUrl: "https://images.unsplash.com/photo-1614139767414-f9011dff53bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjcmVhdGl2ZSUyMGhlYWRzaG90fGVufDB8fHx8MTc1MDQxNDc5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    avatarHint: "creative headshot"
  },
];

const ClientTestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center text-primary mb-12">
        Client Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {homePageTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-lg text-secondary-foreground/90 mb-6 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center space-x-3">
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={48} 
                height={48}
                className="rounded-full"
                data-ai-hint={testimonial.avatarHint}
              />
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-secondary-foreground/70">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <>
      <NewHeroSection />
      <FeaturedServicesCarousel />
      <AboutStudioSection />
      <WhyChooseUsSection />
      <FullWidthImageSection />
      <DesignProjectsSection />
      <ClientTestimonialsSection />
    </>
  );
}
