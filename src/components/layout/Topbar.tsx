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
    <>
    <style>
      {`
      .avatars {
        display: inline-block;
        transform: scale(-1, 1);
        margin: 0px
      }

      .avatar {
        position: relative;
        display: inline-block;
        border: 4px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        width: 36px;
        padding: 0;
      }

      .avatar:not(:first-child) {
        margin-left: -20px;
      }

      .avatar img {
        width: 100%;
        display: block;
        transform: scale(-1, 1);
      }
    `}</style>
    <div class={tw`shadow-nav justify-between pl-1`}>
      <button class={tw`ml-5 rounded-lg text-blue font-medium text-15 border border-light-gray m-2 py-1 px-2 focus:rounded-lg focus:outline-none`}>
        <span class="dot mr-3"></span>Mynewcluster
      </button>

    </div>
    </>
  )
}

export default Topbar
