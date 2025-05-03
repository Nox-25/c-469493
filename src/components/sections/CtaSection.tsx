
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100">
          Join thousands of companies and job seekers who are already using EaseHire to find their perfect match.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/get-started">
            <Button size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100 px-8">
              Get Started
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-500 px-8">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
