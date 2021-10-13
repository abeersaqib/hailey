import { tw } from 'twind'
import ExawaveIconLight from '../icons/ExawaveIconLight'
import { NavLink } from '@rturnq/solid-router'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'

function Navbar() {
  return (
    <div class={tw`flex justify-between px-32 bg-navy-blue`}>
    <NavLink
      className={tw`flex items-center py-6 text-base transition-colors duration-150 hover:text-black`}
      activeClass={tw`text-black`}
      href="/home"
      end
    >
      <span className={tw``}>{<ExawaveIconLight />}</span>
    </NavLink>
    <div class={tw`mt-4`}>
      <NavLink
        class={tw`text-light-white font-medium text-15 mx-4`}
        activeClass={tw`text-white`}
        href="/docs"
        end
      >Docs
      </NavLink>
      <NavLink
        class={tw`text-light-white font-medium text-15 mx-4`}
        activeClass={tw`text-white`}
        href="/blog"
        end
      >Blog
      </NavLink>    
      <NavLink
        class={tw`text-light-white font-medium text-15 mx-4`}
        activeClass={tw`text-white`}
        href="/login"
        end
      >Login
      </NavLink>
      <NavLink
        href="/start"
        end
      >
        <button class={tw`text-white font-medium text-15 bg-blue py-2 px-4 rounded-lg ml-4 focus:outline-none`}>Start Free</button>
      </NavLink>
      {/* <Button 
        class={tw`outline-none mt-4`}
        variant="primary" 
        >Next</Button> */}
    </div>

  </div>
  )
}

export default Navbar
