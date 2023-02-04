import { useEffect, useState } from 'react'
import * as Icon from 'react-icons/fa'
import { colors, tripSteps } from '../scripts/utils'
import StepCard from '../components/StepCard'
import '../styles/pages/home.scss'
import moment from 'moment'
import { Sentry } from 'react-activity'
import "react-activity/dist/Sentry.css";

export default function Home() {

  const [steps, setSteps] = useState<{ title: string, date: Date, endDate: Date, startPlace: string, endPlace: string, stepDistance: number, totalDistance: number }[]>([])

  useEffect(() => {
    const tempSteps = tripSteps
    const accurateSteps = tempSteps.filter(step => step.date >= new Date() || step.endDate >= new Date())
    // const accurateSteps = tempSteps
    setSteps(accurateSteps)

  }, [])

  return (
    <div id="home">
      <div className="header">
        <div className="title-container">
          <h1>Blinxon</h1>
          <h2>4L trophy 2023</h2>
        </div>
      </div>
      <div className="direct">
        {/* <h1><Icon.FaCircle className="direct-dot-animated" style={{ color: colors.red, verticalAlign: "middle" }} /> Notre aventure en direct</h1> */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
          <Sentry animating color={colors.red} size={25} speed={.3} style={{ transform: 'translateX(-25%)' }} />
          <div style={{ width: '25px', height: '25px', backgroundColor: colors.red, position: "absolute", borderRadius: '50%' }}></div>
          <h1>Notre aventure en direct</h1>
        </div>
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

          <a href='/' className="step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25vh', textDecoration: 'none', color: colors.black }}>
            <p className="card-title">Voir le détail</p>
            <p><Icon.FaSearchPlus style={{ fontSize: '2rem' }} /></p>
          </a>
        </div>
      </div>
      <div className="content">
        <h1><Icon.FaRegNewspaper style={{ color: colors.green, verticalAlign: "middle" }} /> Nos dernières actualités</h1>
      </div>
    </div>
  )
}
