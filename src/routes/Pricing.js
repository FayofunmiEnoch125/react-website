import React from "react";
import Footer from "../components/Footer";
import PricingCards from "../components/Pricing";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose Your Trip." />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
