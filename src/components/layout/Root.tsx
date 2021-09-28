import { Switch } from 'solid-js'
import { tw } from 'twind'

import { MatchRoute } from '@rturnq/solid-router'

import AnalyticsPage from '../../pages/AnalyticsPage'
import CustomersPage from '../../pages/CustomersPage'
import DashboardPage from '../../pages/DashboardPage'
import InstancesPage from '../../pages/InstancesPage'
import NotFoundPage from '../../pages/NotFoundPage'
import CodePage from '../../pages/CodePage'
import CloudPlatformPage from '../../pages/CloudPlatformPage'
import VersionPage from '../../pages/VersionPage'
import ProductsPage from '../../pages/ProductsPage'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Topbar from './Topbar'
import { Button, Heading, TabPane, Tabs, Text } from '@launch/solid'
import DashboardIcon from '../icons/DashboardIcon'
import { NavLink } from '@rturnq/solid-router'
import MonacoEditor from '../../components/layout/MonacoEditor'

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

    <Navbar/>
    
    <Switch>
      <MatchRoute end>
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="code">
      <Topbar/>
      </MatchRoute>

    </Switch>

    {/* <Topbar/> */}
    </div>

    <div className={tw`flex w-screen`}>
      {/* <NavItem title="hi" href="" icon=""/> */}

      {/* <Sidebar /> */}

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

        </Switch>
      </main>
    </div>
    </>
  )
}

export default Root
