import React, { useState, useEffect, useId } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AnalysisResultsModalProps {
  isOpen: boolean
  onClose: () => void
}

const AnalysisResultsModal: React.FC<AnalysisResultsModalProps> = ({ isOpen, onClose }) => {
  const [results, setResults] = useState<string | null>(null)
  const descriptionId = useId()

  useEffect(() => {
    if (isOpen) {
      // Simulating analysis delay
      const timer = setTimeout(() => {
        setResults('Your resume looks great! Here are some suggestions:\n- Add more quantifiable achievements\n- Include relevant keywords for your industry\n- Ensure consistent formatting throughout')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent aria-describedby={descriptionId}>
        <DialogHeader>
          <DialogTitle>Analysis Results</DialogTitle>
          <DialogDescription id={descriptionId}>
            Here are the results of your resume analysis.
          </DialogDescription>
        </DialogHeader>
        {results ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <pre className="whitespace-pre-wrap">{results}</pre>
          </div>
        ) : (
          <div className="text-center">Analyzing your resume...</div>
        )}
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AnalysisResultsModal

