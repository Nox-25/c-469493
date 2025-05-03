
import React from "react";
import { Bell, Calendar, ExternalLink } from "lucide-react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import SideNavigation from "../components/layout/SideNavigation";

// Mock updates data
const updates = [
  {
    id: 1,
    title: "New Remote Job Opportunities",
    date: "May 1, 2025",
    category: "Jobs",
    description: "We've added over 50 new remote positions in tech, marketing, and design. Check them out now!",
    link: "/job-vacancies",
  },
  {
    id: 2,
    title: "Resume Builder Tool Improvements",
    date: "April 28, 2025",
    category: "Features",
    description: "Our resume builder now includes AI-powered suggestions and improved templates for better job matches.",
    link: "/resume-builder",
  },
  {
    id: 3,
    title: "Upcoming Virtual Job Fair",
    date: "April 25, 2025",
    category: "Events",
    description: "Join our virtual job fair on May 15th featuring top tech companies hiring now. Registration is open!",
    link: "https://jobfair.easehire.com",
    isExternal: true,
  },
  {
    id: 4,
    title: "New Skills Assessment Tests",
    date: "April 20, 2025",
    category: "Features",
    description: "Take our new skills assessment tests to showcase your abilities to potential employers.",
    link: "/assessments",
  },
  {
    id: 5,
    title: "Platform Maintenance Schedule",
    date: "April 15, 2025",
    category: "Announcement",
    description: "EaseHire will undergo scheduled maintenance on May 5th from 2-4 AM EST. Some features may be unavailable during this time.",
    link: null,
  },
];

const UpdatesPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation />
      
      <div className="lg:pl-72 w-full">
        <Layout>
          <section className="bg-gradient-to-r from-primary-100 to-primary-200 py-8">
            <div className="container-custom">
              <div className="flex items-center gap-3">
                <Bell size={28} className="text-primary-700" />
                <h1 className="text-3xl md:text-4xl font-bold">Latest Updates</h1>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mt-2">
                Stay informed about new features, job opportunities, and important announcements.
              </p>
            </div>
          </section>

          <section className="container-custom py-12">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {updates.map((update) => (
                  <div 
                    key={update.id}
                    className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{update.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">{update.date}</span>
                          <Badge variant="outline" className="ml-1">
                            {update.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700">{update.description}</p>

                    {update.link && (
                      <div className="mt-4">
                        {update.isExternal ? (
                          <Button variant="outline" size="sm" asChild className="group">
                            <a 
                              href={update.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              Learn More
                              <ExternalLink 
                                size={14} 
                                className="ml-1 transition-transform group-hover:translate-x-1" 
                              />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" asChild>
                            <a href={update.link}>View Details</a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </div>
  );
};

export default UpdatesPage;
