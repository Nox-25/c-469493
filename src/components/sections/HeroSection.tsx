
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../contexts/AuthContext";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/job-vacancies");
    } else {
      navigate("/signin");
    }
  };

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
              <Button size="lg" className="px-8 py-6 text-lg" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              Trusted by 5,000+ companies worldwide
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/daaf4041-7ba0-4623-a56d-9e7347f7572e.png"
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
