import { tw } from 'twind'
import ExawaveIconGray from '../components/icons/ExawaveIconGray'
import GSRow1 from '../components/icons/GSRow1'
import GSRow2 from '../components/icons/GSRow2'
import GSRow3 from '../components/icons/GSRow3'
import GSRow4 from '../components/icons/GSRow4'
import GSRow5 from '../components/icons/GSRow5'
import { Link, NavLink } from '@rturnq/solid-router'
import TwitterIcon from '../components/icons/TwitterIcon'
import LinkedInIcon from '../components/icons/LinkedInIcon'

function HomePage() {
  return (
    <div className={tw`bg-navy-blue`}>

      <div class={`px-32`}>

        <div class={tw`grid grid-cols-2 gap-56 py-36`}>
          <div>
            <p class={tw`font-extrabold text-53 text-light-white`}>Database for Your IoT Devices</p>
            <p class={tw`font-medium text-19 text-snow-white mt-4`}>Built for high volume data ingestion - exawave's IoT database is the scalable destination for your IOT devices.</p>
            <div class={tw`container flex items-center mt-8`}>
                <div class={tw`relative`}>
                    <input type="text" class={tw`bg-dark-gray h-12 w-96 pl-4 pr-20 rounded-lg z-0 focus:shadow focus:outline-none`} placeholder="Your work email"/>
                    <div class={tw`absolute top-1 right-1`}>
                      <button class={tw`py-2 px-4 text-white rounded-lg bg-blue hover:bg-blue focus:outline-none`}>Start free</button>
                    </div>
                </div>
            </div>
          </div>
          <div class={tw`bg-secondary rounded-xl`}>
          </div>
        </div>

        <div class={tw`text-center`}>
          <p class={tw`font-normal text-15 text-snow-white`}>Join the companies using Exawave IoT DB</p>
          <div class={tw`grid grid-cols-4 gap-4 mt-4 px-96`}>
            <div class={tw`bg-secondary rounded-lg p-3`}></div>
            <div class={tw`bg-secondary rounded-lg p-3`}></div>
            <div class={tw`bg-secondary rounded-lg p-3`}></div>
            <div class={tw`bg-secondary rounded-lg p-3`}></div>
          </div>
        </div>

        <div class={tw`text-center mt-16 pb-16 px-56`}>
          <p class={tw`font-extrabold text-47 text-light-white`}>
            Blazing fast performance meets mission-critical reliability</p>
          <p class={tw`font-normal text-21 text-snow-white mt-4`}>
            With reliability as the forethought, exawave’s architecture is tuned for performance — making it the fastest SQL database for IoT devices
          </p>
          <div class={tw`grid grid-cols-3 gap-4 mt-12 px-40 justify-center text-center`}>
            <div class={tw`text-light-white bg-dark-gray rounded-xxl p-2`}>Cloud native</div>
            <div class={tw`text-light-white bg-dark-gray rounded-xxl p-2`}>TLS support</div>
            <div class={tw`text-light-white bg-dark-gray rounded-xxl p-2`}>ANSI SQL</div>
          </div>
          <div class={tw`grid grid-cols-2 gap-4 mt-6 px-40 mx-8 justify-center text-center`}>
          <div class={tw`text-light-white bg-dark-gray rounded-xxl p-2`}>Highly available</div>
            <div class={tw`text-light-white bg-dark-gray rounded-xxl p-2`}>Massively scalable</div>
          </div>
        </div>
      
        <div class={tw`mt-8 bg-dark-gray rounded-46 grid grid-cols-2 gap-32 p-12`}>
          <div>
            <p class={tw`text-33 font-extrabold text-light-white`}>Get started</p>
            <p class={tw`text-19 font-semibold text-secondary mt-4`}>Connect your devices, gather and query data with the fastest IoT DB</p>
            <button class={tw`text-white font-medium text-15 bg-blue py-2 px-4 mt-8 rounded-lg focus:outline-none`}>Start Free</button>
          </div>
          <div class={tw`marquee-wrapper`}>
            <div class={tw`container overflow-hidden`}>
              <div class={tw`marquee-block relative h-64`}>
                <div class={tw`marquee-inner to-left block absolute h-2x right-0 animate-ver-scroll`}>
                  <span>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow1/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow2/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow3/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow4/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow5/></span>
                    </div>
                  </span>
                  <span>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow1/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow2/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow3/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow4/></span>
                    </div>
                    <div class={tw`marquee-item block m-2`}>
                    <span class={tw`w-1/2`}><GSRow5/></span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div class={tw`h-64 grid grid-rows-5 grid-flow-col gap-4 justify-items-end card-home`}>
            <span><GSRow1/></span>
            <span><GSRow2/></span>
            <span><GSRow3/></span>
            <span><GSRow4/></span>
            <span><GSRow5/></span>
          </div> */}
        </div>

        <div class={tw`border-t-1 border-blue-gray mt-12 py-8`}>

        <div class={tw`grid grid-cols-2 gap-10`}>

          <div class={tw`grid grid-cols-3 gap-10`}>
            <div>
              <p><ExawaveIconGray/></p>
            </div>
            <div>
              <p class={tw `text-17 font-bold text-secondary`}>Company</p>
              <NavLink
                href="/"
                end
              ><p class={tw`mt-6 text-15 font-medium text-secondary`}>About</p>
              </NavLink>
              <NavLink
                href="/"
                end
                ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Support</p>
                </NavLink>
              <NavLink
                href="/"
                end
                ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Contact</p>
                </NavLink>
            </div>
            <div>
              <p class={tw `text-17 font-bold text-secondary`}>Resources</p>
              <NavLink
                href="/"
                end
              ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Docs</p>
              </NavLink>
              <NavLink
                href="/"
                end
                ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Blog</p>
                </NavLink>
                <NavLink
                href="/"
                end
                ><p class={tw`mt-6 text-15 font-medium text-secondary`}>Tutorial</p>
                </NavLink>
                <NavLink
                href="/"
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
        
        </div>
    
        <div class={tw`flex justify-between border-t-1 border-blue-gray py-8`}>
          <div>
          <NavLink
            href="/"
            end
            ><span class={tw`text-15 font-medium text-secondary`}>© 2021 Exawave</span>
            </NavLink>
            <NavLink
            href="/"
            end
            ><span class={tw`text-15 font-medium text-secondary mx-8`}>Privacy</span>
            </NavLink>
            <NavLink
            href="/"
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
        </div>


      </div>

    </div>
  )
}

export default HomePage
