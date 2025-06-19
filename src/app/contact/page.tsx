import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 md:py-24 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Connect With Us
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            We're here to answer your questions and help you embark on your design journey. Reach out to Elysian Interiors today.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <Card className="shadow-xl rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below, and our team will get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-medium">Full Name</Label>
                      <Input type="text" id="name" placeholder="Your Name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-medium">Email Address</Label>
                      <Input type="email" id="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-medium">Phone Number (Optional)</Label>
                    <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="font-medium">Subject</Label>
                    <Input type="text" id="subject" placeholder="Inquiry about residential design" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-medium">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} className="mt-1" />
                  </div>
                  <div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-xl rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Our Studio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">123 Design Avenue, Suite 400</p>
                      <p className="text-foreground/80">Metropolis, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <Link href="mailto:contact@elysianinteriors.com" className="text-foreground/80 hover:text-primary transition-colors">
                      contact@elysianinteriors.com
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <Link href="tel:+12125550123" className="text-foreground/80 hover:text-primary transition-colors">
                      +1 (212) 555-0123
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl rounded-lg">
                 <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Google Maps Placeholder</p>
                    {/* In a real app, you'd embed Google Maps here */}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Follow Our Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: Facebook, href: '#' },
                      { name: 'Instagram', icon: Instagram, href: '#' },
                      { name: 'Twitter', icon: Twitter, href: '#' },
                      { name: 'LinkedIn', icon: Linkedin, href: '#' },
                    ].map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-full hover:bg-accent/20"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
