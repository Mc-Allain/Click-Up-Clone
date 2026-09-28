import React from 'react'
import DashboardCountProgressBar from '../DashboardCountProgressBar'
import DashboardCard from '../DashboardCard'
import VLine from '../../common/VLine'

const ProductivityStats: React.FC = () => {
  return (
    <DashboardCard title="Productivity Stats" contentClassName="flex justify-between">
      <DashboardCountProgressBar className="grow" count={5} max={17} label="Completed Today" type='completed_today' />
      <VLine className="mx-4" />
      <DashboardCountProgressBar className="grow" count={12} max={40} label="Hours Tracked" type='hours_tracked' />
    </DashboardCard>
  )
}

export default ProductivityStats