import React from 'react'
import classNames from 'classnames'

interface ProgressBarProps {
  value: number   // current progress
  max: number     // maximum value
  type?: 'pending' | 'completed' | 'completed_today' | 'hours_tracked' // optional type for styling
  className?: string // optional additional CSS classes
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, type, className }) => {
  // Prevent division by zero
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0

  return (
    <div className={className}>
      <div className={classNames("w-full rounded-full h-2 overflow-hidden", {
        "bg-[#E6E8EE]": !type || type === 'completed_today' || type === 'hours_tracked',
        "bg-[#FDE1C2]": type === 'pending',
        "bg-[#DCDBF2]": type === 'completed',
      })}>
        <div
          className={classNames("h-2 rounded-full transition-all duration-300", {
            "bg-[#475ACF]": !type,
            "bg-[#EF7048]": type === 'pending',
            "bg-[#8775DF]": type === 'completed',
            "bg-[#A2D2B0]": type === 'completed_today',
            "bg-[#AD9ED7]": type === 'hours_tracked',
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
