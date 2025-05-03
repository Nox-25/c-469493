
import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PricingSection from "../components/sections/PricingSection";
import CtaSection from "../components/sections/CtaSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
