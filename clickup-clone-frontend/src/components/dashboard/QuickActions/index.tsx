import React from 'react'
import IconButton from '../../common/IconButton'
import { PlusIcon, FolderPlusIcon, UserPlusIcon, ChartBarIcon } from '@heroicons/react/24/solid'

const buttonIcons = [
  <PlusIcon />,
  <FolderPlusIcon />,
  <UserPlusIcon />,
  <ChartBarIcon />,
]

const QuickActions: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-700 mb-3">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        <IconButton icon={buttonIcons[0]} label="New Task" className="btn btn-task" />
        <IconButton icon={buttonIcons[1]} label="New Project" className="btn btn-project" />
        <IconButton icon={buttonIcons[2]} label="Invite Team" className="btn btn-invite" />
        {/* <IconButton icon={buttonIcons[3]} label="View Reports" className="btn btn-reports" /> */}
      </div>
    </div>
  )

}

export default QuickActions