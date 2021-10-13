import { tw } from 'twind'
import ExawaveIconLight from '../icons/ExawaveIconLight'
import { NavLink } from '@rturnq/solid-router'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'
import TwitterIcon from '../icons/TwitterIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import ExawaveIconGray from '../icons/ExawaveIconGray'

function Navbar() {
  return (
    <div>
        <section class={tw`border-t-1 border-blue-gray mt-12 py-8`}>

<div class={tw`grid grid-cols-2 gap-10`}>

  <div class={tw`grid grid-cols-3 gap-10`}>
    <div>
      <p><ExawaveIconGray/></p>
    </div>
    <div>
      <p class={tw `text-17 font-bold text-secondary`}>Company</p>
      <NavLink
        href="/about"
        end
      ><p class={tw`mt-6 text-15 font-medium text-secondary`}>About</p>
      </NavLink>
      <NavLink
        href="/support"
        end
        ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Support</p>
        </NavLink>
      <NavLink
        href="/contact"
        end
        ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Contact</p>
        </NavLink>
    </div>
    <div>
      <p class={tw `text-17 font-bold text-secondary`}>Resources</p>
      <NavLink
        href="/docs"
        end
      ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Docs</p>
      </NavLink>
      <NavLink
        href="/blog"
        end
        ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Blog</p>
        </NavLink>
        <NavLink
        href="/tutorial"
        end
        ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Tutorial</p>
        </NavLink>
        <NavLink
        href="/media"
        end
        ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Media & Press</p>
        </NavLink>
    </div>
  </div>

  <div>
    <div class={tw`float-right`}>
      <p class={tw`text-snow-white text-21 font-bold`}>Subscribe to our newsletter</p>
      <div class={tw`container flex items-center mt-4`}>
        <div class={tw`relative`}>
            <input type="text" class={tw`bg-dark-gray h-12 w-96 pl-4 pr-20 rounded-lg z-0 focus:shadow focus:outline-none`} placeholder="Your work email"/>
            <div class={tw`absolute top-1 right-1`}>
              <button class={tw`py-2 px-4 text-white rounded-lg bg-blue hover:bg-blue focus:outline-none`}>Subscribe</button>
            </div>
        </div>
    </div>
    </div>
  </div>
</div>

</section>

<section class={tw`flex justify-between border-t-1 border-blue-gray py-8`}>
  <div>
    <span class={tw`text-15 font-medium text-secondary`}>© 2021 Exawave</span>
    <NavLink
    href="/privacy"
    end
    ><span class={tw`text-15 font-medium text-secondary mx-8`}>Privacy</span>
    </NavLink>
    <NavLink
    href="/terms"
    end
    ><span class={tw`text-15 font-medium text-secondary`}>Terms</span>
    </NavLink>
  </div>

  <div class={tw`flex`}>
  <NavLink
    className={tw`mr-4`}
    href="/"
    end
    ><span><TwitterIcon/></span>
    </NavLink>
    <NavLink
    href="/"
    end
    ><span><LinkedInIcon/></span>
    </NavLink>
  </div>
</section>

    </div>
  )
}

export default Navbar
