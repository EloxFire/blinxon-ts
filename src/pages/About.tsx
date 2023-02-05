import { useEffect } from 'react'
import logo_blinxon from '../img/logo_blinxon_big.svg'
import logo_4ltrophy from '../img/logo_4ltrophy.svg'
import logo_edd from '../img/logo_edd.svg'
import '../styles/pages/about.scss'

interface AboutProps {
  changeActive: (active: number) => void
}

export default function About({ changeActive }: AboutProps) {

  useEffect(() => {
    changeActive(1)
  }, [changeActive])

  return (
    <div id='about'>
      <div className="header">
        <div className="title-container">
          <h1>à propos</h1>
          <h2>L'association</h2>
        </div>
      </div>
      <div className="content">
        <div className="about-us">
          <h1>QUI SOMMES-NOUS ?</h1>
          <p>Nous sommes Blinxon, équipage inscrit sous le numéro 250 au 4L Trophy 2023.</p>
          <p>Blinxon est une asso composée d’un pilote, d’une co-pilote et d’une magnifique 4L.</p>
          <p>Le pilote, Enzo Avagliano, 22 ans, est actuellement en seconde année de Master Expert en développement web et développeur web freelance. <br />La co-pilote, Olivia Masson, 23 ans, est quant à elle actuellement en année de césure et a pour projet d’entrer en Master MEEF en septembre pour devenir  professeure des écoles.<br />De son côté, la 4L, Yoyo, 34 ans, coule des jours paisibles à Saint-Cannat en attendant de vivre l’aventure et de reprendre du service !</p>
          <p>Nous sommes tous les trois inscrits au 4L Trophy depuis janvier 2020. Nous devions initialement partir en février 2021, mais à cause des évènnements du COVID-19, notre départ a du être repoussé par deux fois. Nous partons officiellement le 16 février 2023, pour enfin vivre cette aventure unique qui nous attend et dont nous rêvons depuis si longtemps !</p>
          <div className="image-container">
            <img src={logo_blinxon} alt="Logo de l'association Blinxon" />
          </div>
        </div>

        <div className="about-trophy">
          <h1>LE 4L TROPHY, QU'EST-CE QUE C'EST ?</h1>
          <p>Il s’agit du plus grand rallye-raid humanitaire d’Europe, fondé en 1997 par Jean-Jacques Rey, à destination des jeunes de 18 à 28 ans.</p>
          <p>Avec près de 6 000 km à parcourir, chaque équipage doit rallier Marrakech en Renault 4L depuis Biarritz en passant par l’Espagne et le désert marocain.</p>
          <p>Placé sous le signe de la solidarité, le 4L Trophy travaille main dans la main avec l’association Enfants du Désert en permettant aux Trophistes d’apporter concrètement leur aide aux bénévoles !</p>
          <p>Dans un esprit éco-responsable, ce rallye n’est pas une course de vitesse mais d’orientation. Sur le chemin, l’entraide est au rendez-vous pour surmonter les pannes et les ensablements, toujours dans la bonne humeur et l’esprit d’équipe !</p>
          <div className="image-container">
            <img src={logo_4ltrophy} alt="Logo du 4LTrophy" />
          </div>
        </div>

        <div className="about-edd">
          <h1>L'ASSOCIATION ENFANTS DU DÉSERT</h1>
          <p>L’association Les Enfants du Désert a été créée en 2005 par Laetitia et Emmanuel Chevallier dans le but de faciliter l’accès à l’éducation des enfants défavorisés du Maroc. Leur devise, « Apprendre à lire, écrire, compter : un droit pour tous ! ».</p>
          <p>Devant les difficultés à scolariser des enfants dont les besoins sanitaires et sociaux sont défaillants, l’association a étendu son activité à un ensemble d’actions humanitaires pour améliorer globalement le quotidien de ces enfants.</p>
          <p>C’est ici qu’intervient l’action des Trophistes !<br />Chaque année de nombreux dons, tels que des cartables complets, des affaires de sports ou encore du matériel paramédical sont amenés par les trophistes au bivouac de Merzouga, dans le grand sud marocain, où des bénévoles les récoltent et les redistribuent aux enfants des écoles du désert.</p>
          <p>De plus, les trophistes ont la possibilité de faire des dons financiers à l’association. Ces différents apports ont permis, depuis 2012, la construction de 22 salles de classe ainsi que de 2 blocs sanitaires.</p>
          <div className="image-container">
            <img src={logo_edd} alt="Logo de l'association Enfants du désert" />
          </div>
        </div>
      </div>
    </div>
  )
}
