import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white flex items-center w-40 md:w-50 lg:w-100 border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-(--brand-primary)">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none text-sm px-2 placeholder:text-gray-700"
      />
    </div>
  )
}

export default SearchBar