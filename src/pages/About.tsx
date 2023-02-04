import { useEffect } from 'react'

interface AboutProps {
  changeActive: (active: number) => void
}

export default function About({ changeActive }: AboutProps) {

  useEffect(() => {
    changeActive(1)
  }, [])

  return (
    <div>About</div>
  )
}
