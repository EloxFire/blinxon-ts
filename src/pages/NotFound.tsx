import '../styles/pages/notFound.scss'

export default function NotFound() {

  document.title = "Page introuvable - Blinxon"

  document.getElementById('navbar')?.classList.add('navbar-active')

  return (
    <div id="notFound">
      <h1>404</h1>
      <h2>Page introuvable</h2>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
    </div>
  )
}
