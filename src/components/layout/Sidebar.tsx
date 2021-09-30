import { tw } from 'twind'

import AnalyticsIcon from '../icons/AnalyticsIcon'
import DashboardIcon from '../icons/DashboardIcon'
import CodeIcon from '../icons/CodeIcon'
import NavItem from './NavItem'

function Sidebar() {
  return (
    <section class={tw`bg-nav flex flex-col bg-sidebar-gray h-[calc(100vh-89px)]`}>
      <div class={tw`flex-1 overflow-y-auto`}>
        {/* Logo */}
        {/* <div class={tw`px-5 py-4`}>
          <Logo class={tw`h-10 w-10`} />
        </div> */}

        {/* Main nav */}
        <nav class={tw`text-inactive flex flex-col p-2`}>
          <NavItem href="/" title="" icon={<DashboardIcon/>} />
          <NavItem href="/analytics" title="" icon={<AnalyticsIcon />} />
          {/* <NavItem href="/products" title="Products" icon={<DashboardIcon />} /> */}
          <NavItem href="/code" title="" icon={<CodeIcon />} />
          {/* <NavItem href="/customers" title="Customers" icon={<UserIcon />} /> */}
        </nav>

        {/* Apps */}
        {/* <div class={tw`mt-12 px-6`}>
          <div class={tw`text-inactive flex items-center justify-between`}>
            <h4 class={tw`text-xs font-bold`}>APPS</h4>
            <button class={tw`p-1`}>
              <PlusIcon class={tw`block`} />
            </button>
          </div>

          <div class={tw`mt-3 flex flex-col`}>
            <AppMenuItem id="write" image="/app-icons/write.png" name="Write" />
            <AppMenuItem
              id="dissect"
              image="/app-icons/dissect.png"
              name="Dissect"
            />
            <AppMenuItem id="hey" image="/app-icons/hey.png" name="Hey" />
          </div>
        </div> */}
      </div>

      {/* Footer */}
      {/* <div class={tw`bg-nav-dark flex w-full justify-between px-2 py-3`}>
        <img
          class={tw`h-8 w-8 rounded-full`}
          src="https://i1.sndcdn.com/avatars-000680184764-9uqgk7-t500x500.jpg"
          alt="User avatar"
        />

        <button
          class={tw`text-inactive hover:bg-nav flex h-8 w-8 transform items-center justify-center rounded-full text-center duration-150`}
        >
          <SettingsIcon />
        </button>
      </div> */}
    </section>
  )
}

export default Sidebar
