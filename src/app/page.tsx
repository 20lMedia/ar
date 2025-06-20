
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, PenTool, Lightbulb, Award, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const NewHeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gray-200">
    <Image
      src="/images/home/hero-modern-living.jpg"
      alt="Modern interior design"
      layout="fill"
      objectFit="cover"
      className="absolute z-0 opacity-50 shadow-2xl"
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
    imageUrl: 'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc1MDQxNTY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Luxurious residential living room design',
    href: '/services/residential',
    aiHint: 'luxury living room'
  },
  {
    slug: 'commercial',
    title: 'High-End Commercial Spaces',
    imageUrl: 'https://images.unsplash.com/photo-1544367945-4125eb396314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21tZXJjaWFsJTIwbG9iYnl8ZW58MHx8fHwxNzUwNDE1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Modern commercial office lobby design',
    href: '/services/commercial',
    aiHint: 'commercial lobby'
  },
  {
    slug: 'styling',
    title: 'Bespoke Furniture & Styling',
    imageUrl: 'https://images.unsplash.com/photo-1704717703801-c9c4965e31d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmdXJuaXR1cmUlMjBkZXRhaWx8ZW58MHx8fHwxNzUwNDE1NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Interior styling detail with bespoke furniture',
    href: '/services/styling',
    aiHint: 'furniture detail'
  },
  {
    slug: 'project-management',
    title: 'Full-Service Project Management',
    imageUrl: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50c3xlbnwwfHx8fDE3NTA0MTU2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="px-4 sm:px-6 md:pl-8 lg:pl-16 xl:pl-24 md:pr-0 py-8 md:py-0">
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
      <div className="px-4 sm:px-6 md:pr-8 lg:pr-16 xl:pr-24 md:pl-0 py-8 md:py-0 rounded-lg overflow-hidden shadow-xl">
        <div className="aspect-w-4 aspect-h-3">
          <Image
            src="https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHxlbnwwfHx8fDE3NTA0MTAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="AR Architecture Design Studio - Modern architectural design"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            data-ai-hint="architecture interior"
          />
        </div>
      </div>
    </div>
  </section>
);

const whyChooseUsFeatures = [
  {
    icon: PenTool,
    title: 'Tailored Design Solutions',
    description: 'We craft spaces that uniquely reflect your personality and lifestyle.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative & Functional',
    description: 'Balancing cutting-edge aesthetics with practical living.',
  },
  {
    icon: Award,
    title: 'Quality & Precision',
    description: 'Meticulous attention to detail and high-quality finishes.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'Your vision is our guide through a transparent process.',
  },
];

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

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
          {whyChooseUsFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-accent/10 text-accent p-3 rounded-full">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-primary mb-1">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-highlight hover:text-highlight-foreground rounded-md">
            <Link href="/contact">
              Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
            <Link href="/portfolio">
              Explore Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface HomePageTestimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const homePageTestimonials: HomePageTestimonial[] = [
  {
    id: 1,
    quote: "The design team exceeded my expectations. Elegant, sturdy, and incredibly comfortable!",
    name: "Michael L.",
    role: "Verified Buyer",
  },
  {
    id: 2,
    quote: "Love the craftsmanship. I get compliments every time someone visits my home.",
    name: "Rachel M.",
    role: "Homeowner",
  },
  {
    id: 3,
    quote: "Fast delivery and the quality is top-notch. Definitely recommending AR Studio again.",
    name: "Tom S.",
    role: "Interior Designer",
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
      <DesignProjectsSection />
      <ClientTestimonialsSection />
    </>
  );
}
