import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import AboutSection from "@/components/Home/AboutSection";
import ClaimForm from "@/components/Home/ClaimForm";
import FAQ from "@/components/Home/FAQ";
import ContactSection from "@/components/Home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <ClaimForm />
      <FAQ />
      <ContactSection />
    </Layout>
  );
};

export default Index;
