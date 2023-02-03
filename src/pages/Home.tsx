import '../styles/pages/home.scss'
import * as Icon from 'react-icons/fa'
import { colors } from '../scripts/utils'
import StepCard from '../components/StepCard'

export default function Home() {
  return (
    <div id="home">
      <div className="header">
        <div className="title-container">
          <h1>Blinxon</h1>
          <h2>4L trophy 2023</h2>
        </div>
      </div>
      <div className="content">
        <h1><Icon.FaCircle style={{ color: colors.red, verticalAlign: "middle" }} /> Notre aventure en direct</h1>
        <div className="cards-container">
          <StepCard
            stepIcon={<Icon.FaMapPin style={{ color: colors.green, verticalAlign: 'middle' }} />}
            title="Etape 1"
            startStep={{ title: "Bordeaux", date: "14 février" }}
            endStep={{ title: "Bordeaux", date: "14 février" }}
            stepDistance={0}
            totalDistance={0}
          />

          <StepCard
            stepIcon={<Icon.FaMapSigns style={{ color: colors.green, verticalAlign: 'middle' }} />}
            title="Etape 2"
            startStep={{ title: "Bordeaux", date: "14 février" }}
            endStep={{ title: "Bordeaux", date: "14 février" }}
            stepDistance={0}
            totalDistance={0}
          />
        </div>
      </div>
    </div>
  )
}
