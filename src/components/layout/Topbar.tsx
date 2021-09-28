import type { JSX } from 'solid-js'
import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'

import { NavLink } from '@rturnq/solid-router'


function Topbar() {
  return (
    <div class={tw`shadow-nav flex justify-between pl-1`}>
      <button class={tw`ml-5 rounded-lg text-blue font-medium text-15 border border-light-gray m-2 py-1 px-2 focus:rounded-lg focus:outline-none`}>
        <span class="dot mr-3"></span>Mynewcluster</button>
    </div>
  )
}

export default Topbar
