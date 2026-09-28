import React from 'react'

interface IconButtonProps {
  icon: React.ReactNode
  label: string
  className?: string
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, className }) => {
  return (
    <button className={className}>
      <svg className="icon-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        {icon}
      </svg>
      {label}
    </button>
  )
}

export default IconButton