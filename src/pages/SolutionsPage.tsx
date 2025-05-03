
import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const solutions = [
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "Comprehensive hiring solutions for large organizations with complex needs.",
    features: [
      "Customized AI matching algorithms",
      "Advanced analytics and reporting",
      "Integration with existing HRIS systems",
      "Global talent sourcing capabilities",
      "Custom user permissions and roles",
      "White-labeled candidate experience",
      "Dedicated account management",
      "API access for custom integrations",
    ],
    image: "/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
  },
  {
    id: "small-business",
    title: "Small Business",
    description:
      "Affordable and effective hiring tools designed for growing companies.",
    features: [
      "User-friendly ATS functionality",
      "AI-powered candidate matching",
      "Efficient application screening",
      "Interview scheduling tools",
      "Collaborative hiring workflows",
      "Branded careers page",
      "Local talent sourcing",
      "Cost-effective plans",
    ],
    image: "/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png",
  },
  {
    id: "recruiting-agencies",
    title: "Recruiting Agencies",
    description:
      "Specialized tools to help agencies place candidates faster and more efficiently.",
    features: [
      "Candidate database management",
      "Client portal access",
      "Multi-client job management",
      "Placement tracking",
      "Commission management",
      "Source attribution tracking",
      "Candidate relationship management",
      "Client reporting tools",
    ],
    image: "/lovable-uploads/06232a0d-be4b-4e28-ab40-ca2e3e309e4c.png",
  },
  {
    id: "diversity-hiring",
    title: "Diversity Hiring",
    description:
      "Build more inclusive recruitment processes and diverse teams.",
    features: [
      "Bias-free AI matching algorithms",
      "Inclusive job description tools",
      "Diversity analytics and insights",
      "Anonymous screening options",
      "Diverse talent sourcing strategies",
      "Inclusion training resources",
      "Accessibility compliance tools",
      "DEI goal tracking",
    ],
    image: "/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
  },
  {
    id: "remote-hiring",
    title: "Remote Hiring",
    description:
      "Specialized tools for hiring and managing distributed teams.",
    features: [
      "Global talent pool access",
      "Virtual interview tools",
      "Remote skills assessment",
      "Time zone management",
      "Digital onboarding tools",
      "Remote compliance management",
      "Cultural fit assessment",
      "Global compensation insights",
    ],
    image: "/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png",
  },
  {
    id: "technical-hiring",
    title: "Technical Hiring",
    description:
      "Assessment tools and specialized workflows for technical roles.",
    features: [
      "Technical skills assessment",
      "Code challenge platform",
      "Technical interview frameworks",
      "Skill-based matching",
      "Technical role templates",
      "GitHub and portfolio integration",
      "Technical recruiter tools",
      "Specialized technical screening",
    ],
    image: "/lovable-uploads/06232a0d-be4b-4e28-ab40-ca2e3e309e4c.png",
  },
];

const SolutionsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 pt-20 pb-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tailored <span className="text-primary-600">Solutions</span> for Every Need
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Whether you're a large enterprise or a small business, we have the right tools to optimize your hiring process.
          </p>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="section bg-white">
        <div className="container-custom">
          <Tabs defaultValue="enterprise" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {solutions.map((solution) => (
                  <TabsTrigger key={solution.id} value={solution.id}>
                    {solution.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{solution.title} Solution</h2>
                    <p className="text-lg text-gray-700 mb-8">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="h-6 w-6 text-primary-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/solutions/${solution.id}`}>
                        <Button>Learn More</Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline">Contact Sales</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img
                      src={solution.image}
                      alt={`${solution.title} Solution`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Success Stories</h2>
          <div className="section-subtitle">
            See how our solutions have helped organizations like yours
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Enterprise Case Study</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Global Tech Company</h3>
                <p className="text-gray-700 mb-4">Reduced time-to-hire by 40% and improved quality of hire with our Enterprise solution.</p>
                <Link to="/case-studies/enterprise" className="text-primary-500 hover:text-primary-600 font-medium">
                  Read the case study →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Small Business Case Study</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Growing Startup</h3>
                <p className="text-gray-700 mb-4">Built a team of 25 high-performers in 6 months with our Small Business solution.</p>
                <Link to="/case-studies/small-business" className="text-primary-500 hover:text-primary-600 font-medium">
                  Read the case study →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Diversity Hiring Case Study</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">National Retail Chain</h3>
                <p className="text-gray-700 mb-4">Increased diversity in leadership positions by 35% using our specialized tools.</p>
                <Link to="/case-studies/diversity-hiring" className="text-primary-500 hover:text-primary-600 font-medium">
                  Read the case study →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We understand that every organization has unique hiring challenges and requirements. Our team can work with you to develop a customized solution that addresses your specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our consultative approach ensures that you get exactly what you need, with the flexibility to adapt as your requirements evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png"
                alt="Custom Solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Integration Partners</h2>
          <div className="section-subtitle">
            Our platform seamlessly integrates with your favorite tools and systems
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm">
                <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/integrations">
              <Button variant="outline">View All Integrations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Solution?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Our team is ready to help you find the right tools and features for your unique hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="default" className="bg-white text-primary-700 hover:bg-gray-100 px-8">
                Contact Sales
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
    </Layout>
  );
};

export default SolutionsPage;
