import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder data - in a real app, this would come from a CMS or database
const serviceDetailsMap: { [key: string]: any } = {
  residential: {
    slug: 'residential',
    title: 'Luxury Residential Design',
    longDescription: [
      "Our luxury residential design service is tailored to create homes that are a true reflection of your personality and lifestyle. We delve deep into your preferences, aspirations, and daily routines to craft spaces that are not only aesthetically stunning but also supremely functional and comfortable.",
      "From opulent penthouses to serene family estates, our team manages every detail, including space planning, material selection, custom furniture design, lighting, and art Curation. We collaborate with the finest artisans and suppliers to ensure unparalleled quality and craftsmanship.",
      "The result is a harmonious environment that exudes timeless elegance and provides a sanctuary for you and your loved ones."
    ],
    imageUrl: 'https://placehold.co/1200x600.png',
    imageHint: 'luxury home interior detail',
    keyAspects: ['Personalized Design Concepts', 'Space Optimization', 'Bespoke Furniture & Millwork', 'Turnkey Project Management', 'Smart Home Integration'],
  },
  commercial: {
    slug: 'commercial',
    title: 'High-End Commercial Spaces',
    longDescription: [
      "Elysian Interiors specializes in designing high-end commercial spaces that elevate brands and enhance customer experiences. We work with boutiques, luxury retail, corporate offices, hotels, and fine dining establishments to create environments that are both impactful and aligned with business objectives.",
      "Our design process considers brand identity, operational flow, customer journey, and employee well-being. We create sophisticated and inviting spaces that leave a lasting impression, fostering engagement and loyalty.",
      "Services include concept development, spatial planning, fixture design, lighting schemes, and full project coordination to ensure timely and on-budget delivery."
    ],
    imageUrl: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office lobby',
    keyAspects: ['Brand-Centric Design', 'Customer Experience Focus', 'Functional Space Planning', 'Durable & High-Quality Materials', 'Compliance & Accessibility'],
  },
   styling: {
    slug: 'styling',
    title: 'Bespoke Furniture & Styling',
    longDescription: [
      "Our bespoke furniture and styling service is the art of perfecting your space. We believe that the right furniture, accessories, and art can transform a room, adding layers of personality, texture, and warmth.",
      "We offer custom furniture design, sourcing unique pieces from global artisans, and curating accessories that complement your interior. Our styling expertise ensures that every element is thoughtfully placed to create a cohesive and captivating environment.",
      "Whether it's a final touch to a full-scale renovation or a refresh of an existing space, our styling service brings your vision to life with elegance and precision."
    ],
    imageUrl: 'https://placehold.co/1200x600.png',
    imageHint: 'styled living room close up',
    keyAspects: ['Custom Furniture Design', 'Accessory Curation', 'Art Placement', 'Color Palette Refinement', 'Textile Selection'],
  },
  // Add other services here...
  'project-management': {
    slug: 'project-management', title: 'Full-Service Project Management', 
    longDescription: ["Placeholder description for Full-Service Project Management."], 
    imageUrl: 'https://placehold.co/1200x600.png', imageHint: 'design blueprints charts',
    keyAspects: ['Budgeting', 'Scheduling', 'Vendor Coordination'],
  },
  'art-curation': {
    slug: 'art-curation', title: 'Art Curation & Acquisition', 
    longDescription: ["Placeholder description for Art Curation & Acquisition."], 
    imageUrl: 'https://placehold.co/1200x600.png', imageHint: 'art gallery display',
    keyAspects: ['Sourcing', 'Placement', 'Collection Management'],
  },
  'event-design': {
    slug: 'event-design', title: 'Exclusive Event & Show Home Design', 
    longDescription: ["Placeholder description for Exclusive Event & Show Home Design."], 
    imageUrl: 'https://placehold.co/1200x600.png', imageHint: 'luxury event setup',
    keyAspects: ['Concept Development', 'Styling', 'Logistics'],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceDetailsMap).map((slug) => ({
    serviceSlug: slug,
  }));
}

const ServiceDetailPage = ({ params }: { params: { serviceSlug: string } }) => {
  const service = serviceDetailsMap[params.serviceSlug];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-headline text-destructive">Service Not Found</h1>
        <p className="text-foreground/80 my-4">The service you are looking for does not exist.</p>
        <Button asChild variant="outline">
          <Link href="/services"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="relative py-20 md:py-32 bg-slate-700 text-white">
         <Image
          src={service.imageUrl}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-50"
          data-ai-hint={service.imageHint}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 shadow-text">{service.title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2 text-sm">
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium" aria-current="page">{service.title}</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl rounded-lg">
            <CardContent className="p-6 md:p-10 space-y-6">
              {service.longDescription.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-foreground/80 leading-relaxed">{paragraph}</p>
              ))}

              {service.keyAspects && (
                <>
                  <h2 className="text-2xl font-headline font-semibold text-primary pt-6">Key Aspects</h2>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
                    {service.keyAspects.map((aspect: string, index: number) => (
                      <li key={index}>{aspect}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can bring unparalleled sophistication to your project.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Request a Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
