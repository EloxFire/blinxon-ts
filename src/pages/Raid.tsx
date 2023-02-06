import React, { useEffect } from 'react'

interface RaidProps {
  changeActive: (active: number) => void
}

export default function Raid({ changeActive }: RaidProps) {

  useEffect(() => {
    changeActive(3)
  }, [changeActive])

  return (
    <div>Raid</div>
  )
}
