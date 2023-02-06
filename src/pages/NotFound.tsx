import { useEffect } from 'react'
import '../styles/pages/notFound.scss'

interface NotFoundProps {
  changeActive: (active: number) => void
}

export default function NotFound({ changeActive }: NotFoundProps) {

  useEffect(() => {
    document.title = "Page introuvable - Blinxon"
    document.getElementById('navbar')?.classList.add('navbar-active')
  }, [])

  useEffect(() => {
    changeActive(-1)
  }, [changeActive])

  return (
    <div id="notFound">
      <h1>404</h1>
      <h2>Page introuvable</h2>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
    </div>
  )
}
