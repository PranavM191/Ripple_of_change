import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DriveSection from "@/components/DriveSection";
import NGOSection from "@/components/NGOSection";
import MapSection from "@/components/MapSection";
import ContributorsSection from "@/components/ContributorsSection";
import DonationSection from "@/components/DonationSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DriveSection />
      <NGOSection />
      <MapSection />
      <ContributorsSection />
      <DonationSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
};

export default Index;
