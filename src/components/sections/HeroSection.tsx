
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 pt-20 pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered <span className="text-primary-600">Hiring Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl lg:mx-0 mx-auto">
              Transform your recruitment process with our intelligent matching platform that connects the right candidates with the right opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/get-started">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  Request Demo
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              Trusted by 5,000+ companies worldwide
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png"
              alt="EaseHire Platform"
              className="w-full h-auto rounded-lg shadow-xl animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
