import type { JSX } from 'solid-js'
import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'
import RunIcon from '../icons/RunIcon'
import SettingsIcon from '../icons/SettingsIcon'
import { Avatar, Heading, TabPane, Tabs } from '@launch/solid'
import { NavLink } from '@rturnq/solid-router'
import { Switch } from 'solid-js'
import { MatchRoute } from '@rturnq/solid-router'

function CodeTopbar() {
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


          <div class={tw`float-right flex py-2 pr-6`}>
            <div class="avatars">
              <span class="avatar">
                    <img src="https://www.fillmurray.com/50/50" width="50" height="50"/>
                </span>
              <span class="avatar">
                    <img src="https://www.fillmurray.com/100/100" width="50" height="50"/>
                </span>
              <span class="avatar">
                    <img src="https://www.fillmurray.com/200/200" width="50" height="50"/>
                </span>
              <span class="avatar">
                    <img src="https://www.fillmurray.com/150/150" width="50" height="50"/>
                </span>
              <span class="avatar">
                    <img src="https://www.fillmurray.com/50/50" width="50" height="50"/>
                </span>
            </div>
            <div class={tw`inline-flex mb-2`}>
            <button class={tw`flex dark:text-snow-white ml-2 text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 mt-1 px-3
              hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
              `}><span class={`mr-2 mt-1`}><RunIcon/></span>
              Run</button>
              <button 
              class={tw`dark:text-snow-white ml-2 text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 mt-1 px-3
              hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg`}>
                <span><SettingsIcon/></span>
              </button>
            </div>
          </div>


    </div>
    </>
  )
}

export default CodeTopbar
