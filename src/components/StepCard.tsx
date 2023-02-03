import React, { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/components/stepCard.scss'

interface StepCardProps {
  stepIcon: ReactNode
  title: string
  startStep: { title: string, date: string }
  endStep: { title: string, date: string }
  stepDistance: number
  totalDistance: number
}

export default function StepCard({ stepIcon, title, startStep, endStep, stepDistance, totalDistance }: StepCardProps) {
  return (
    <div className="step-card">
      <p className="card-title">{stepIcon} {title}</p>
      <div className="timeline">
        <div className="start">
          <p className="title">{startStep.title}</p>
          <p className="date">{startStep.date}</p>
        </div>
        <p><FaArrowRight style={{ fontSize: '2rem' }} /></p>
        <div className="end">
          <p className="title">{endStep.title}</p>
          <p className="date">{endStep.date}</p>
        </div>
      </div>
      <div className="stats">
        <div className="step-distance">
          <p className="title">Distance de l'étape</p>
          <p className="value">{stepDistance} km</p>
        </div>
        <div className="total-distance">
          <p className="title">Distance totale</p>
          <p className="value">{totalDistance} km</p>
        </div>
      </div>
    </div>
  )
}
