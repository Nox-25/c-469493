
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for job seekers",
    features: [
      "AI job matching",
      "Basic resume builder",
      "Application tracking",
      "Career resources",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "For serious job seekers",
    features: [
      "Everything in Basic",
      "Advanced resume builder",
      "Cover letter templates",
      "Interview preparation tools",
      "Priority job matching",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "per month",
    description: "For employers and teams",
    features: [
      "Everything in Professional",
      "Unlimited job postings",
      "Applicant tracking system",
      "Team collaboration tools",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="section-subtitle">
          Choose the perfect plan for your needs, with flexible options for both job seekers and employers
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular ? "border-primary-400 shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.buttonVariant as "outline" | "default"} 
                  className={`w-full ${plan.popular ? "bg-primary-400 hover:bg-primary-500" : ""}`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
