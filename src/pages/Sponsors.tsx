import React from 'react'

interface SponsorsProps {
  changeActive: (active: number) => void
}

export default function Sponsors({ changeActive }: SponsorsProps) {
  return (
    <div id='sponsors'>
      <div className="header">
        <div className="title-container">
          <h1>Nos sponsors</h1>
          <h2>Merci à eux !</h2>
        </div>
      </div>
      <div className="content">
        <h1>étapes clés du 4L Trophy</h1>
        <p>Voici la liste détaillée de toutes les étapes clés par lesquels nous passerons lors de notre aventure au 4L Trophy :</p>
      </div>
    </div>
  )
}
