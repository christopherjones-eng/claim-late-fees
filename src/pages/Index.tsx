import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ClaimForm from "@/components/Home/ClaimForm";
import HowItWorks from "@/components/Home/HowItWorks";
import ProvenTrackRecord from "@/components/Home/ProvenTrackRecord";
import CustomerTestimonials from "@/components/Home/CustomerTestimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClaimForm />
      <HowItWorks />
      <ProvenTrackRecord />
      <CustomerTestimonials />
    </Layout>
  );
};

export default Index;
