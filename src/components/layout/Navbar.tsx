import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'
import HaileyIcon from '../icons/HaileyIcon'
import { NavLink } from '@rturnq/solid-router'

function Navbar() {
  return (
    <div class={tw`border-b-1 border-snow-white flex justify-between pr-5`}>
    <NavLink
      className={tw`flex items-center px-6 py-2 text-base transition-colors duration-150 hover:text-black`}
      activeClass={tw`text-black`}
      href="/"
      end
    >
      <span className={tw`mr-3`}>{<HaileyIcon />}</span>
    </NavLink>
    <div class={`p-2`}>
      <NavLink
        class={tw`text-snow-white font-medium text-13 mt-1 p-2 hover:text-light-white
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg mr-2`}
        href="/projects"
        end
      >Projects
      </NavLink>
      <NavLink
        class={tw`text-snow-white font-medium text-13 mt-1 p-2 hover:text-ight-white
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg mr-2`}
        href="/"
        end
      >Academy
      </NavLink>    
      <NavLink
        class={tw`text-snow-white font-medium text-13 mt-1 p-2 hover:text-ight-white
        focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}
        href="/"
        end
      >VV
      </NavLink>

    </div>

  </div>
  )
}

export default Navbar
