import type { JSX } from 'solid-js'
import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'

import { NavLink } from '@rturnq/solid-router'


function Navbar() {
  return (
    <div class={tw`border-b-1 border-light-gray flex justify-between pr-5`}>
    <NavLink
      className={tw`flex items-center px-6 py-3 text-base transition-colors duration-150 hover:text-black`}
      activeClass={tw`text-black`}
      href="/"
      end
    >
      <span className={tw`mr-3`}>{<ExawaveIcon />}</span>
    </NavLink>
    <div>

    <button class={tw`dark:text-primary text-secondary font-medium text-sm mt-1 p-2 hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}>Deployments</button>
    <button class={tw`text-secondary font-medium text-sm mt-1 p-2 hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}>Help</button>
    <button class={tw`text-secondary font-medium text-sm mt-1 p-2 hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}>VV</button>
    </div>

  </div>
  )
}

export default Navbar
