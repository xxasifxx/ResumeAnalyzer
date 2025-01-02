'use client'

import React, { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import HowItWorksSection from './HowItWorksSection'
import PricingSection from './PricingSection'
import TestimonialsSection from './TestimonialsSection'
import CallToAction from './CallToAction'
import Footer from './Footer'
import QuickAnalysisDialog from './QuickAnalysisDialog'
import DetailedAnalysis from './DetailedAnalysis'

const LandingPage: React.FC = () => {
  const [isQuickAnalysisOpen, setIsQuickAnalysisOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false)

  const openQuickAnalysis = () => {
    setIsQuickAnalysisOpen(true)
  }

  const closeQuickAnalysis = () => {
    setIsQuickAnalysisOpen(false)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    setIsQuickAnalysisOpen(false)
    setShowDetailedAnalysis(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowDetailedAnalysis(false)
  }

  if (showDetailedAnalysis) {
    return <DetailedAnalysis onLogout={handleLogout} />
  }

  return (
    <div className="bg-gray-50">
      <Header openModal={openQuickAnalysis} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <HeroSection openModal={openQuickAnalysis} />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CallToAction openModal={openQuickAnalysis} />
      <Footer />
      <QuickAnalysisDialog 
        isOpen={isQuickAnalysisOpen} 
        onClose={closeQuickAnalysis}
        onAnalysisComplete={handleLogin}
      />
    </div>
  )
}

export default LandingPage

