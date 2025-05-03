
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import { Plus, Save, Download, Trash2, FileText } from "lucide-react";
import SideNavigation from '@/components/layout/SideNavigation';
import Layout from "@/components/layout/Layout";

interface ResumeSection {
  id: string;
  type: 'education' | 'experience' | 'skills' | 'projects';
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  skills?: string[];
}

const ResumeBuilder = () => {
  const showContent = useAnimateIn(false, 300);
  const [activeTab, setActiveTab] = useState('personal');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [headline, setHeadline] = useState('');
  const [summary, setSummary] = useState('');
  const [location, setLocation] = useState('');
  const [sections, setSections] = useState<ResumeSection[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  
  const handleAddSection = (type: 'education' | 'experience' | 'projects') => {
    const newSection: ResumeSection = {
      id: `section-${Date.now()}`,
      type,
      title: '',
      subtitle: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    
    setSections([...sections, newSection]);
  };
  
  const handleRemoveSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };
  
  const handleSectionChange = (id: string, field: string, value: string) => {
    setSections(sections.map(section => {
      if (section.id === id) {
        return { ...section, [field]: value };
      }
      return section;
    }));
  };
  
  const handleAddSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill('');
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };
  
  const handleSaveResume = () => {
    // In a real application, this would save to a database
    const resumeData = {
      personal: {
        fullName,
        email,
        phone,
        headline,
        summary,
        location
      },
      sections,
      skills
    };
    
    console.log('Resume data saved:', resumeData);
    toast.success('Resume saved successfully!');
  };
  
  const handleDownloadResume = () => {
    // In a real application, this would generate a PDF
    toast.success('Resume downloaded as PDF');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNavigation />
      <div className="lg:pl-72 w-full">
        <Layout>
          <div className="max-w-7xl mx-auto px-4 pt-16 pb-16">
            <AnimatedTransition show={showContent} animation="slide-up">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Resume Builder</h1>
                <p className="text-muted-foreground mt-2">
                  Create a professional resume to help you land your dream job
                </p>
              </div>
              
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>My Resume</CardTitle>
                    <CardDescription>Build and customize your professional resume</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleSaveResume}>
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm" onClick={handleDownloadResume}>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="experience">Experience</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal" className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                          <CardDescription>
                            Add your personal details to your resume
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name</Label>
                              <Input 
                                id="fullName" 
                                value={fullName} 
                                onChange={(e) => setFullName(e.target.value)} 
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="headline">Professional Headline</Label>
                              <Input 
                                id="headline" 
                                value={headline} 
                                onChange={(e) => setHeadline(e.target.value)} 
                                placeholder="Senior Frontend Developer"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="john@example.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input 
                                id="phone" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                placeholder="(123) 456-7890"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input 
                              id="location" 
                              value={location} 
                              onChange={(e) => setLocation(e.target.value)} 
                              placeholder="San Francisco, CA"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="summary">Professional Summary</Label>
                            <Textarea 
                              id="summary" 
                              value={summary} 
                              onChange={(e) => setSummary(e.target.value)} 
                              placeholder="Experienced developer with a passion for creating user-friendly interfaces..."
                              rows={4}
                            />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Skills</CardTitle>
                          <CardDescription>
                            Add your technical and soft skills
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-2 mb-4">
                            <Input 
                              value={currentSkill} 
                              onChange={(e) => setCurrentSkill(e.target.value)} 
                              placeholder="Add a skill (e.g. React, JavaScript)"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  handleAddSkill();
                                }
                              }}
                            />
                            <Button onClick={handleAddSkill}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                              <Badge key={skill} variant="secondary" className="px-3 py-1 flex items-center gap-1">
                                {skill}
                                <button 
                                  onClick={() => handleRemoveSkill(skill)}
                                  className="ml-1 text-gray-500 hover:text-gray-700"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                            {skills.length === 0 && (
                              <p className="text-sm text-gray-500">No skills added yet</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="experience" className="space-y-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div>
                            <CardTitle>Work Experience</CardTitle>
                            <CardDescription>
                              Add your work history and professional experience
                            </CardDescription>
                          </div>
                          <Button onClick={() => handleAddSection('experience')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Experience
                          </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {sections.filter(section => section.type === 'experience').map(section => (
                            <Card key={section.id} className="border">
                              <CardHeader className="p-4 flex flex-row items-start justify-between">
                                <div className="space-y-1">
                                  <Input 
                                    value={section.title || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)} 
                                    placeholder="Job Title"
                                    className="font-medium text-lg border-none p-0 h-auto"
                                  />
                                  <Input 
                                    value={section.subtitle || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'subtitle', e.target.value)} 
                                    placeholder="Company Name"
                                    className="text-gray-500 border-none p-0 h-auto"
                                  />
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleRemoveSection(section.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </CardHeader>
                              <CardContent className="p-4 pt-0 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor={`${section.id}-start-date`}>Start Date</Label>
                                    <Input 
                                      id={`${section.id}-start-date`}
                                      type="month"
                                      value={section.startDate || ''} 
                                      onChange={(e) => handleSectionChange(section.id, 'startDate', e.target.value)} 
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`${section.id}-end-date`}>End Date</Label>
                                    <Input 
                                      id={`${section.id}-end-date`}
                                      type="month"
                                      value={section.endDate || ''} 
                                      onChange={(e) => handleSectionChange(section.id, 'endDate', e.target.value)} 
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`${section.id}-description`}>Description</Label>
                                  <Textarea 
                                    id={`${section.id}-description`}
                                    value={section.description || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'description', e.target.value)} 
                                    placeholder="Describe your responsibilities and achievements..."
                                    rows={4}
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                          
                          {sections.filter(section => section.type === 'experience').length === 0 && (
                            <div className="text-center py-8 border border-dashed rounded-lg">
                              <FileText className="mx-auto h-12 w-12 text-gray-300" />
                              <h3 className="mt-4 text-lg font-medium">No experience added</h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Add your work experience to strengthen your resume
                              </p>
                              <Button className="mt-4" onClick={() => handleAddSection('experience')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Experience
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="education" className="space-y-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div>
                            <CardTitle>Education</CardTitle>
                            <CardDescription>
                              Add your educational background
                            </CardDescription>
                          </div>
                          <Button onClick={() => handleAddSection('education')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Education
                          </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {sections.filter(section => section.type === 'education').map(section => (
                            <Card key={section.id} className="border">
                              <CardHeader className="p-4 flex flex-row items-start justify-between">
                                <div className="space-y-1">
                                  <Input 
                                    value={section.title || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)} 
                                    placeholder="Degree / Program"
                                    className="font-medium text-lg border-none p-0 h-auto"
                                  />
                                  <Input 
                                    value={section.subtitle || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'subtitle', e.target.value)} 
                                    placeholder="Institution Name"
                                    className="text-gray-500 border-none p-0 h-auto"
                                  />
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleRemoveSection(section.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </CardHeader>
                              <CardContent className="p-4 pt-0 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor={`${section.id}-start-date`}>Start Date</Label>
                                    <Input 
                                      id={`${section.id}-start-date`}
                                      type="month"
                                      value={section.startDate || ''} 
                                      onChange={(e) => handleSectionChange(section.id, 'startDate', e.target.value)} 
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`${section.id}-end-date`}>End Date</Label>
                                    <Input 
                                      id={`${section.id}-end-date`}
                                      type="month"
                                      value={section.endDate || ''} 
                                      onChange={(e) => handleSectionChange(section.id, 'endDate', e.target.value)} 
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`${section.id}-description`}>Description</Label>
                                  <Textarea 
                                    id={`${section.id}-description`}
                                    value={section.description || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'description', e.target.value)} 
                                    placeholder="Relevant coursework, achievements, activities..."
                                    rows={4}
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                          
                          {sections.filter(section => section.type === 'education').length === 0 && (
                            <div className="text-center py-8 border border-dashed rounded-lg">
                              <FileText className="mx-auto h-12 w-12 text-gray-300" />
                              <h3 className="mt-4 text-lg font-medium">No education added</h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Add your educational background to enhance your resume
                              </p>
                              <Button className="mt-4" onClick={() => handleAddSection('education')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Education
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="projects" className="space-y-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div>
                            <CardTitle>Projects</CardTitle>
                            <CardDescription>
                              Add relevant projects to showcase your skills
                            </CardDescription>
                          </div>
                          <Button onClick={() => handleAddSection('projects')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Project
                          </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {sections.filter(section => section.type === 'projects').map(section => (
                            <Card key={section.id} className="border">
                              <CardHeader className="p-4 flex flex-row items-start justify-between">
                                <div className="space-y-1">
                                  <Input 
                                    value={section.title || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)} 
                                    placeholder="Project Name"
                                    className="font-medium text-lg border-none p-0 h-auto"
                                  />
                                  <Input 
                                    value={section.subtitle || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'subtitle', e.target.value)} 
                                    placeholder="Technologies Used"
                                    className="text-gray-500 border-none p-0 h-auto"
                                  />
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleRemoveSection(section.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </CardHeader>
                              <CardContent className="p-4 pt-0 space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`${section.id}-description`}>Description</Label>
                                  <Textarea 
                                    id={`${section.id}-description`}
                                    value={section.description || ''} 
                                    onChange={(e) => handleSectionChange(section.id, 'description', e.target.value)} 
                                    placeholder="Describe the project, your role, and outcomes..."
                                    rows={4}
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                          
                          {sections.filter(section => section.type === 'projects').length === 0 && (
                            <div className="text-center py-8 border border-dashed rounded-lg">
                              <FileText className="mx-auto h-12 w-12 text-gray-300" />
                              <h3 className="mt-4 text-lg font-medium">No projects added</h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Add projects to demonstrate your skills and achievements
                              </p>
                              <Button className="mt-4" onClick={() => handleAddSection('projects')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Project
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Resume Preview</CardTitle>
                      <CardDescription>
                        See how your resume will look
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="prose max-w-none">
                      {fullName ? (
                        <h2 className="text-xl font-bold">{fullName}</h2>
                      ) : (
                        <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                      )}
                      
                      {headline ? (
                        <p className="text-primary font-medium">{headline}</p>
                      ) : (
                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 animate-pulse" />
                      )}
                      
                      <div className="text-sm text-gray-500 flex flex-wrap gap-2 my-2">
                        {email && <span>{email}</span>}
                        {phone && <span>• {phone}</span>}
                        {location && <span>• {location}</span>}
                      </div>
                      
                      {summary ? (
                        <p className="text-sm mt-2">{summary}</p>
                      ) : (
                        <div className="h-20 bg-gray-200 rounded mt-2 animate-pulse" />
                      )}
                      
                      {skills.length > 0 && (
                        <>
                          <h3 className="text-md font-semibold mt-4">Skills</h3>
                          <div className="flex flex-wrap gap-1 text-xs">
                            {skills.map(skill => (
                              <Badge key={skill} variant="secondary" className="px-2 py-0.5">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Preview sections based on type */}
                      {sections.length > 0 && sections.filter(s => s.type === 'experience').length > 0 && (
                        <>
                          <h3 className="text-md font-semibold mt-4">Experience</h3>
                          <div className="space-y-3">
                            {sections.filter(s => s.type === 'experience').map(section => (
                              <div key={section.id} className="text-sm">
                                <div className="font-medium">{section.title || 'Position Title'}</div>
                                <div className="text-gray-600">{section.subtitle || 'Company Name'}</div>
                                <div className="text-xs text-gray-500">
                                  {section.startDate && section.endDate ? 
                                    `${section.startDate} - ${section.endDate}` : 
                                    'Date Range'}
                                </div>
                                <p className="text-xs mt-1">{section.description || 'Job description...'}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {sections.length > 0 && sections.filter(s => s.type === 'education').length > 0 && (
                        <>
                          <h3 className="text-md font-semibold mt-4">Education</h3>
                          <div className="space-y-3">
                            {sections.filter(s => s.type === 'education').map(section => (
                              <div key={section.id} className="text-sm">
                                <div className="font-medium">{section.title || 'Degree'}</div>
                                <div className="text-gray-600">{section.subtitle || 'Institution'}</div>
                                <div className="text-xs text-gray-500">
                                  {section.startDate && section.endDate ? 
                                    `${section.startDate} - ${section.endDate}` : 
                                    'Date Range'}
                                </div>
                                <p className="text-xs mt-1">{section.description || 'Description...'}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" className="w-full" onClick={handleDownloadResume}>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </AnimatedTransition>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default ResumeBuilder;
