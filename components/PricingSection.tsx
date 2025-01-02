import React from 'react'
import { Button } from "@/components/ui/button"

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            description="Basic resume analysis"
            price="$0"
            buttonText="Get Started"
          />
          <PricingCard
            title="Pro"
            description="Advanced feedback & ATS optimization"
            price="$19/month"
            buttonText="Get Pro"
          />
          <PricingCard
            title="Enterprise"
            description="For teams and organizations"
            price="Custom Pricing"
            buttonText="Contact Us"
          />
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  buttonText: string
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, buttonText }) => {
  return (
    <div className="p-6 bg-white shadow rounded-md text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <Button>{buttonText}</Button>
    </div>
  )
}

export default PricingSection

