
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";
import EmployersPage from "./pages/EmployersPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";
import SignInPage from "./pages/SignInPage";
import JobVacanciesPage from "./pages/JobVacanciesPage";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/job-vacancies" element={<JobVacanciesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
