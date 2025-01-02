import React from 'react'
import { FileText, TrendingUp, ShieldCheck } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="ATS Compatibility Check"
            description="Ensure your resume passes ATS filters with ease."
          />
          <FeatureCard
            icon={<TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="Keyword Optimization"
            description="Boost your chances with job-specific keywords."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
            title="Detailed Feedback"
            description="Get actionable insights to improve your resume."
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white shadow rounded-md">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeaturesSection

