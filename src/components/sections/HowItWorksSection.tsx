
import React from "react";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Sign up and create your detailed profile with your skills, experience, and preferences.",
  },
  {
    number: "02",
    title: "AI-Powered Matching",
    description:
      "Our algorithm matches you with the most relevant jobs based on your profile and preferences.",
  },
  {
    number: "03",
    title: "Apply With Ease",
    description:
      "Apply to jobs with a single click and track your application status in real-time.",
  },
  {
    number: "04",
    title: "Interview and Feedback",
    description:
      "Schedule interviews, receive preparation tips, and get feedback after each stage.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">How It Works</h2>
        <div className="section-subtitle">
          Our streamlined process makes job hunting and hiring simple and efficient
        </div>

        <div className="relative mt-20">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-200 hidden lg:block"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-400 text-white flex items-center justify-center text-xl font-bold mb-6 z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
