import React from 'react'

interface StatusCircleProps {
  color: string // hex or Tailwind-compatible color string
  label?: string // label for the status circle
  size?: number // optional size in px
}

const StatusCircle: React.FC<StatusCircleProps> = ({ color, label, size = 12 }) => {
  return (
    <div className="flex items-center gap-1">
      <span
        style={{
          display: 'inline-block',
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
        }}
      >
      </span>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </div>
  )
}

export default StatusCircle
