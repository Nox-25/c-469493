
import React from "react";
import {
  Card,
  CardContent,
} from "../ui/card";

const testimonials = [
  {
    quote:
      "EaseHire completely transformed our hiring process. We've reduced our time-to-hire by 40% and found candidates who are a perfect fit for our company culture.",
    name: "Sarah Johnson",
    title: "HR Director, TechCorp",
    image: "/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png",
  },
  {
    quote:
      "As a job seeker, I was amazed at how EaseHire matched me with roles that truly aligned with my skills and career goals. I landed my dream job within two weeks!",
    name: "Michael Chen",
    title: "Software Engineer",
    image: "/lovable-uploads/06232a0d-be4b-4e28-ab40-ca2e3e309e4c.png",
  },
  {
    quote:
      "The resume builder and interview preparation tools were game-changers for me. I received more callbacks than ever before and felt confident throughout the entire process.",
    name: "Jessica Rodriguez",
    title: "Marketing Specialist",
    image: "/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-primary-100">
      <div className="container-custom">
        <h2 className="section-title">What People Are Saying</h2>
        <div className="section-subtitle">
          Hear from our satisfied users who have transformed their hiring and job search experience
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="45" height="36" className="text-primary-300" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 0C6.04822 0 0 6.04822 0 13.5C0 20.9518 6.04822 27 13.5 27H18V22.5C18 19.7386 15.7614 17.5 13 17.5H11.5C8.73858 17.5 6.5 15.2614 6.5 12.5C6.5 9.73858 8.73858 7.5 11.5 7.5H13.5C15.7091 7.5 17.5 9.29086 17.5 11.5V36H0V27C0 27 0 27 0 27C0 33.0751 4.92487 38 11 38H20.5V11.5C20.5 5.14873 15.3513 0 9 0H13.5Z" fill="currentColor"/>
                      <path d="M38 0C30.5482 0 24.5 6.04822 24.5 13.5C24.5 20.9518 30.5482 27 38 27H42.5V22.5C42.5 19.7386 40.2614 17.5 37.5 17.5H36C33.2386 17.5 31 15.2614 31 12.5C31 9.73858 33.2386 7.5 36 7.5H38C40.2091 7.5 42 9.29086 42 11.5V36H24.5V27C24.5 27 24.5 27 24.5 27C24.5 33.0751 29.4249 38 35.5 38H45V11.5C45 5.14873 39.8513 0 33.5 0H38Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-8 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
