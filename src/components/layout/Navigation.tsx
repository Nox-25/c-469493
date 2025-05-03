
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            EaseHire
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Candidates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/candidates"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-primary-100 to-primary-200 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-primary-700">
                            For Job Seekers
                          </div>
                          <p className="text-sm text-primary-600">
                            Find your dream job with AI-powered matching and application tracking.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/candidates/resume-builder" title="Resume Builder">
                      Create an ATS-friendly resume that gets noticed
                    </ListItem>
                    <ListItem to="/candidates/job-matching" title="Job Matching">
                      Find jobs that match your skills and experience
                    </ListItem>
                    <ListItem to="/candidates/career-resources" title="Career Resources">
                      Access tools and guides for career development
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Employers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/employers"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-primary-100 to-primary-200 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-primary-700">
                            For Employers
                          </div>
                          <p className="text-sm text-primary-600">
                            Streamline your hiring process with AI-powered tools and analytics.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/employers/talent-sourcing" title="Talent Sourcing">
                      Find qualified candidates faster with our AI matching
                    </ListItem>
                    <ListItem to="/employers/applicant-tracking" title="Applicant Tracking">
                      Manage your hiring pipeline efficiently
                    </ListItem>
                    <ListItem to="/employers/interview-tools" title="Interview Tools">
                      Structured interview guides and assessment tools
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                    <ListItem to="/solutions/enterprise" title="Enterprise">
                      Customized solutions for large organizations
                    </ListItem>
                    <ListItem to="/solutions/small-business" title="Small Business">
                      Affordable hiring tools for growing companies
                    </ListItem>
                    <ListItem to="/solutions/recruiting-agencies" title="Recruiting Agencies">
                      Tools to help agencies place candidates faster
                    </ListItem>
                    <ListItem to="/solutions/diversity-hiring" title="Diversity Hiring">
                      Build more inclusive recruitment processes
                    </ListItem>
                    <ListItem to="/solutions/remote-hiring" title="Remote Hiring">
                      Specialized tools for hiring distributed teams
                    </ListItem>
                    <ListItem to="/solutions/technical-hiring" title="Technical Hiring">
                      Assessment tools for technical roles
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing">
                  <NavigationMenuLink className="text-sm font-medium px-4 py-2 hover:text-primary-500 transition-colors">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="text-sm font-medium px-4 py-2 hover:text-primary-500 transition-colors">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="text-sm font-medium px-4 py-2 hover:text-primary-500 transition-colors">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4 ml-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/get-started">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in bg-white border-t border-gray-100">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/candidates" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Candidates
            </Link>
            <Link to="/employers" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Employers
            </Link>
            <Link to="/solutions" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Solutions
            </Link>
            <Link to="/pricing" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link to="/about" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              <Link to="/login">
                <Button variant="outline" className="w-full" onClick={toggleMenu}>
                  Sign In
                </Button>
              </Link>
              <Link to="/get-started">
                <Button className="w-full" onClick={toggleMenu}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
