import React from 'react'
import '../styles/components/step.scss'

interface StepProps {
  title: string
  date: string
}

export default function Step({ title, date }: StepProps) {
  return (
    <div className="step">
      <p className="step-title">{title}</p>
      <p className="step-date">{date}</p>
    </div>
  )
}
