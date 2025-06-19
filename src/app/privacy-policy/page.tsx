
"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const PrivacyPolicyPage = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center bg-secondary py-12">
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-10 space-y-6 text-foreground/80 leading-relaxed">
            <p><strong>Last Updated:</strong> {lastUpdated || 'Loading...'}</p>
            
            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">1. Introduction</h2>
            <p>Welcome to AR Architecture Design Studio. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">2. Collection of Your Information</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out a contact form or otherwise interact with the Site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Respond to your inquiries and offer support.</li>
              <li>Improve our website and services.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">4. Disclosure of Your Information</h2>
            <p>We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2 className="text-2xl font-headline font-semibold text-primary pt-4">6. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>AR Architecture Design Studio<br/>
            1st Floor, AMBAL HARWARES, 58, Santhai Rd<br/>
            Golden Nagar, Mettupatti, Dindigul, Tamil Nadu 624002, India<br/>
            Email: privacy@ararchitecturedesignstudio.com<br/>
            Phone: +91 96261 11223</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
