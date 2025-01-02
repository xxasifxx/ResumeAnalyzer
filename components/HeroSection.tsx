import React from 'react'
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  openModal: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Land Your Dream Job with Confidence</h2>
        <p className="text-lg mb-6">
          Optimize your resume for Applicant Tracking Systems (ATS) and stand out to recruiters.
        </p>
        <Button onClick={openModal} variant="secondary" size="lg">
          Upload Your Resume
        </Button>
      </div>
    </section>
  )
}

export default HeroSection

