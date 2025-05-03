
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Users, FileSearch } from "lucide-react";
import JobApplicationModal from "../components/jobs/JobApplicationModal";
import SideNavigation from "../components/layout/SideNavigation";

// Mock job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern frontend frameworks to join our growing team. You'll be responsible for building and maintaining user interfaces for our SaaS platform, collaborating with designers and backend engineers, and contributing to our component library.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateSoft",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $135,000",
    description: "Join our product team to lead the development of our flagship SaaS platform. You'll work closely with engineers, designers, and stakeholders to define product requirements, prioritize features, and ensure successful product launches. Experience with agile methodologies and a track record of shipping successful products is required.",
    skills: ["Product Strategy", "Agile", "User Research", "Analytics", "Roadmapping"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "CreativeDesign Co",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    salary: "$95,000 - $120,000",
    description: "Help us create beautiful, intuitive user experiences for our client projects. You'll be responsible for user research, wireframing, and high-fidelity designs. You should have a strong portfolio demonstrating your design thinking and ability to solve complex user problems through thoughtful, accessible interfaces.",
    skills: ["Figma", "User Testing", "Design Systems", "Prototyping", "Accessibility"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    type: "Contract",
    salary: "$70-90/hour",
    description: "We're seeking an experienced DevOps engineer to help us build and maintain our cloud infrastructure and deployment pipelines. You'll work with our engineering team to automate deployments, monitor system performance, and ensure reliability and security of our platform. Experience with AWS, Kubernetes, and CI/CD tools is essential.",
    skills: ["AWS", "Kubernetes", "CI/CD", "Docker", "Terraform"],
    posted: "Just now",
  },
];

const JobVacanciesPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  const handleApplyNow = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation />
      
      <div className="lg:pl-72 w-full">
        <Layout>
          <section className="bg-gradient-to-r from-primary-100 to-primary-200 py-8">
            <div className="container-custom">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Job Vacancies</h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Discover opportunities that match your skills and experience with our
                AI-powered job matching system.
              </p>
            </div>
          </section>

          <section className="container-custom py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                          <p className="text-primary-600 font-medium">{job.company}</p>
                        </div>
                        <Badge variant="outline" className="bg-primary-50 text-primary-700">
                          {job.posted}
                        </Badge>
                      </div>

                      <div className="mt-4 flex items-center text-gray-600">
                        <Users size={18} className="mr-1" />
                        <span className="mr-4">{job.location}</span>
                        <BriefcaseBusiness size={18} className="mr-1" />
                        <span>{job.type}</span>
                      </div>

                      <div className="mt-2 text-gray-600">
                        <span className="font-medium">Salary:</span> {job.salary}
                      </div>

                      <p className="mt-4 text-gray-700 line-clamp-2">{job.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Button size="sm" onClick={() => handleApplyNow(job)}>Apply Now</Button>
                        <Button size="sm" variant="outline">
                          Save Job
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Job Search</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="keywords">Keywords</Label>
                      <div className="flex mt-1">
                        <Input
                          id="keywords"
                          placeholder="Job title, skills, or company"
                          className="rounded-r-none"
                        />
                        <Button className="rounded-l-none">
                          <FileSearch size={18} />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, state, or remote" />
                    </div>

                    <div>
                      <Label>Job Type</Label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <Button variant="outline" size="sm" className="justify-start">
                          Full-time
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Part-time
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Contract
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Remote
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Experience Level</Label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <Button variant="outline" size="sm" className="justify-start">
                          Entry Level
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Mid-Level
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Senior
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Executive
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full mt-2">Apply Filters</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {selectedJob && (
            <JobApplicationModal
              isOpen={isApplicationModalOpen}
              onClose={() => setIsApplicationModalOpen(false)}
              job={selectedJob}
            />
          )}
        </Layout>
      </div>
    </div>
  );
};

export default JobVacanciesPage;
