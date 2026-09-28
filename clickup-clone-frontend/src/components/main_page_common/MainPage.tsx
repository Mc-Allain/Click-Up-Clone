import React from 'react'
import classNames from "classnames";
import Sidebar from "./Sidebar"
import TopBar from "./TopBar";

interface MainPageProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  sidebarActiveLink: string;
}

const MainPage: React.FC<MainPageProps> = ({ children, className, contentClassName, sidebarActiveLink }) => {
  return (
    <div className={`flex h-screen bg-[#F3F4F9] text-gray-800 ${className}`}>
      <Sidebar activeLink={sidebarActiveLink} />
      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col">
        <TopBar />
        <div className={classNames("mt-16", contentClassName)}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainPage