
import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alexandra Chen",
    title: "CEO & Co-Founder",
    bio: "Former Head of Talent Acquisition with 15+ years of experience in the recruitment industry.",
    image: "/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png",
  },
  {
    name: "Marcus Johnson",
    title: "CTO & Co-Founder",
    bio: "AI expert with a PhD in Machine Learning and previous experience at leading tech companies.",
    image: "/lovable-uploads/06232a0d-be4b-4e28-ab40-ca2e3e309e4c.png",
  },
  {
    name: "Sophia Kim",
    title: "Chief Product Officer",
    bio: "Product leader with a passion for creating intuitive user experiences that solve real problems.",
    image: "/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
  },
  {
    name: "David Rodriguez",
    title: "VP of Customer Success",
    bio: "Committed to ensuring every client achieves their hiring goals through our platform.",
    image: "/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png",
  },
];

const values = [
  {
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in recruitment technology.",
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in all our interactions.",
  },
  {
    title: "Inclusion",
    description: "We believe diverse teams build better products and companies.",
  },
  {
    title: "Impact",
    description: "We measure our success by the positive difference we make for our users.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 pt-20 pb-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary-600">EaseHire</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            We're on a mission to transform the hiring process by connecting the right candidates with the right opportunities through AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                EaseHire was founded in 2020 by Alexandra Chen and Marcus Johnson, who experienced firsthand the frustrations of traditional hiring processes from both sides of the table.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Alexandra, a seasoned talent acquisition leader, was tired of sorting through hundreds of resumes to find qualified candidates. Marcus, an AI expert, knew there had to be a better way to match job seekers with the right opportunities.
              </p>
              <p className="text-lg text-gray-700">
                Together, they built EaseHire with a simple mission: to make hiring easier, faster, and more effective for everyone involved. Today, our platform helps thousands of companies and job seekers find their perfect match.
              </p>
            </div>
            <div>
              <img
                src="/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png"
                alt="EaseHire Founders"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>
          <div className="section-subtitle">
            These core principles guide everything we do at EaseHire
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Team</h2>
          <div className="section-subtitle">
            Meet the passionate people behind EaseHire
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <div className="text-primary-500 mb-2">{member.title}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-xl">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200,000+</div>
              <div className="text-xl">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-xl">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-xl">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            We're always looking for talented and passionate people to join our mission of transforming the hiring process.
          </p>
          <Link to="/careers">
            <Button size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100 px-8">
              View Open Positions
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
