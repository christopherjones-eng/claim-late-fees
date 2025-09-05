import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ClaimForm from "@/components/Home/ClaimForm";
import HowItWorks from "@/components/Home/HowItWorks";
import ProvenTrackRecord from "@/components/Home/ProvenTrackRecord";
import CustomerTestimonials from "@/components/Home/CustomerTestimonials";
import FAQ from "@/components/Home/FAQ";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClaimForm />
      <HowItWorks />
      <ProvenTrackRecord />
      <CustomerTestimonials />
      <FAQ />
    </Layout>
  );
};

export default Index;
