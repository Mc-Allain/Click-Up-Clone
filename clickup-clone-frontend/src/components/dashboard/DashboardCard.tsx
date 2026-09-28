import React from 'react'
import HLine from '../common/HLine'
import classNames from 'classnames'
import Badge from '../common/Badge'

interface DashboardCardProps {
  title: string
  badgeValue?: number
  contentClassName?: string
  children: React.ReactNode
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, badgeValue = 0, contentClassName, children }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-4">
      <h3 className={classNames("flex items-center gap-2 text-lg font-bold text-gray-700", badgeValue > 0 && "justify-between")}>
        {title}
        {badgeValue > 0 && (
          <Badge value={badgeValue} />
        )}
      </h3>
      <HLine className="my-2" />
      <div className={contentClassName}>
        {children}
      </div>
    </div>
  )
}

export default DashboardCard