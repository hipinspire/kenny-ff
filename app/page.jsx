import Hero from "@components/hero/Hero";
import MediaPartners from "@components/mediaPartners/MediaPartners";
import AboutUsSection from "@components/aboutUsSection/AboutUsSection";
import TokenomicsSection from "@components/tokenomicsSection/TokenomicsSection";
import UpcomingSection from "@components/upcomingSection/UpcomingSection";
import PresaleSection from "@components/presaleSection/PresaleSection";
import RoadMapSection from "@components/roadMapSection/RoadMapSection";
import HowToBuySection from "@components/howToBuySection/HowToBuySection";

export default function Home() {

  return (
    <>
      <Hero />
      <MediaPartners />
      <AboutUsSection />
      <TokenomicsSection />
      <UpcomingSection />
      <PresaleSection />
      <RoadMapSection />
      <HowToBuySection />
    </>
  );
}
