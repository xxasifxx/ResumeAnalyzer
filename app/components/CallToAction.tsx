import React from 'react'
import { Button } from "@/components/ui/button"

interface CallToActionProps {
  openModal: () => void
}

const CallToAction: React.FC<CallToActionProps> = ({ openModal }) => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Upload your resume and get detailed feedback in seconds.
        </p>
        <Button onClick={openModal} variant="secondary" size="lg">
          Upload Resume
        </Button>
      </div>
    </section>
  )
}

export default CallToAction

