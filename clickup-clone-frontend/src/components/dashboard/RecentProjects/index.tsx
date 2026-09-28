import React from 'react'
import ProjectCard from './ProjectCard'

const RecentProjects: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-700 mb-3">Recent Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ProjectCard title="Website Redesign" lastEdited="2 hours ago" status="active" />
        <ProjectCard title="Marketing Campaign" lastEdited="Yesterday" status="delay" />
        <ProjectCard title="Product Launch" lastEdited="3 days ago" status="finished" />
      </div>
    </div >
  )
}

export default RecentProjects