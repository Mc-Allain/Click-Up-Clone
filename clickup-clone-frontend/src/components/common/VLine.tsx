import React from 'react'

interface HLineProps {
  className?: string
}

const VLine: React.FC<HLineProps> = ({className}) => {
  return (
    <div className={`vline ${className || ''}`} />
  )
}

export default VLine