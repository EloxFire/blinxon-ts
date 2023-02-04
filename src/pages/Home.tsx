import { useEffect, useState } from 'react'
import * as Icon from 'react-icons/fa'
import { colors, news, tripSteps } from '../scripts/utils'
import StepCard from '../components/StepCard'
import '../styles/pages/home.scss'
import moment from 'moment'
// import { Sentry } from 'react-activity'
import "react-activity/dist/Sentry.css";
import { InstagramEmbed } from 'react-social-media-embed'

export default function Home() {

  const [steps, setSteps] = useState<{ title: string, date: Date, endDate: Date, startPlace: string, endPlace: string, stepDistance: number, totalDistance: number }[]>([])

  useEffect(() => {
    const tempSteps = tripSteps
    const accurateSteps = tempSteps.filter(step => step.date >= new Date() || step.endDate >= new Date())
    // const accurateSteps = tempSteps
    setSteps(accurateSteps)

  }, [])

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('news-posts-container')
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= 800
      } else {
        container.scrollLeft += 800
      }
    }
  }

  return (
    <div id="home">
      <div className="header">
        <div className="title-container">
          <h1>Blinxon</h1>
          <h2>4L trophy 2023</h2>
        </div>
      </div>
      <div className="direct">
        <h1><Icon.FaCircle className="direct-dot-animated" style={{ color: colors.red, verticalAlign: "middle" }} /> Notre aventure en direct</h1>
        <div className="cards-container">
          <StepCard
            stepIcon={<Icon.FaMapPin style={{ color: colors.green, verticalAlign: 'middle' }} />}
            title="étape en cours"
            startPlace={steps[0]?.startPlace}
            endPlace={steps[0]?.endPlace}
            startStep={{ title: steps[0]?.title, date: moment(steps[0]?.date).format("DD MMMM") }}
            endStep={{ title: steps[1]?.title, date: moment(steps[1]?.date).format("DD MMMM") }}
            stepDistance={steps[0]?.stepDistance}
            totalDistance={steps[0]?.totalDistance}
          />

          <StepCard
            stepIcon={<Icon.FaMapSigns style={{ color: colors.green, verticalAlign: 'middle' }} />}
            title="étape suivante"
            startPlace={steps[1]?.startPlace}
            endPlace={steps[1]?.endPlace}
            startStep={{ title: steps[1]?.title, date: moment(steps[1]?.date).format("DD MMMM") }}
            endStep={{ title: steps[2]?.title, date: moment(steps[2]?.date).format("DD MMMM") }}
            stepDistance={steps[1]?.stepDistance}
            totalDistance={steps[0]?.totalDistance}
          />

          {/* {
            steps.length !== 0 && steps.map((step, index) => {
              return (
                index > 1 &&
                <StepCard
                  stepIcon={<Icon.FaMapSigns style={{ color: colors.green, verticalAlign: 'middle' }} />}
                  title="étape suivante"
                  startPlace={step.startPlace}
                  endPlace={step.endPlace}
                  startStep={{ title: step.title, date: moment(step.date).format("DD MMMM") }}
                  endStep={{ title: steps[index + 1]?.title, date: moment(steps[index + 1]?.date).format("DD MMMM") }}
                  stepDistance={steps[1]?.stepDistance}
                  totalDistance={steps[0]?.totalDistance}
                />
              )
            })
          } */}

          {/* <a href='/' className="step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25vh', textDecoration: 'none', color: colors.black }}>
            <p className="card-title">Voir le détail</p>
            <p><Icon.FaSearchPlus style={{ fontSize: '2rem' }} /></p>
          </a> */}
        </div>
      </div>
      <div className="content">
        <h1><Icon.FaRegNewspaper style={{ color: colors.green, verticalAlign: "middle" }} /> Nos dernières actualités</h1>
        <div className="scroll-handle">
          <div onClick={() => handleManualScroll('left')} className="left-arrow-container">
            <Icon.FaChevronLeft style={{ fontSize: '2.5rem' }} />
          </div>
          <div onClick={() => handleManualScroll('right')} className='right-arrow-container'>
            <Icon.FaChevronRight style={{ fontSize: '2.5rem' }} />
          </div>
        </div>
        <div className="actus-container">

          <div id="news-posts-container" className='posts-container'>
            {
              news.map((actu, index) => {
                return (
                  <div style={{ width: '328px', marginRight: '3vw' }}>
                    <InstagramEmbed key={`insta-news-${index}`} url={actu} linkText="Voir sur Instagram" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}