import React from 'react'
import DashboardCountProgressBar from '../DashboardCountProgressBar'
import DashboardCard from '../DashboardCard'
import VLine from '../../common/VLine'

const TodaysTasks: React.FC = () => {
  return (

    <DashboardCard title="Today's Tasks" badgeValue={17} contentClassName="flex justify-between">
      <DashboardCountProgressBar className="grow" count={12} max={17} label="Pending" type='pending' />
      <VLine className="mx-4" />
      <DashboardCountProgressBar className="grow" count={5} max={17} label="Completed" type='completed' />
    </DashboardCard>
  )
}

export default TodaysTasks