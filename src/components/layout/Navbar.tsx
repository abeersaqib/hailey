import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'
import { NavLink } from '@rturnq/solid-router'


function Navbar() {
  return (
    <div class={tw`border-b-1 dark:border-snow-white border-light-gray flex justify-between pr-5`}>
    <NavLink
      className={tw`flex items-center px-6 py-2 text-base transition-colors duration-150 hover:text-black`}
      activeClass={tw`text-black`}
      href="/"
      end
    >
      <span className={tw`mr-3`}>{<ExawaveIcon />}</span>
    </NavLink>
    <div class={`p-2`}>
      <NavLink
        class={tw`dark:text-snow-white text-secondary font-medium text-13 mt-1 p-2 hover:text-primary
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg mr-2`}
        activeClass={tw`text-primary`}
        href="/instances"
        end
      >Deployments
      </NavLink>
      <NavLink
        class={tw`dark:text-snow-white text-secondary font-medium text-13 mt-1 p-2 hover:text-primary
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg mr-2`}
        activeClass={tw`text-primary`}
        href="/version"
        end
      >Help
      </NavLink>    
      <NavLink
        class={tw`dark:text-snow-white text-secondary font-medium text-13 mt-1 p-2 hover:text-primary
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}
        activeClass={tw`text-primary`}
        href="/cloud-platform"
        end
      >VV
      </NavLink>

    </div>

  </div>
  )
}

export default Navbar
