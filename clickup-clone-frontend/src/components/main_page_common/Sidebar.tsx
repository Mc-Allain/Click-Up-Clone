import React from 'react'
import classNames from 'classnames'
import '../../styles/sidebar.css'
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  ClipboardIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

interface SidebarProps {
  activeLink: string
}

const sidebarLinks = [
  { name: 'Dashboard', icon: <HomeIcon className="icon-5" /> },
  { name: 'Tasks', icon: <ClipboardDocumentListIcon className="icon-5" /> },
  { name: 'Projects', icon: <FolderIcon className="icon-5" /> },
  { name: 'Kanban', icon: <ClipboardIcon className="icon-5" /> },
  { name: 'Calendar', icon: <CalendarDaysIcon className="icon-5" /> },
  { name: 'Settings', icon: <Cog6ToothIcon className="icon-5" /> }
]

const Sidebar: React.FC<SidebarProps> = ({activeLink}) => {
  return (
    <>
      {/* Sidebar */}
      <aside className="fixed h-screen w-64 bg-[#485B8A] text-gray-100 flex flex-col justify-between" >
        <div>
          <div className="p-6 text-xl font-semibold text-white tracking-wide">
            Task Manager
          </div>
          <nav className="space-y-2 px-4">
            <Link to="/dashboard" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[0].name })}>
              <span>{sidebarLinks[0].icon}</span> <span>{sidebarLinks[0].name}</span>
            </Link>
            <Link to="/tasks" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[1].name })}>
              <span>{sidebarLinks[1].icon}</span> <span>{sidebarLinks[1].name}</span>
            </Link>
            <Link to="/projects" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[2].name })}>
              <span>{sidebarLinks[2].icon}</span> <span>{sidebarLinks[2].name}</span>
            </Link>
            <Link to="/kanban" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[3].name })}>
              <span>{sidebarLinks[3].icon}</span> <span>{sidebarLinks[3].name}</span>
            </Link>
            <Link to="/calendar" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[4].name })}>
              <span>{sidebarLinks[4].icon}</span> <span>{sidebarLinks[4].name}</span>
            </Link>
            {/* <Link to="/settings" className={classNames("sidebar-link", { "active": activeLink === sidebarLinks[5].name })}>
              <span>{sidebarLinks[5].icon}</span> <span>{sidebarLinks[5].name}</span>
            </Link> */}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center gap-3">
            <img src="https://placehold.co/400" alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer" />
          <div>
            <h4 className="text-sm font-medium">Makoto</h4>
            <p className="text-xs text-gray-300">Streamer & Developer</p>
          </div>
        </div>
      </aside >
    </>
  )
}

export default Sidebar
