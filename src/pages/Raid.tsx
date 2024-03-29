import React, { useEffect } from 'react'
import Step from '../components/Step'
import '../styles/pages/raid.scss'

interface RaidProps {
  changeActive: (active: number) => void
}

export default function Raid({ changeActive }: RaidProps) {

  useEffect(() => {
    changeActive(3)
  }, [changeActive])

  return (
    <div id='raid'>
      <div className="header">
        <div className="title-container">
          <h1>informations</h1>
          <h2>Le raid et ses étapes</h2>
        </div>
      </div>
      <div className="content">
        <div>
          <h1>étapes clés du 4L Trophy</h1>
          <p>Voici la liste détaillée de toutes les étapes clés par lesquels nous passerons lors de notre aventure au 4L Trophy :</p>

          <div className="steps-container">
            <Step title="Village départ" date="Mercredi 15 et jeudi 16 février" />
            <Step title="Départ officiel" date="Jeudi 16 février à 12h30" />
            <Step title="Liaison Algéciras" date="Vendredi 17 février" />
            <Step title="Traversée du détroit de Gibraltar" date="Samedi 18 février" />
            <Step title="Bivouac à Rabat" date="Semdi 18 au dimanche 19 février" />
            <Step title="Bivouac à Boulaajoul" date="Dimanche 19 février" />
            <Step title="Bivouac à Merzouga" date="Lundi 20 février" />
            <Step title="Boucle 1 désert" date="Mardi 21 février" />
            <Step title="Boucle 2 désert" date="Mercredi 22 février" />
            <Step title="Etape marathon" date="Jeudi 23 au vendredi 24 février" />
            <Step title="Arivée à Marrakech" date="Vendredi 24 février" />
            <Step title="Soirée de clôture" date="Samedi 25 février" />
            <Step title="Laison Tanger" date="Dimanche 26 février" />
            <Step title="Traversée du détroit de Gibraltar" date="Dimanche 26 février" />
            <Step title="Fin de l'aventure" date="Mardi 28 février" />
          </div>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h1>Durée et distance totale du raid</h1>
          <p>Le raid dure au total 10 jours, du 16 février (départ de Biarritz) au 26 février (retours en Espagne à Algeciras). Nous serons de retour sur Aix-en-Provence, le mardi 28 février.</p>
          <p>Lors de ces 10 jours nous allons parcourir environ 6000 Km !</p>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h1>ou suivre l’avancée du raid ?</h1>
          <p>Vous pouvez suivre l’avancée du raid en direct sur ce site internet, mais aussi sur nos réseaux sociaux (nous essaierons de poster le plus possible !).</p>
          <p>Autrement, la chaine Youtube officielle du 4L Trophy diffuse chaque jour à partir du deuxième jour de l’aventure des JT qui récapitulent la journée de la veille dan un format court très dynamique !</p>
          <p>La chaine Youtube du 4L Trophy : <a href="https://www.youtube.com/@4LTrophyOfficiel" target={'_blank'} rel="noreferrer">https://www.youtube.com/@4LTrophyOfficiel</a></p>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h1>Durée et distance totale du raid</h1>
          <p>Le raid dure au total 10 jours, du 16 février (départ de Biarritz) au 26 février (retours en Espagne à Algeciras). Nous serons de retour sur Aix-en-Provence, le mardi 28 février.</p>
          <p>Lors de ces 10 jours nous allons parcourir environ 6000 Km !</p>
        </div>
      </div>
    </div>
  )
}
