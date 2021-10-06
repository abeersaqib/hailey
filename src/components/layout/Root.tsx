import { Switch } from 'solid-js'
import { tw } from 'twind'
import { MatchRoute } from '@rturnq/solid-router'

import AnalyticsPage from '../../pages/AnalyticsPage'
import DashboardPage from '../../pages/DashboardPage'
import InstancesPage from '../../pages/InstancesPage'
import NotFoundPage from '../../pages/NotFoundPage'
import CodePage from '../../pages/CodePage'
import CloudPlatformPage from '../../pages/CloudPlatformPage'
import VersionPage from '../../pages/VersionPage'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import HomeNavbar from './HomeNavbar'
import Topbar from './Topbar'
import CodeTopbar from './CodeTopbar'
import HomePage from '../../pages/HomePage'


function Root() {
  return (
    <>
    <style>
      {`
    .dot {
      height: 10px;
      width: 10px;
      background-color: #44BA76;
      border-radius: 50%;
      display: inline-block;
    }
  `}
    </style>

    <div className={tw`w-screen dark:bg-dark`}>

    <Switch>

      <MatchRoute end>
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="instances">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="code">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="version">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="cloud-platform">
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="home">
        <HomeNavbar/>
      </MatchRoute>
    </Switch>
    
    <Switch>
      <MatchRoute end>
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="code">
      <CodeTopbar/>
      </MatchRoute>

    </Switch>

    </div>

    <div className={tw`flex w-screen`}>

    <Switch>
      <MatchRoute end>
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="analytics">
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="code">
      <Sidebar />
      </MatchRoute>
      
    </Switch>

      <main className={tw`w-full flex-1`}>
        <Switch fallback={NotFoundPage}>
          <MatchRoute end>
            <DashboardPage />
          </MatchRoute>

          <MatchRoute path="instances">
            <InstancesPage />
          </MatchRoute>

          <MatchRoute path="analytics">
            <AnalyticsPage />
          </MatchRoute>

          <MatchRoute path="code">
            <CodePage />
          </MatchRoute>

          <MatchRoute path="version">
            <VersionPage/>
          </MatchRoute>

          <MatchRoute path="cloud-platform">
            <CloudPlatformPage/>
          </MatchRoute>

          <MatchRoute path="home">
            <HomePage/>
          </MatchRoute>

        </Switch>
      </main>
    </div>
    </>
  )
}

export default Root
