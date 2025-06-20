
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  imageUrl?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Isabella Worthington',
    title: 'Owner, Park Avenue Penthouse',
    quote: "AR Architecture Design Studio transformed my apartment into a sanctuary of elegance and comfort. Their attention to detail and understanding of my vision was unparalleled. Every day feels like living in a masterpiece.",
    imageUrl: '/images/testimonials/isabella-worthington.png',
  },
  {
    id: 2,
    name: 'Julian Sinclair',
    title: 'CEO, Sinclair Holdings',
    quote: "The team at AR Architecture Design Studio delivered a corporate headquarters that perfectly balances sophistication with functionality. Our clients and employees are consistently impressed. A truly professional and visionary firm.",
    imageUrl: '/images/testimonials/julian-sinclair.png',
  },
  {
    id: 3,
    name: 'Olivia & Thomas Ashworth',
    title: 'Owners, Coastal Estate',
    quote: "Working with AR Architecture Design Studio was an absolute pleasure. They captured the essence of coastal luxury while making our home feel incredibly personal and inviting. Their creativity knows no bounds.",
    // No image for this one to show variability
  },
   {
    id: 4,
    name: 'Chen Rui',
    title: 'Art Collector',
    quote: "AR Architecture Design Studio's ability to integrate my art collection seamlessly into the design was breathtaking. They created spaces that are both a home and a gallery, enhancing each piece's beauty. Exceptional talent.",
    imageUrl: '/images/testimonials/chen-rui.png',
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 md:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Words of Acclaim
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Hear from our esteemed clients about their experience with AR Architecture Design Studio.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-xl rounded-lg overflow-hidden flex flex-col">
                <CardContent className="p-6 md:p-8 flex-grow">
                  <Quote className="h-10 w-10 text-accent mb-6" />
                  <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-6 font-body">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <CardFooter className="bg-muted/50 p-6 md:p-8">
                  <div className="flex items-center space-x-4">
                    {testimonial.imageUrl && (
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-headline text-xl font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-foreground/70">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Share Your Vision With Us
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We are eager to learn about your design aspirations and how we can assist you in creating your ideal space.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
