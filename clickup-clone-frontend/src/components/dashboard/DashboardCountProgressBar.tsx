import React from 'react'
import ProgressBar from '../common/ProgressBar'

interface DashboardCountProgressBarProps {
  count: number
  max: number
  label: string
  type: 'pending' | 'completed' | 'completed_today' | 'hours_tracked',
  className?: string
}

const DashboardCountProgressBar: React.FC<DashboardCountProgressBarProps> = ({ count, max, label, type, className }) => {
  return (
    <div className={className}>
      <span className="font-medium text-2xl">{count}</span> {label}
      <ProgressBar className="mt-2" value={count} max={max} type={type} />
    </div>
  )
}

export default DashboardCountProgressBar