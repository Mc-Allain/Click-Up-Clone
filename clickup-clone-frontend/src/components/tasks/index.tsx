import React from 'react'
import { PlusIcon, FunnelIcon, BarsArrowDownIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import MainPage from '../main_page_common/MainPage'
import Badge from '../common/Badge'
import HLine from '../common/HLine'


const Tasks: React.FC = () => {
  const tasks = [
    { name: 'Design Landing Page', priority: 'High', status: 'Past Due', color: '#EF4444', due: 'Apr 14', assignee: 'Web Redesign' },
    { name: 'Write Blog Post', priority: 'Medium', status: 'In Progress', color: '#3B82F6', due: 'Apr 18', assignee: 'Web Redesign' },
    { name: 'Client Feedback Review', priority: 'Low', status: 'On Hold', color: '#374151', due: 'No Date', assignee: 'Web Redesign' },
    { name: 'Marketing Strategy', priority: 'High', status: 'Delayed', color: '#FBBF24', due: 'Apr 20', assignee: 'Web Redesign' },
    { name: 'Fix Website Bugs', priority: 'Urgent', status: 'In Progress', color: '#3B82F6', due: 'Apr 16', assignee: 'Web Redesign' },
    { name: 'Update Presentation', priority: 'Low', status: 'Completed', color: '#10B981', due: 'Apr 12', assignee: 'Web Redesign' },

    // 🔹 Additional 11 tasks
    { name: 'Prepare Sales Report', priority: 'High', status: 'Past Due', color: '#EF4444', due: 'Apr 10', assignee: 'Web Redesign' },
    { name: 'Team Meeting Notes', priority: 'Medium', status: 'Finished', color: '#3B82F6', due: 'Apr 15', assignee: 'Web Redesign' },
    { name: 'Social Media Campaign', priority: 'High', status: 'Active', color: '#10B981', due: 'Apr 22', assignee: 'Web Redesign' },
    { name: 'Product Demo Setup', priority: 'Urgent', status: 'Delayed', color: '#FBBF24', due: 'Apr 19', assignee: 'Web Redesign' },
    { name: 'QA Testing Cycle', priority: 'Medium', status: 'On Hold', color: '#374151', due: 'Apr 25', assignee: 'Web Redesign' },
    { name: 'Client Proposal Draft', priority: 'High', status: 'Past Due', color: '#EF4444', due: 'Apr 11', assignee: 'Web Redesign' },
    { name: 'Research Competitors', priority: 'Low', status: 'Inactive', color: '#9CA3AF', due: 'No Date', assignee: 'Web Redesign' },
    { name: 'Budget Review', priority: 'Medium', status: 'Finished', color: '#3B82F6', due: 'Apr 17', assignee: 'Web Redesign' },
    { name: 'UI Mockups', priority: 'High', status: 'Active', color: '#10B981', due: 'Apr 23', assignee: 'Web Redesign' },
    { name: 'Backend Refactor', priority: 'Urgent', status: 'Delayed', color: '#FBBF24', due: 'Apr 21', assignee: 'Web Redesign' },
    { name: 'Legal Compliance Check', priority: 'Medium', status: 'On Hold', color: '#374151', due: 'Apr 26', assignee: 'Web Redesign' },
  ]


  return (
    <MainPage className="dashboard" contentClassName="px-12" sidebarActiveLink="Tasks">
      {/* Tasks Widgets */}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 subtitle">
        <div className="flex items-center gap-4">
          <h2>Tasks</h2>
          <Badge value={tasks.length} size="large" />
        </div>

        <div className="flex justify-between items-center lg:ml-auto">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-white text-sm font-medium bg-linear-to-b from-[#5571E5] to-[#4661D9]">
              <PlusIcon className="h-4 w-4" /> New Task
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200">
              <FunnelIcon className="h-4 w-4" /> Filter
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200">
              <BarsArrowDownIcon className="h-4 w-4" /> Sort
            </button>
            <button className="p-2 rounded-md bg-gray-100">
              <EllipsisHorizontalIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      <HLine className="my-6" />

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-md bg-red-50 text-red-600 font-semibold">Past Due<br /><span className="text-sm font-normal">5 Overdue</span></div>
        <div className="p-4 rounded-md bg-blue-50 text-blue-600 font-semibold">In Progress<br /><span className="text-sm font-normal">12 Tasks</span></div>
        <div className="p-4 rounded-md bg-gray-100 text-gray-600 font-semibold">On Hold<br /><span className="text-sm font-normal">3 Paused</span></div>
        <div className="p-4 rounded-md bg-green-50 text-green-600 font-semibold">Completed<br /><span className="text-sm font-normal">8 Done</span></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-4">
        {['All Tasks', 'Today', 'This Week', 'Overdue'].map(tab => (
          <button key={tab} className={`pb-2 text-sm font-medium ${tab === 'All Tasks' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Task Table */}
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b border-gray-200">
            <th className="py-2">Task</th>
            <th className="py-2">Priority</th>
            <th className="py-2">Status</th>
            <th className="py-2">Due Date</th>
            <th className="py-2">Project</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-2">{task.name}</td>
              <td className="py-2">
                <span className="px-2 py-0.5 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: task.color }}>{task.priority}</span>
              </td>
              <td className="py-2">
                <span className="flex items-center gap-1">
                  <span style={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: task.color
                  }} />
                  <span>{task.status}</span>
                </span>
              </td>
              <td className="py-2">{task.due}</td>
              <td className="py-2">{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Progress Bar */}
      <div className="mt-6">
        <label className="text-sm font-medium text-gray-700">Project Completion</label>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }} />
        </div>
        <p className="text-sm text-gray-600 mt-1">60% Complete</p>
      </div>
    </MainPage>
  )
}

export default Tasks