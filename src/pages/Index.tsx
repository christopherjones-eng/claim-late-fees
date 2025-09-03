import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ClaimForm from "@/components/Home/ClaimForm";
import ProvenResults from "@/components/Home/ProvenResults";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClaimForm />
      <ProvenResults />
    </Layout>
  );
};

export default Index;
