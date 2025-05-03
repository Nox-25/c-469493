
import React, { useState } from "react";
import { X, Upload, CheckCircle, AlertCircle } from "lucide-react";
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

const JobApplicationModal = ({ isOpen, onClose, job }: JobApplicationModalProps) => {
  const [step, setStep] = useState<"details" | "upload" | "analysis" | "complete">("details");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [skillsMatch, setSkillsMatch] = useState<{
    matched: string[];
    missing: string[];
    score: number;
  }>({ matched: [], missing: [], score: 0 });

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
    setSkillsMatch({ matched: [], missing: [], score: 0 });
  };

  const analyzeResume = () => {
    // In a real app, this would be an API call to analyze the resume
    setStep("analysis");
    
    // Simulate resume analysis and skills matching
    setTimeout(() => {
      const matchedSkills = job.skills.filter((_, index) => Math.random() > 0.3);
      const missingSkills = job.skills.filter(skill => !matchedSkills.includes(skill));
      const matchScore = Math.floor((matchedSkills.length / job.skills.length) * 100);
      
      setSkillsMatch({
        matched: matchedSkills,
        missing: missingSkills,
        score: matchScore
      });
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
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
              <h3 className="text-lg font-semibold">Skills Analysis</h3>
              <p className="text-gray-500 mt-1">
                We've analyzed your resume and compared it with the job requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
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
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
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
                
                <div>
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
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm">
                {skillsMatch.score >= 80
                  ? "Great match! Your skills align well with this position."
                  : skillsMatch.score >= 50
                  ? "Good match, but consider developing the missing skills to improve your chances."
                  : "You might want to develop more relevant skills for this position."
                }
              </p>
            </div>
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
              </div>
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
        return "Continue";
      case "complete":
        return "Submit Application";
    }
  };

  const isButtonDisabled = () => {
    if (step === "upload" && !file && !isUploading) {
      return false;
    }
    return isUploading;
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
