import React from 'react'
import { ChartPieIcon } from '@heroicons/react/24/solid'
import ProgressBar from '../../common/ProgressBar'
import DashboardCard from '../DashboardCard'

const ProjectProgress: React.FC = () => {
  const status = "In Development"
  const progress = 65
  
  return (
    <DashboardCard title="Project Progress" contentClassName="flex items-center gap-2">
      <ChartPieIcon className="h-10 w-10 text-[#4B64DC]!" />
      <div className="grow">
        <div className="relative">
          <span className="absolute top-2">{status}</span>
          <p className="font-medium text-2xl text-center">{progress}<span className="text-lg">%</span></p>
        </div>
        <ProgressBar className="mt-2" value={progress} max={100} />
      </div>
    </DashboardCard>
  )
}

export default ProjectProgress