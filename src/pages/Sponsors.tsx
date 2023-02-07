import React, { useEffect } from 'react'
import '../styles/pages/sponsors.scss'
import montopoto from '../img/partners/montopoto.svg'
import vda from '../img/partners/vda.svg'
import smf from '../img/partners/smf.svg'
import cultura from '../img/partners/cultura.svg'
import ynov from '../img/partners/ynov.svg'
import apct from '../img/partners/apct.svg'
import lucauto from '../img/partners/lucauto.svg'
import troin from '../img/partners/troin.svg'
import ferre from '../img/partners/ferre.svg'
import mi80 from '../img/partners/mi80.svg'

interface SponsorsProps {
  changeActive: (active: number) => void
}

export default function Sponsors({ changeActive }: SponsorsProps) {

  useEffect(() => {
    changeActive(2)
  }, [changeActive])

  return (
    <div id='sponsors'>
      <div className="header">
        <div className="title-container">
          <h1>Nos sponsors</h1>
          <h2>Merci à eux !</h2>
        </div>
      </div>
      <div className="content">
        <h1>Un immense merci à tous nos sponsors</h1>

        <div className="sponsors-container">
          <div className="row">
            <img src={montopoto} alt="Logo de Montopoto" />
            <img src={vda} alt="Logo du Village des Automates" />
            <img src={smf} alt="Logo de Société Morbelli Frères" />
          </div>
          <div className="row">
            <img src={cultura} alt="Logo de Cultura" />
            <img src={ynov} alt="Logo de Aix Ynov Campus" />
            <img src={apct} alt="Logo de APCT Contrôle Technique" />
          </div>
        </div>

        <p>Si nous pouvons prendre le départ de cette 26 ème édition du 4L Trophy, c’est en grande partie grâce à nos sponsors. Cette aventure est très demandeuse en ressources et c’est pour cela que nous avons besoin de sponsors !</p>
        <div style={{ marginTop: '10vh' }}>
          <h2>Montopoto</h2>
          <p>Montopoto, un parc de loisirs indoor vous accueille tous les week-ends de 10h à 19h ainsi que pendant toute la durée des vacances scolaires. Vous y découvrirez des structures de jeu avec des toboggans, des pistes de voitures électriques ou encore un mini parcours aventure le tout dans un univers immersif centré sur le thème de la jungle où petits et grands se prendront pour de grands explorateurs ou de courageux aventuriers !</p>
          <a href="https://montopoto.com/" target={'_blank'} rel='noreferrer'>https://montopoto.com/</a>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h2>Village des automates</h2>
          <p>Le Village des Automates est le lieu idéal pour passer un dimanche en famille ! Ce grand espace boisé de 8 hectares vous accueille dès le 11 février de 11h à 17h30 pour toute la durée des vacances scolaires ! Et l’aventure continue ensuite tous les week-ends ! Vous pourrez profiter des différentes attractions comme les voitures électriques, les bateaux ou bien observer la vie des animaux de la ferme. Mais l’intérêt principal du parc réside dans ses magnifiques automates qui ont fait sa renommée ! Venez ainsi découvrir l’histoire de Pinochio au coeur d’une immense baleine ou encore écouter l’histoire des pandas !</p>
          <a href="https://www.villagedesautomates.com/" target={'_blank'} rel='noreferrer'>https://www.villagedesautomates.com/</a>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h2>Société morbelli frères</h2>
          <p>Localisée à Saint-Cannat dans les Bouches-du-Rhône depuis 1948, cette société familiale dirigée par Olivier Morbelli est spécialisée dans la plomberie, le chauffage et la climatisation.</p>
          <a href="https://www.morbelli-chauffage-plomberie.fr/" target={'_blank'} rel='noreferrer'>https://www.morbelli-chauffage-plomberie.fr/</a>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h2>Cultura</h2>
          <p>Situé à Plan de Campagne dans la zone d'activités de Cabriès, Cultura est ouvert 7 jours sur 7 de 9h à 20h pour que vos idées puissent devenir réalité !Avec ses multiples rayons sur les arts créatifs, la littérature, les affaires scolaires, livres, CD, DVD, jeux vidéo et jeux de société, vous trouverez forcément votre bonheur chez Cultura Cabriès !</p>
          <a href="https://www.cultura.com" target={'_blank'} rel='noreferrer'>https://www.cultura.com</a>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h2>Aix Ynov Campus</h2>
          <p>Spécialiste des formations aux métiers du numérique, Ynov Campus vous propose 7 bachelors et 17 Mastères à Aix-en-Provence. Informatique, Création & Digital Design, Marketing, Communication, Audiovisuel, 3D, Animation, Jeux vidéo, Web Management, Architecture d’intérieur, trouvez la formation qui vous conduira à la carrière de vos rêves.</p>
          <a href="https://www.ynov-aix.com/" target={'_blank'} rel='noreferrer'>https://www.ynov-aix.com/</a>
        </div>
        <div style={{ marginTop: '10vh' }}>
          <h2>Apct contrôle technique</h2>
          <p>Spécialiste du contrôle technique des véhicules légers, le gérant @Pascal Artaud est un professionel de l’automobile depuis près de 20 ans. Les campings cars, les 4x4 mais aussi les voitures hybrides et électriques sont les bienvenues dans son centre de réparation ! Passionné par son métier, M. Artaud tient à prendre le temps d’échanger avec sa clientèle, ce qui vous assure un service et un suivi de grande qualité.</p>
          <a href="https://www.apct-controle-technique-pelissanne.fr/" target={'_blank'} rel='noreferrer'>https://www.apct-controle-technique-pelissanne.fr/</a>
        </div>

        <div style={{ marginTop: '15vh' }}>
          <h1>Merci aussi à nos partenaires :</h1>
          <div className="sponsors-container">
            <div className="row">
              <img src={lucauto} alt="Logo du Garage Renault LucAuto" />
              <img src={troin} alt="Logo du Garage Renault Auto Relais des Alpes" />
              <img src={ferre} alt="Logo de Christopher Ferré" />
              <img src={mi80} alt="Logo de la radio Made in 80'" />
            </div>
          </div>

          <div style={{ marginTop: '10vh' }}>
            <h2>Garage renault venelles - Lucauto</h2>
            <p>La SAS Lucauto est une entreprise familiale créée par Luc Fanciullo dans les années 2000 et Agent Renault depuis 2004 sur la commune de Venelles.
              Renault Venelles vous accompagne dans toutes les étapes de la vie de votre véhicule, de l'achat en passant par l'entretien mécanique et esthétique, la carrosserie et le reconditionnement jusqu'à la vente de la voiture. Nos prestations sont complètes, l’entretien de véhicules toutes marques, les réparations mécaniques, la carrosserie et les bris de glace, le nettoyage intérieur et extérieur, le polissage et la protection carrosserie, le débosselage sans peinture et pour finir l'achat/vente de véhicules. Chez Lucauto Renault Venelles nous entretenons et reconditionnons votre voiture mieux que n'importe où !</p>
            <a href="https://www.lucauto.fr" target={'_blank'} rel='noreferrer'>https://www.lucauto.fr</a>
          </div>
          <div style={{ marginTop: '10vh' }}>
            <h2>Garage renault venelles - Auto relais des alpes</h2>
            <p>Le garage Renault Dacia Auto Relais Des Alpes situé à Peyrolles-en-Provence vous propose la réparation de toutes marques de voitures. Ce garage fait partie depuis plusieurs générations du paysage local. C'est avant tout une entreprise familiale fortement ancrée dans la vie du secteur provençal. Votre garage Auto Relais Des Alpes interviendra avec bienveillance, vous donnera des conseils avisés de professionnels expérimentés et vous rendra votre véhicule prêt pour reprendre la route sans encombre.</p>
            <a href="https://www.auto-relais-alpes-peyrolles-provence.fr/" target={'_blank'} rel='noreferrer'>https://www.auto-relais-alpes-peyrolles-provence.fr/</a>
          </div>
          <div style={{ marginTop: '10vh' }}>
            <h2>Christopher ferré - Équipe audiovisuelle</h2>
            <p>Merci à Christopher Ferré, Pablo Zucco, Alexandre Gros, Cantarelli Julien et Mérisio Loane pour la réqlisation de tous les éléments vidéos de Blinxon</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="https://www.malt.fr/profile/christopherferre" target={'_blank'} rel='noreferrer'>https://www.malt.fr/profile/christopherferre</a>
              <a style={{ marginTop: '2vh' }} href="https://pablozucco.fr/" target={'_blank'} rel='noreferrer'>https://pablozucco.fr/</a>
              <a style={{ marginTop: '2vh' }} href="https://alexandregrs13.wixsite.com/website-1" target={'_blank'} rel='noreferrer'>https://alexandregrs13.wixsite.com/website-1</a>
            </div>
          </div>
          <div style={{ marginTop: '10vh' }}>
            <h2>Radio Made in 80</h2>
            <p>Made in 80, la radio officielle des années 80. Une sélection rigoureuse des meilleures musiques des années 80. Écoutez la radio 80 sans pub.</p>
            <a href="https://madein80.fr/" target={'_blank'} rel='noreferrer'>https://madein80.fr/</a>
          </div>
        </div>

      </div>
    </div>
  )
}
