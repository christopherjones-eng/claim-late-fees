import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ClaimForm from "@/components/Home/ClaimForm";
import EmpoweringSMEs from "@/components/Home/EmpoweringSMEs";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClaimForm />
      <EmpoweringSMEs />
    </Layout>
  );
};

export default Index;
