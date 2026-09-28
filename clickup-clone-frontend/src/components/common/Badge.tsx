import React from 'react'

interface BadgeProps {
  value: number | string
  size?: 'small' | 'medium' | 'large'
}

const Badge: React.FC<BadgeProps> = ({ value, size = 'medium' }) => {
  const sizeClasses = {
    small: 'px-1.5 py-0.5 text-[10px]',
    medium: 'px-2 py-0.5 text-xs',
    large: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={`inline-flex items-center justify-center font-semibold rounded-full text-white bg-(--brand-primary) ${sizeClasses[size]}`}
    >
      {value}
    </span>
  )
}

export default Badge
