import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import CoreBanking from "@/components/sections/CoreBanking";
import EfficientBanking from "@/components/sections/EfficientBanking";
import CtaBanner from "@/components/sections/CtaBanner";
import DigitalBanking from "@/components/sections/DigitalBanking";
import Insights from "@/components/sections/Insights";
import CaseStudies from "@/components/sections/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <CoreBanking />
      <EfficientBanking />
      <CtaBanner />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <CtaBanner bare />
    </>
  );
}
