import React from 'react'
import { Button } from "@/components/ui/button"

interface HeaderProps {
  openModal: () => void
  isLoggedIn: boolean
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ openModal, isLoggedIn, onLogout }) => {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">ResumeAnalyzer</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
        </nav>
        {isLoggedIn ? (
          <Button onClick={onLogout}>Logout</Button>
        ) : (
          <Button onClick={openModal}>Get Started</Button>
        )}
      </div>
    </header>
  )
}

export default Header

