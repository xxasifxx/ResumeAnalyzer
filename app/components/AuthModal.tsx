import React, { useState, useId } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const descriptionId = useId()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual authentication logic
    onLogin()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent aria-describedby={descriptionId}>
        <DialogHeader>
          <DialogTitle>Login or Sign Up</DialogTitle>
          <DialogDescription id={descriptionId}>
            Enter your email and password to login or create a new account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login / Sign Up</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal

