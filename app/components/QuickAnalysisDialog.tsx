import React, { useState, useEffect, useId } from 'react';
import { FileText, CheckCircle, XCircle, AlertCircle, Loader2, Upload, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface QuickAnalysisDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAnalysisComplete: () => void;
}

const QuickAnalysisDialog: React.FC<QuickAnalysisDialogProps> = ({ 
  isOpen, 
  onClose, 
  onAnalysisComplete
}) => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const descriptionId = useId();

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStep(3);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setStep(2);
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
  };

  const handleLogin = () => {
    // Implement login logic here
    onAnalysisComplete();
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Implement registration logic here
    onAnalysisComplete();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" aria-describedby={descriptionId}>
        {step === 1 && (
          <>
            <DialogDescription id={descriptionId} className="sr-only">
              Upload your resume for a quick analysis
            </DialogDescription>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Upload Resume</h2>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center space-y-4">
                {file ? (
                  <div className="space-y-2">
                    <FileText className="h-8 w-8 mx-auto text-blue-500" />
                    <p className="font-medium">{file.name}</p>
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" size="sm" onClick={handleDeleteFile}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                      <Button size="sm" onClick={handleUpload}>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mx-auto text-blue-500" />
                    <div>
                      <p className="font-medium">Drop your resume here</p>
                      <p className="text-xs text-slate-500">PDF, DOCX, or TXT (Max 5MB)</p>
                    </div>
                    <Input
                      type="file"
                      accept=".pdf,.docx,.txt"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" size="sm" onClick={() => document.getElementById('file-upload')?.click()}>
                      Browse Files
                    </Button>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <DialogDescription id={descriptionId} className="sr-only">
              Analyzing your resume
            </DialogDescription>
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Analyzing Resume</h2>
              <div className="space-y-4">
                <Progress value={analysisProgress} className="h-2" />
                <div className="space-y-2">
                  {[
                    { text: 'Document validation' },
                    { text: 'Content extraction' },
                    { text: 'ATS compatibility check' },
                    { text: 'Keyword analysis' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      {analysisProgress > i * 25 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                      )}
                      <span className={analysisProgress > i * 25 ? 'text-slate-600' : ''}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <DialogDescription id={descriptionId} className="sr-only">
              Quick analysis results and account creation options
            </DialogDescription>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Quick Analysis Complete</h2>
                <p className="text-slate-600">
                  Here's a preview of your resume's performance
                </p>
              </div>

              <Card className="p-6 bg-slate-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">ATS Compatibility Score</span>
                    <span className="text-lg font-bold text-blue-600">72/100</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="grid gap-3">
                    {[
                      { icon: <CheckCircle className="h-4 w-4 text-green-500" />, text: "Format is ATS-friendly" },
                      { icon: <AlertCircle className="h-4 w-4 text-yellow-500" />, text: "Keywords could be improved" },
                      { icon: <XCircle className="h-4 w-4 text-red-500" />, text: "Missing key sections" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Create an account to see detailed analysis and improvements
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {!showLoginForm && !showRegisterForm && (
                  <div className="space-y-2">
                    <Button className="w-full" onClick={() => setShowLoginForm(true)}>
                      Login
                    </Button>
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      onClick={() => setShowRegisterForm(true)}
                    >
                      Register
                    </Button>
                  </div>
                )}

                {showLoginForm && (
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="w-full" onClick={handleLogin}>
                      Login
                    </Button>
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      onClick={() => {
                        setShowLoginForm(false);
                        setShowRegisterForm(true);
                      }}
                    >
                      New user? Register
                    </Button>
                  </div>
                )}

                {showRegisterForm && (
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button className="w-full" onClick={handleRegister}>
                      Register
                    </Button>
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      onClick={() => {
                        setShowRegisterForm(false);
                        setShowLoginForm(true);
                      }}
                    >
                      Already have an account? Login
                    </Button>
                  </div>
                )}

                <div className="text-xs text-center text-slate-500">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuickAnalysisDialog;

