"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/1447253/pexels-photo-1447253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up image of a red and white lighter with 'Love' text next to a smartphone on a dark surface." },
  { "id": "teamImage1", "url": "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young professional leading a diverse team in a contemporary office setting." },
  { "id": "teamImage2", "url": "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="IT Solutions"
          buttonText="Contact"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovative IT Solutions"
            description="Transform your business with our cutting-edge technology services."
            imageSrc={assetMap.find(asset => asset.id === 'heroImage')?.url}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovation", description: "Leading the way in innovative tech solutions." },
              { title: "Reliability", description: "24/7 support and services you can trust." }
            ]}
            imageSrc={assetMap.find(asset => asset.id === 'heroImage')?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Cloud Computing", description: "Scale your business efficiently.", icon: "Cloud" },
              { title: "AI Integration", description: "Boost productivity with AI solutions.", icon: "Cpu" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "John Doe", role: "CEO", imageSrc: assetMap.find(asset => asset.id === 'teamImage1')?.url },
              { id: "2", name: "Jane Smith", role: "CTO", imageSrc: assetMap.find(asset => asset.id === 'teamImage2')?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Reach Out for a Consultation"
            description="Get in touch with our team for specialized solutions."
            imageSrc={assetMap.find(asset => asset.id === 'teamImage1')?.url}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            logoText="IT Solutions"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}