
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { 
  Layout, 
  BriefcaseBusiness, 
  Settings, 
  LogOut, 
  User, 
  Bell, 
  Home, 
  FileText 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  needsAuth?: boolean;
}

const SideNavigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems: NavItem[] = [
    {
      name: "Home",
      icon: <Home size={22} />,
      path: "/",
    },
    {
      name: "Job Vacancies",
      icon: <BriefcaseBusiness size={22} />,
      path: "/job-vacancies",
      needsAuth: true,
    },
    {
      name: "Latest Updates",
      icon: <Bell size={22} />,
      path: "/updates",
    },
    {
      name: "Resume Builder",
      icon: <FileText size={22} />,
      path: "/resume-builder",
      needsAuth: true,
    },
    {
      name: "My Profile",
      icon: <User size={22} />,
      path: "/profile",
      needsAuth: true,
    },
    {
      name: "Settings",
      icon: <Settings size={22} />,
      path: "/settings",
      needsAuth: true,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <button
        className="fixed top-5 left-5 z-30 lg:hidden bg-white text-primary-600 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        onClick={toggleSidebar}
      >
        <Layout size={22} />
      </button>

      <div
        className={`fixed inset-0 z-20 bg-black/50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-30 h-full bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out w-72 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-bold text-primary-600">EaseHire</span>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {navItems.map((item) => {
                if (item.needsAuth && !isAuthenticated) return null;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary-50 hover:text-primary-600 group transition-colors"
                  >
                    <span className="text-gray-500 group-hover:text-primary-600 mr-3">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {isAuthenticated && (
            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 group transition-colors"
              >
                <span className="text-gray-500 group-hover:text-red-600 mr-3">
                  <LogOut size={22} />
                </span>
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default SideNavigation;
