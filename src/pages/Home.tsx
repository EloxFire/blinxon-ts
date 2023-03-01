import { useEffect, useState } from 'react'
import * as Icon from 'react-icons/fa'
import { colors, news, tripSteps } from '../scripts/utils'
import StepCard from '../components/StepCard'
import { InstagramEmbed } from 'react-social-media-embed'
import "react-activity/dist/Sentry.css";
import '../styles/pages/home.scss'


interface HomeProps {
  changeActive: (active: number) => void
}

export default function Home({ changeActive }: HomeProps) {

  const [steps, setSteps] = useState<{ type: 'activity' | 'travel' | 'info' | 'card', title: string, date: Date, endDate: Date, place: string, endPlace?: string, distance?: number, totalDistance?: number }[]>([])

  useEffect(() => {
    changeActive(0)
    const tempSteps = tripSteps
    const accurateSteps = tempSteps.filter(step => step.endDate >= new Date())
    setSteps(accurateSteps)
    console.log(accurateSteps);

  }, [changeActive])

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
          <div className="container-part">
            <h1><Icon.FaMapPin style={{ color: colors.green, verticalAlign: 'middle' }} /> Etape en cours</h1>
            <div>
              {
                steps.length > 0 ?
                  <StepCard
                    type={steps[0].type}
                    title={steps[0].title}
                    place={steps[0]?.place}
                    date={steps[0].date}
                    endDate={steps[0].endDate}
                    distance={steps[0].distance}
                    totalDistance={steps[0].totalDistance}
                    endPlace={steps[0].endPlace}
                  />
                  :
                  <p>Chargement...</p>
              }
            </div>
          </div>
          <div className="container-part">
            <h1><Icon.FaMapSigns style={{ color: colors.green, verticalAlign: 'middle' }} /> Prochaine étape</h1>
            <div>
              {
                steps.length > 1 ?
                  <StepCard
                    type={steps[1].type}
                    title={steps[1].title}
                    place={steps[1].place}
                    date={steps[1].date}
                    endDate={steps[1].endDate}
                    distance={steps[1].distance}
                    totalDistance={steps[1].totalDistance}
                    endPlace={steps[1].endPlace}
                  />
                  :
                  <p>Chargement...</p>
              }
            </div>
          </div>
        </div>



        {/* <div className="cards-container"> */}
        {/* <StepCard
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
          /> */}

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
        {/* </div> */}
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
    </div >
  )
}
