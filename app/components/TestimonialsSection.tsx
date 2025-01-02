import React from 'react'

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="ResumeAnalyzer helped me land my dream job! The feedback was spot-on."
            author="Sarah M."
          />
          <TestimonialCard
            quote="I improved my resume score by 25% and got more interview calls."
            author="John D."
          />
          <TestimonialCard
            quote="The ATS compatibility check is a game-changer for job seekers."
            author="Emily R."
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <div className="text-blue-600 font-bold">- {author}</div>
    </div>
  )
}

export default TestimonialsSection

