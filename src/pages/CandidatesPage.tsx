
import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI Job Matching",
    description: "Our intelligent algorithm analyzes your skills, experience, and preferences to match you with the most relevant job opportunities.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Smart Resume Builder",
    description: "Create professional, ATS-friendly resumes that highlight your skills and experience to stand out from the competition.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Application Tracking",
    description: "Keep track of all your job applications in one place and receive real-time updates on your application status.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Interview Preparation",
    description: "Get personalized interview tips, practice questions, and feedback to help you ace your interviews.",
    icon: (
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const benefits = [
  "Get matched with jobs that align with your skills and career goals",
  "Create professional resumes that pass through ATS systems",
  "Track all your applications in one centralized dashboard",
  "Receive personalized career advice and interview preparation tips",
  "Connect with employers directly through our platform",
  "Access exclusive job opportunities from top companies",
];

const CandidatesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 pt-20 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Dream Job with <span className="text-primary-600">EaseHire</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl lg:mx-0 mx-auto">
                Our AI-powered platform matches you with the perfect job opportunities based on your skills, experience, and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/candidates/sign-up">
                  <Button size="lg" className="px-8">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/candidates/browse-jobs">
                  <Button size="lg" variant="outline" className="px-8">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png"
                alt="Job Seeker using EaseHire"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">How EaseHire Helps Job Seekers</h2>
          <div className="section-subtitle">
            Our comprehensive tools and services are designed to make your job search effective and efficient
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
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Benefits of Using EaseHire</h2>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands of successful job seekers who have found their dream jobs using our platform.
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
                <Link to="/candidates/sign-up">
                  <Button size="lg" className="px-8">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/lovable-uploads/06232a0d-be4b-4e28-ab40-ca2e3e309e4c.png"
                alt="EaseHire Benefits"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Success Stories</h2>
          <div className="section-subtitle">
            Hear from job seekers who found their dream jobs using EaseHire
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="text-lg mb-6 flex-grow">
                    "After months of job searching with no success, I found EaseHire. Within three weeks, I received multiple interview requests and landed a job that perfectly matched my skills and career goals."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-gray-600 text-sm">Software Engineer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="text-lg mb-6 flex-grow">
                    "The resume builder was a game-changer for me. I finally understood what employers were looking for, and the AI job matching introduced me to opportunities I wouldn't have found otherwise."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">Jessica Rodriguez</div>
                      <div className="text-gray-600 text-sm">Marketing Specialist</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="text-lg mb-6 flex-grow">
                    "As a recent graduate with limited experience, I was struggling to get noticed by employers. EaseHire's interview preparation tools gave me the confidence I needed to showcase my skills effectively."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">David Park</div>
                      <div className="text-gray-600 text-sm">Business Analyst</div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Job?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Join thousands of successful job seekers who have found their perfect match with EaseHire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/candidates/sign-up">
              <Button size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100 px-8">
                Create Free Account
              </Button>
            </Link>
            <Link to="/candidates/browse-jobs">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-500 px-8">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CandidatesPage;
