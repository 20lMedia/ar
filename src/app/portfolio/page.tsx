import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const projects = [
  { id: 1, title: 'The Sky Residence', category: 'Residential', imageUrl: 'https://placehold.co/600x800.png', hint: 'luxury apartment interior' },
  { id: 2, title: 'Artisan Cafe & Lounge', category: 'Commercial', imageUrl: 'https://placehold.co/600x600.png', hint: 'modern cafe design' },
  { id: 3, title: 'Serenity Spa Retreat', category: 'Commercial', imageUrl: 'https://placehold.co/600x700.png', hint: 'spa interior design' },
  { id: 4, title: 'Lakeside Manor', category: 'Residential', imageUrl: 'https://placehold.co/600x850.png', hint: 'classic luxury home' },
  { id: 5, title: 'Boutique Hotel Lobby', category: 'Commercial', imageUrl: 'https://placehold.co/600x650.png', hint: 'hotel lobby design' },
  { id: 6, title: 'Urban Loft Conversion', category: 'Residential', imageUrl: 'https://placehold.co/600x750.png', hint: 'industrial loft interior' },
  { id: 7, title: 'Executive Office Suite', category: 'Commercial', imageUrl: 'https://placehold.co/600x550.png', hint: 'modern office design' },
  { id: 8, title: 'Vineyard Estate', category: 'Residential', imageUrl: 'https://placehold.co/600x900.png', hint: 'rustic luxury house' },
  { id: 9, title: 'Gallery Space', category: 'Commercial', imageUrl: 'https://placehold.co/600x500.png', hint: 'art gallery minimalist' },
];

const PortfolioPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 md:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Our Curated Portfolio
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            A glimpse into the diverse and luxurious spaces we've meticulously crafted for our discerning clientele.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group relative overflow-hidden shadow-xl rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={parseInt(project.imageUrl.split('x')[1].split('.')[0], 10)} // extract height for aspect ratio
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-headline font-semibold text-white mb-1 shadow-text">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3 shadow-text">{project.category}</p>
                  {/* Optional: Lightbox modal on image click. For now, a link or button. */}
                  <Button variant="outline" size="sm" className="bg-white/20 border-white/50 text-white hover:bg-white/30 backdrop-blur-sm w-fit">
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </div>
                {/* Fallback visible content if hover layer is not enough */}
                <CardFooter className="absolute bottom-0 left-0 right-0 bg-black/30 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:hidden">
                   <h3 className="text-lg font-headline font-semibold text-white">{project.title}</h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your unique vision to life.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 text-lg rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
