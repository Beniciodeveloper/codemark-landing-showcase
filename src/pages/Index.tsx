import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImportanceSection from '@/components/ImportanceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <ImportanceSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
