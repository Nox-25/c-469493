
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/job-vacancies");
    } else {
      navigate("/signin");
    }
  };

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-gray-100">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            EaseHire
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/updates" className="text-sm font-medium hover:text-primary-500 transition-colors">
            Latest Updates
          </Link>
          
          <Link to="/about" className="text-sm font-medium hover:text-primary-500 transition-colors">
            About Us
          </Link>

          <Link to="/contact" className="text-sm font-medium hover:text-primary-500 transition-colors">
            Contact
          </Link>

          <div className="flex items-center space-x-4 ml-4">
            {isAuthenticated ? (
              <>
                <Link to="/job-vacancies">
                  <Button variant="outline">Job Vacancies</Button>
                </Link>
                <Button variant="ghost" onClick={logout}>Sign Out</Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
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
            <Link to="/updates" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Latest Updates
            </Link>
            <Link to="/about" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              {isAuthenticated ? (
                <>
                  <Link to="/job-vacancies" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">
                      Job Vacancies
                    </Button>
                  </Link>
                  <Button className="w-full" onClick={() => { logout(); toggleMenu(); }}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/signin" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
