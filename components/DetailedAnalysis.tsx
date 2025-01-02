import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronRight, Download, AlertTriangle, CheckCircle, Info, BarChart, Zap, Target, TrendingUp, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface DetailedAnalysisProps {
  onLogout: () => void;
}

const ScoreCard = ({ title, score, description }) => (
  <Card className="p-4">
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm text-slate-600">{title}</h3>
        <span className="font-bold text-lg">{score}/100</span>
      </div>
      <Progress value={score} className="h-2" />
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  </Card>
);

const ExpandableSection = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-slate-50"
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-slate-400" />
        )}
      </button>
      {isExpanded && <div className="p-4 border-t">{children}</div>}
    </Card>
  );
};

const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({ onLogout }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Resume Analysis</h1>
            <p className="text-slate-600">Last updated: December 31, 2024</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Overall Score */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Overall ATS Score</h2>
                <p className="text-slate-600">Based on industry standards</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">78/100</div>
                <span className="text-green-600 text-sm">↑ 12% improvement</span>
              </div>
            </div>
            <Progress value={78} className="h-3" />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>Format is ATS-compatible</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Keywords could be improved</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Score Categories */}
        <div className="grid md:grid-cols-2 gap-4">
          <ScoreCard 
            title="Technical Skills Match"
            score={82}
            description="Strong alignment with required technical skills"
          />
          <ScoreCard 
            title="Experience Impact"
            score={75}
            description="Good demonstration of achievements"
          />
          <ScoreCard 
            title="Keywords Optimization"
            score={68}
            description="Room for improvement in keyword usage"
          />
          <ScoreCard 
            title="Format & Structure"
            score={85}
            description="Well-structured and easy to parse"
          />
        </div>

        {/* Detailed Analysis Sections */}
        <div className="space-y-4">
          <ExpandableSection 
            title="Technical Skills Analysis"
            icon={<BarChart className="h-5 w-5 text-blue-600" />}
          >
            <div className="space-y-4">
              {[
                { skill: "React", level: 85, mentions: 12 },
                { skill: "TypeScript", level: 72, mentions: 8 },
                { skill: "Node.js", level: 68, mentions: 6 },
                { skill: "Python", level: 65, mentions: 5 },
                { skill: "SQL", level: 60, mentions: 4 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-slate-600">{skill.mentions} mentions</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="Suggested Improvements"
            icon={<Zap className="h-5 w-5 text-yellow-600" />}
          >
            <div className="space-y-4">
              {[
                "Add more specific technical achievements",
                "Include quantifiable results for projects",
                "Strengthen leadership examples",
                "Add relevant certifications"
              ].map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p>{suggestion}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="Market Alignment"
            icon={<Target className="h-5 w-5 text-green-600" />}
          >
            <div className="space-y-4">
              <Card className="p-4 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Industry Match</h4>
                    <p className="text-sm text-slate-600">Software Development</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">85%</div>
                    <span className="text-green-600 text-sm">High Match</span>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4">
                <h4 className="font-medium">Top Trending Skills to Add</h4>
                {[
                  { skill: "Cloud Architecture", trend: "+45%" },
                  { skill: "DevOps", trend: "+38%" },
                  { skill: "Machine Learning", trend: "+30%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white rounded-md border">
                    <span>{item.skill}</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {item.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ExpandableSection>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysis;

