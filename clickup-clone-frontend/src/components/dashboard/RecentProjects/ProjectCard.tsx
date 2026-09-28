import React from 'react'
import StatusCircle from '../../common/StatusCircle'

interface ProjectCardProps {
  title: string
  lastEdited: string
  status?: StatusType
}

type StatusType = 'hold' | 'pastDue' | 'delay' | 'finished' | 'inactive' | 'active'

const ProjectCard: React.FC<ProjectCardProps> = ({ title, lastEdited, status }) => {

  const getStatus = (status: StatusType | undefined): { color: string; label: string } => {
    switch (status) {
      case 'hold':
        return { color: '#374151', label: 'On Hold' } // dark gray
      case 'pastDue':
        return { color: '#EF4444', label: 'Past Due' } // red
      case 'delay':
        return { color: '#FBBF24', label: 'Delayed' } // yellow
      case 'finished':
        return { color: '#3B82F6', label: 'Finished' } // blue
      case 'inactive':
        return { color: '#9CA3AF', label: 'Inactive' } // light gray
      case 'active':
        return { color: '#10B981', label: 'Active' } // green
      default:
        return { color: '#6B7280', label: 'Unknown' } // fallback gray
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow">
      <h3 className="flex items-center gap-2 font-bold text-gray-700">
        {title}
      </h3>
      <div>
        <p className="text-sm text-gray-500">Last edited: {lastEdited}</p>
        <StatusCircle {...getStatus(status)} />
      </div>
    </div>
  )
}

export default ProjectCard