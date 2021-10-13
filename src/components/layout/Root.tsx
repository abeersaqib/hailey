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
import AboutPage from '../../pages/AboutPage'
import BlogPage from '../../pages/BlogPage'
import ContactPage from '../../pages/ContactPage'
import DocsPage from '../../pages/DocsPage'
import LoginPage from '../../pages/LoginPage'
import MediaPage from '../../pages/MediaPage'
import PrivacyPage from '../../pages/PrivacyPage'
import StartPage from '../../pages/StartPage'
import SupportPage from '../../pages/SupportPage'
import TermsPage from '../../pages/TermsPage'
import TutorialPage from '../../pages/TutorialPage'
import ProjectsPage from '../../pages/ProjectsPage'


function Root() {
  return (
    <>

    <div className={tw`w-screen bg-dark`}>

    <Switch>

      <MatchRoute end>
        <Navbar/>
      </MatchRoute>

      <MatchRoute path="projects">
        <Navbar />
      </MatchRoute>
        
    </Switch>
    
    {/* <Switch>
      <MatchRoute end>
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="analytics">
      <Topbar/>
      </MatchRoute>

      <MatchRoute path="code">
      <CodeTopbar/>
      </MatchRoute>

    </Switch> */}

    </div>

    <div className={tw`flex w-screen bg-dark`}>

    {/* <Switch>
      <MatchRoute end>
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="analytics">
      <Sidebar />
      </MatchRoute>

      <MatchRoute path="code">
      <Sidebar />
      </MatchRoute>
      
    </Switch> */}

      <main className={tw`w-full h-screen flex-1 bg-dark`}>
        <Switch fallback={NotFoundPage}>
          <MatchRoute end>
            <DashboardPage />
          </MatchRoute>

          <MatchRoute path="projects">
            <ProjectsPage />
          </MatchRoute>
          
        </Switch>
      </main>
    </div>
    </>
  )
}

export default Root
