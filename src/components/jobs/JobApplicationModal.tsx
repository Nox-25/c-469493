
import React, { useState } from "react";
import { X, Upload, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Progress } from "../ui/progress";
import { toast } from "sonner";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    skills: string[];
    salary: string;
  };
}

interface SkillMatch {
  matched: string[];
  missing: string[];
  score: number;
  atsScore: number;
  recommendations: {
    skill: string;
    learningUrl: string;
  }[];
}

const JobApplicationModal = ({ isOpen, onClose, job }: JobApplicationModalProps) => {
  const [step, setStep] = useState<"details" | "upload" | "analysis" | "complete">("details");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [skillsMatch, setSkillsMatch] = useState<SkillMatch>({ 
    matched: [], 
    missing: [], 
    score: 0,
    atsScore: 0,
    recommendations: []
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleContinue = () => {
    if (step === "details") {
      setStep("upload");
    } else if (step === "upload" && file) {
      setIsUploading(true);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          analyzeResume();
        }
      }, 300);
    } else if (step === "analysis") {
      setStep("complete");
    } else if (step === "complete") {
      toast.success("Application submitted successfully!");
      onClose();
      resetForm();
    }
  };

  const resetForm = () => {
    setStep("details");
    setFile(null);
    setUploadProgress(0);
    setSkillsMatch({ 
      matched: [], 
      missing: [], 
      score: 0,
      atsScore: 0,
      recommendations: []
    });
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    setStep("analysis");
    
    // Simulate resume analysis and skills matching with more detailed results
    setTimeout(() => {
      // Create a more sophisticated analysis algorithm
      const matchedSkills = job.skills.filter((_, index) => Math.random() > 0.3);
      const missingSkills = job.skills.filter(skill => !matchedSkills.includes(skill));
      const matchScore = Math.floor((matchedSkills.length / job.skills.length) * 100);
      
      // Generate an ATS score based on multiple factors (70-95% range)
      const atsBaseScore = 70 + Math.floor(Math.random() * 26);
      
      // Generate learning recommendations for missing skills
      const learningPlatforms = [
        "https://www.udemy.com/courses/search/?q=",
        "https://www.coursera.org/search?query=",
        "https://www.linkedin.com/learning/search?keywords=",
        "https://www.pluralsight.com/search?q="
      ];
      
      const recommendations = missingSkills.map(skill => ({
        skill,
        learningUrl: `${learningPlatforms[Math.floor(Math.random() * learningPlatforms.length)]}${encodeURIComponent(skill)}`
      }));
      
      setSkillsMatch({
        matched: matchedSkills,
        missing: missingSkills,
        score: matchScore,
        atsScore: atsBaseScore,
        recommendations
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getATSScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  const renderStepContent = () => {
    switch (step) {
      case "details":
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">About this role</h3>
              <p className="text-gray-600 mt-1">{job.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Job Details</h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                <div>
                  <span className="text-gray-500">Company:</span>
                  <span className="font-medium ml-2">{job.company}</span>
                </div>
                <div>
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium ml-2">{job.location}</span>
                </div>
                <div>
                  <span className="text-gray-500">Salary:</span>
                  <span className="font-medium ml-2">{job.salary}</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "upload":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Upload Your Resume</h3>
              <p className="text-gray-500 mt-2">
                Please upload your resume to continue with your application.
                We'll analyze it to match your skills with the job requirements.
              </p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {file ? (
                <div className="space-y-2">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFile(null)}
                    className="mt-2"
                  >
                    Change File
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                        Select File
                      </span>
                      <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {isUploading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </div>
        );
        
      case "analysis":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Resume Analysis</h3>
              <p className="text-gray-500 mt-1">
                We've analyzed your resume and compared it with the job requirements.
              </p>
            </div>
            
            {isAnalyzing ? (
              <div className="py-12 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                <p className="text-gray-500 mt-4">Analyzing your resume...</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Skills Match Score */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Skills Match</h4>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-3xl font-bold ${getScoreColor(skillsMatch.score)}`}>
                            {skillsMatch.score}%
                          </span>
                        </div>
                        <svg className="h-full w-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={skillsMatch.score >= 80 ? "#16a34a" : skillsMatch.score >= 50 ? "#ca8a04" : "#dc2626"}
                            strokeWidth="3"
                            strokeDasharray={`${skillsMatch.score}, 100`}
                          />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-center text-sm mb-4">
                      {skillsMatch.score >= 80
                        ? "Excellent match! Your skills align very well with the job requirements."
                        : skillsMatch.score >= 50
                        ? "Good match, but you could improve in some areas."
                        : "Consider enhancing your skills in the missing areas."}
                    </p>
                  </div>
                  
                  {/* ATS Score */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">ATS Score</h4>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-3xl font-bold ${getATSScoreColor(skillsMatch.atsScore)}`}>
                            {skillsMatch.atsScore}%
                          </span>
                        </div>
                        <svg className="h-full w-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={skillsMatch.atsScore >= 85 ? "#16a34a" : skillsMatch.atsScore >= 75 ? "#ca8a04" : "#dc2626"}
                            strokeWidth="3"
                            strokeDasharray={`${skillsMatch.atsScore}, 100`}
                          />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-center text-sm mb-4">
                      {skillsMatch.atsScore >= 85
                        ? "Your resume is well-optimized for ATS systems!"
                        : skillsMatch.atsScore >= 75
                        ? "Your resume passes most ATS checks but could be improved."
                        : "Your resume may be filtered out by ATS systems. Consider optimizing it."}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-green-600 flex items-center mb-2">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Matched Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillsMatch.matched.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {skill}
                        </Badge>
                      ))}
                      {skillsMatch.matched.length === 0 && (
                        <p className="text-sm text-gray-500">No skills matched</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-amber-600 flex items-center mb-2">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Missing Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillsMatch.missing.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          {skill}
                        </Badge>
                      ))}
                      {skillsMatch.missing.length === 0 && (
                        <p className="text-sm text-gray-500">No missing skills!</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Learning Recommendations */}
                {skillsMatch.recommendations.length > 0 && (
                  <div className="mt-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                      <h4 className="font-medium text-blue-700 mb-2">Skill Development Recommendations</h4>
                      <p className="text-sm text-blue-600">
                        Enhance your profile by developing these skills with these learning resources.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {skillsMatch.recommendations.map((rec, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white border rounded-lg hover:bg-gray-50">
                          <div>
                            <span className="font-medium">{rec.skill}</span>
                            <p className="text-xs text-gray-500">
                              Improve your chances by learning this skill
                            </p>
                          </div>
                          <a 
                            href={rec.learningUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                          >
                            Learn Now
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500 mt-6">
                  <h4 className="font-medium text-blue-800">Resume Optimization Tips</h4>
                  <ul className="text-sm text-blue-800 list-disc list-inside mt-2 space-y-1">
                    <li>Add keywords from the job description to your resume</li>
                    <li>Quantify your achievements with numbers and metrics</li>
                    <li>Use action verbs to describe your experience</li>
                    <li>Customize your resume for each job application</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        );
        
      case "complete":
        return (
          <div className="text-center space-y-4">
            <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h3 className="text-xl font-semibold">Application Ready!</h3>
            <p className="text-gray-600">
              Your resume has been analyzed and your application is ready to submit.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md text-left">
              <h4 className="font-medium mb-2">Application Summary</h4>
              <div className="text-sm space-y-1">
                <p><span className="text-gray-500">Position:</span> <span className="font-medium">{job.title}</span></p>
                <p><span className="text-gray-500">Company:</span> <span className="font-medium">{job.company}</span></p>
                <p><span className="text-gray-500">Resume:</span> <span className="font-medium">{file?.name}</span></p>
                <p><span className="text-gray-500">Skills Match:</span> <span className={`font-medium ${getScoreColor(skillsMatch.score)}`}>{skillsMatch.score}%</span></p>
                <p><span className="text-gray-500">ATS Score:</span> <span className={`font-medium ${getATSScoreColor(skillsMatch.atsScore)}`}>{skillsMatch.atsScore}%</span></p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500 text-left">
              <p className="text-sm text-green-800">
                <span className="font-medium">Next Steps:</span> After submitting your application, our team will review it and contact you if your profile matches the position requirements. Good luck!
              </p>
            </div>
          </div>
        );
    }
  };

  const getButtonText = () => {
    switch (step) {
      case "details":
        return "Continue";
      case "upload":
        return file ? "Upload Resume" : "Skip";
      case "analysis":
        return isAnalyzing ? "Analyzing..." : "Continue";
      case "complete":
        return "Submit Application";
    }
  };

  const isButtonDisabled = () => {
    if (step === "upload" && !file && !isUploading) {
      return false;
    }
    return isUploading || isAnalyzing;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Apply for {job.title} at {job.company}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "details" || step === "upload" || step === "analysis" || step === "complete" ? "bg-primary text-white" : "bg-gray-200"}`}>
                1
              </div>
              <div className={`h-1 w-10 ${step === "upload" || step === "analysis" || step === "complete" ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "upload" || step === "analysis" || step === "complete" ? "bg-primary text-white" : "bg-gray-200"}`}>
                2
              </div>
              <div className={`h-1 w-10 ${step === "analysis" || step === "complete" ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "analysis" || step === "complete" ? "bg-primary text-white" : "bg-gray-200"}`}>
                3
              </div>
              <div className={`h-1 w-10 ${step === "complete" ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "complete" ? "bg-primary text-white" : "bg-gray-200"}`}>
                4
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Step {step === "details" ? "1" : step === "upload" ? "2" : step === "analysis" ? "3" : "4"} of 4
            </div>
          </div>
        </div>
        
        <div className="my-4">
          {renderStepContent()}
        </div>

        <DialogFooter className="mt-4">
          {step !== "details" && (
            <Button 
              variant="outline"
              onClick={() => setStep(
                step === "upload" ? "details" :
                step === "analysis" ? "upload" :
                step === "complete" ? "analysis" : "details"
              )}
              className="mr-auto"
              disabled={isUploading || isAnalyzing}
            >
              Back
            </Button>
          )}
          <Button 
            onClick={handleContinue}
            disabled={isButtonDisabled()}
          >
            {getButtonText()}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
