import type { JSX } from 'solid-js'
import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'
import RunIcon from '../../components/icons/RunIcon'
import SettingsIcon from '../../components/icons/SettingsIcon'
import { Avatar, Heading, TabPane, Tabs } from '@launch/solid'
import { NavLink } from '@rturnq/solid-router'
import { Switch } from 'solid-js'
import { MatchRoute } from '@rturnq/solid-router'

function Topbar() {
  return (
    <div class={tw`shadow-nav justify-between pl-1`}>
      <button class={tw`ml-5 rounded-lg text-blue font-medium text-15 border border-light-gray m-2 py-1 px-2 focus:rounded-lg focus:outline-none`}>
        <span class="dot mr-3"></span>Mynewcluster
      </button>

    </div>
  )
}

export default Topbar
