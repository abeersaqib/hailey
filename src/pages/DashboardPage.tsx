import { tw } from 'twind'
import { NavLink } from '@rturnq/solid-router'

function DashboardPage() {
  return (
    <div className={tw`py-8 text-center`}>
      <p>Dashboard</p>

    <NavLink
      className={tw`text-blue`}
      activeClass={tw`text-black`}
      href="/home"
      end
    >Home (redirect to home page)
    </NavLink>

    </div>
  )
}

export default DashboardPage
