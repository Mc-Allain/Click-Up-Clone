import React from 'react'
import MainPage from '../main_page_common/MainPage'
import '../../styles/dashboard.css'
import TodaysTasks from './TodaysTasks'
import ProjectProgress from './ProjectProgress'
import ProductivityStats from './ProductivityStats'
import TeamActivity from './TeamActivity'
import QuickActions from './QuickActions'
import RecentProjects from './RecentProjects'
import HLine from '../common/HLine'

const DashboardPage: React.FC = () => {
  return (
    <MainPage className="dashboard" contentClassName="px-12" sidebarActiveLink="Dashboard">
      {/* Dashboard Widgets */}

      <section className="my-8 subtitle">
        <h2>Dashboard</h2>
        <p>Welcome to your workspace</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <TodaysTasks />
        <ProjectProgress />
        <TeamActivity />
        <ProductivityStats />
      </section>

      <HLine className="my-6" />

      {/* Projects & Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <RecentProjects />
        <QuickActions />
      </section>
    </MainPage>
  )
}

export default DashboardPage
