import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 md:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Our Story: Designing Dreams into Reality
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the passion, philosophy, and people behind Elysian Interiors.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6">The Elysian Vision</h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Founded on the belief that interior design is a transformative art form, Elysian Interiors has dedicated itself to crafting spaces that are not only aesthetically captivating but also deeply resonant with the lives and aspirations of our clients. We weave narratives through design, creating environments that tell your unique story.
              </p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Our approach is collaborative and client-focused. We listen intently, understand profoundly, and then translate your vision into sophisticated, timeless interiors. From grand architectural gestures to the finest bespoke details, every element is thoughtfully considered and impeccably executed.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We champion sustainable practices and timeless quality, ensuring that your space is not only beautiful today but cherished for generations to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="Inspiring interior design moodboard"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                data-ai-hint="design studio interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6">Meet the Founder</h2>
              <p className="text-xl font-medium text-foreground/90 mb-4">Eleonora Vance, Principal Designer</p>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                With over fifteen years of experience in luxury residential and commercial design, Eleonora brings a wealth of creativity, expertise, and an innate understanding of sophisticated living to every project. Her work is characterized by a refined aesthetic, a keen eye for detail, and a commitment to creating spaces that are both inspiring and deeply personal.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Eleonora's designs have graced the pages of prestigious publications and have earned accolades for their innovative approach and timeless appeal. She believes that a well-designed space has the power to enhance well-being and elevate everyday life.
              </p>
            </div>
            <div className="md:order-1 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="Founder of Elysian Interiors"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                data-ai-hint="designer portrait professional"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center text-primary mb-12">
            Our Accolades & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Distinguished Clientele</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>Fortune 500 Executives</li>
                  <li>Acclaimed Artists & Performers</li>
                  <li>Luxury Hoteliers</li>
                  <li>Private Collectors</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Awards & Honors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>International Design Excellence Award</li>
                  <li>Luxury Lifestyle Awards - Best Interior Design Studio</li>
                  <li>Architectural Digest Top 100 Designers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Press Mentions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>Vogue Living</li>
                  <li>Elle Decor</li>
                  <li>The Wall Street Journal - Mansions</li>
                  <li>Robb Report</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Begin Your Design Journey With Us
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We invite you to explore the possibilities. Let's create something extraordinary together.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Contact Our Studio <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
