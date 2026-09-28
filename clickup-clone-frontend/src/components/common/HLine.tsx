import React from 'react'

interface HLineProps {
  className?: string
}

const HLine: React.FC<HLineProps> = ({className}) => {
  return (
    <hr className={className} />
  )
}

export default HLine