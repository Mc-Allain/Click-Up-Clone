import React from 'react'

interface TeamActivityItemProps {
  content: {
    user: string
    action: string
    project: string
    time: string
  }
}

const TeamActivityItem: React.FC<TeamActivityItemProps> = ({ content }) => {
  return (
    <li className="p-1 flex items-center text-gray-700">
      <img
        src={`https://i.pravatar.cc/40?u=${content.user}`}
        alt={content.user}
        className="w-8 h-8 rounded-full mr-3"
      />
      <p className="cursor-pointer"><span className="font-medium">{content.user}</span> <span>{content.action}</span> <span className="font-bold">"{content.project}"</span></p>
    </li>
  )
}

export default TeamActivityItem