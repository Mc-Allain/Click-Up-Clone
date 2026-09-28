import React from 'react'
import DashboardCard from '../DashboardCard'
import Item from './TeamActivityItem'
import HLine from '../../common/HLine'

const teamActivityData = [
  { user: "Alice", action: "commented on", project: "Website Redesign", time: "2 hours ago" },
  { user: "Mark", action: "completed", project: "Sprint Planning", time: "1 day ago" },
]

const TeamActivity: React.FC = () => {
  return (
    <DashboardCard title="Team Activity">
      <ul className="text-sm text-gray-500 space-y-1">
        {teamActivityData.map((item, index: number) => (
          <React.Fragment key={index}>
            {index > 0 ? <HLine /> : null}
            <Item content={item} />
          </React.Fragment>
        ))}
      </ul>
    </DashboardCard>
  )
}

export default TeamActivity