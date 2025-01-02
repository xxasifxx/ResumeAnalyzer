import React from 'react'
import { Zap, User, CheckCircle } from 'lucide-react'

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StepCard
            icon={<Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="Upload Your Resume"
            description="Easily upload your resume in PDF or Word format."
          />
          <StepCard
            icon={<User className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="Get Instant Feedback"
            description="Receive a detailed analysis in seconds."
          />
          <StepCard
            icon={<CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="Optimize & Apply"
            description="Make improvements and land your dream job."
          />
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default HowItWorksSection

