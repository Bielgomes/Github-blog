import { ReactNode } from 'react'
import { Link } from './styles'

interface AnchorProps {
  label: string
  travelTo: string
  icon: ReactNode
  iconPosition?: 'left' | 'right'
}

export function Anchor({
  label,
  travelTo,
  icon,
  iconPosition = 'left',
}: AnchorProps) {
  return (
    <Link href={travelTo} iconPosition={iconPosition}>
      {label.toUpperCase()}
      <span>{icon}</span>
    </Link>
  )
}
