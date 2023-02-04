import moment from 'moment'
import { type } from 'os'
import { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/components/stepCard.scss'

interface StepCardProps {
  type: 'info' | 'activity' | 'travel'
  title: string
  place: string
  endPlace?: string
  date: Date
  endDate: Date
  distance?: number
  totalDistance?: number
}

export default function StepCard({ type, title, place, endPlace, date, endDate, distance, totalDistance }: StepCardProps) {
  return (
    <>
      {
        type === 'activity' &&
        <div className="card-activity">
          <div>
            <p className="card-title">{title}</p>
            <p style={{ fontSize: '1.2rem' }}>Lieu : {place}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: '5vh' }}>
            <div>
              <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>Du</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>{moment(date).format("DD")}</p>
                <p style={{ fontSize: '1.2rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase' }}>{moment(date).format("MMMM")}</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>au</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>{moment(endDate).format("DD")}</p>
                <p style={{ fontSize: '1.2rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase' }}>{moment(endDate).format("MMMM")}</p>
              </div>
            </div>
          </div>
        </div>
      }
      {
        type === 'info' &&
        <div className="card-info">
          <p className="title">{title}</p>
          <p style={{ fontSize: '1.2rem' }}>Lieu : {place}</p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>{moment(endDate).format("DD")}</p>
              <p style={{ fontSize: '1.2rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase' }}>{moment(endDate).format("MMMM")}</p>
            </div>
            <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold', marginLeft: '30px' }}>à</p>
            <p style={{ fontSize: '2.5rem', margin: 0, fontWeight: 'bold', marginLeft: '30px' }}>{moment(endDate).format("HH:mm").replace(':', 'h')}</p>
          </div>
        </div>
      }
      {
        type === 'travel' &&
        <div className="card-travel">
          <p className="card-title">{title}</p>
          <div className="timeline">
            <div className="start">
              <p className="title">{place}</p>
              <p className="date">{moment(date).format('DD MMMM')}</p>
            </div>
            <p><FaArrowRight style={{ fontSize: '2rem' }} /></p>
            <div className="end">
              <p className="title">{endPlace}</p>
              <p className="date">{moment(endDate).format('DD MMMM')}</p>
            </div>
          </div>
          <div className="stats">
            {/* <div className="stat-row">
              <div className="step-start-place">
                <p className="title">Départ étape</p>
                <p className="value">{startPlace}</p>
              </div>
              <div className="step-end-place">
                <p className="title">Arrivée étape</p>
                <p className="value">{endPlace}</p>
              </div>

            </div> */}
            <div className="stat-row">
              <div className="step-distance">
                <p className="title">Distance de l'étape</p>
                <p className="value">{distance} km</p>
              </div>
              <div className="total-distance">
                <p className="title">Distance totale</p>
                <p className="value">{totalDistance} km</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}
