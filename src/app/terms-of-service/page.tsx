import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfServicePage = () => {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center bg-secondary py-12">
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10 space-y-6 text-foreground/80 leading-relaxed">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">1. Agreement to Terms</h2>
            <p>By accessing or using our website [Your Website URL] (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Site.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">2. Intellectual Property</h2>
            <p>The Site and its original content, features, and functionality are owned by Elysian Interiors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes all text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Elysian Interiors's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Elysian Interiors's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Elysian Interiors at any time.</p>
            
            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">4. Disclaimer</h2>
            <p>The materials on Elysian Interiors's website are provided on an 'as is' basis. Elysian Interiors makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, Elysian Interiors does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">5. Limitations</h2>
            <p>In no event shall Elysian Interiors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Elysian Interiors's website, even if Elysian Interiors or a Elysian Interiors authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">7. Changes to Terms</h2>
            <p>Elysian Interiors reserves the right, at its sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Elysian Interiors<br/>
            123 Design Avenue, Suite 400<br/>
            Metropolis, ST 12345<br/>
            Email: legal@elysianinteriors.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
