import React from 'react'
import SearchBar from '../common/SearchBar'
import { BellIcon, QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
// import { PlusCircleIcon} from '@heroicons/react/24/outline'
import '../../styles/topbar.css'

const TopBar: React.FC = () => {
  return (
    <>
      {/* TopBar */}
      <header className="fixed left-64 right-0 h-16 flex justify-between items-center bg-[#F5F5FA] shadow gap-2 px-6 py-3" >
        <SearchBar />
        <div className="flex items-center gap-4">
          {/* <button className="button btn-primary">
            <PlusCircleIcon className="md:hidden icon-6 text-white!" />
            <span className="hidden md:inline">New Task</span>
          </button> */}
          <BellIcon className="icon-6" />
          <QuestionMarkCircleIcon className="icon-6" />
          <div className="flex items-center gap-1">
            <img src="https://placehold.co/400" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
            <ChevronDownIcon className="icon-4" />
          </div>
        </div>
      </header>
    </>
  )
}

export default TopBar