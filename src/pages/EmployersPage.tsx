
import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI-Powered Sourcing",
    description: "Our intelligent algorithm identifies qualified candidates who match your job requirements and company culture.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Applicant Tracking System",
    description: "Streamline your hiring process with our intuitive ATS that keeps all candidates organized and evaluated consistently.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Interview Management",
    description: "Schedule interviews, send automated reminders, and collect feedback from interviewers all in one centralized platform.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Analytics & Reports",
    description: "Gain valuable insights into your recruitment process with comprehensive analytics and customizable reports.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const benefits = [
  "Reduce time-to-hire by up to 50% with AI-powered candidate matching",
  "Save up to 30% on recruitment costs by streamlining your hiring process",
  "Improve quality of hire with consistent evaluation criteria",
  "Enhance candidate experience with a smooth and transparent process",
  "Eliminate bias with structured interviews and objective assessments",
  "Access real-time analytics to continuously optimize your recruitment strategy",
];

const EmployersPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 pt-20 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Streamline Your <span className="text-primary-600">Hiring Process</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl lg:mx-0 mx-auto">
                Our AI-powered platform helps you find qualified candidates faster, reduce time-to-hire, and make data-driven hiring decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/employers/demo">
                  <Button size="lg" className="px-8">
                    Request Demo
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="px-8">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png"
                alt="EaseHire Recruiting Platform"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Powerful Tools for Employers</h2>
          <div className="section-subtitle">
            Our comprehensive recruitment platform streamlines your entire hiring process from sourcing to onboarding
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png"
                alt="EaseHire Benefits for Employers"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose EaseHire</h2>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands of companies that have transformed their hiring process with our AI-powered platform.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/employers/demo">
                  <Button size="lg" className="px-8">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Customer Success Stories</h2>
          <div className="section-subtitle">
            See how companies like yours have transformed their hiring process with EaseHire
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="font-bold text-2xl text-primary-600 mb-2">40%</div>
                  <div className="text-lg font-semibold mb-4">Reduction in Time-to-Hire</div>
                  <p className="text-base mb-6 flex-grow">
                    "EaseHire has completely transformed our recruiting process. We've reduced our time-to-hire by 40% and found candidates who are a perfect fit for our company culture."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-gray-600 text-sm">HR Director, TechCorp</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="font-bold text-2xl text-primary-600 mb-2">60%</div>
                  <div className="text-lg font-semibold mb-4">Increase in Quality of Hire</div>
                  <p className="text-base mb-6 flex-grow">
                    "The structured interview tools and consistent evaluation criteria have helped us make better hiring decisions. Our new hires are performing better and staying longer."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">Robert Kim</div>
                      <div className="text-gray-600 text-sm">COO, GrowthStartup</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="font-bold text-2xl text-primary-600 mb-2">30%</div>
                  <div className="text-lg font-semibold mb-4">Cost Savings</div>
                  <p className="text-base mb-6 flex-grow">
                    "By streamlining our recruitment process and reducing our reliance on external agencies, we've been able to cut our hiring costs by 30% while improving our results."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">Jennifer Lee</div>
                      <div className="text-gray-600 text-sm">Talent Acquisition Manager, RetailPlus</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Join thousands of companies that are hiring smarter and faster with EaseHire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/employers/demo">
              <Button size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100 px-8">
                Schedule Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-500 px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployersPage;
