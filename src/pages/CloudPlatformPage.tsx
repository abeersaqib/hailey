import { tw } from 'twind'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'
import FlagIcon from '../components/icons/FlagIcon'

function CloudPlatformPage() {
  return (
    <div className={tw`grid justify-items-center py-8 text-center`}>

      <p class={tw`font-semibold text-13 text-blue mb-2`}>GET STARTED</p>
      <p class={tw`font-semibold text-23 text-primary mb-4`}>Select a cloud platform</p>
      <p class={tw`font-normal text-17 text-primary`}>Select a cloud provider and a desired server location</p>

      <div class={tw`mt-8 w-1/3 dark:bg-gray p-6 shadow-card rounded-lg border border-light-gray dark:border-snow-white`}>

        <div class={tw`text-left border-b-1 border-light-gray dark:border-snow-white`}>
          <p class={tw`flex font-semibold text-17 text-primary mb-4`}>Region</p>

          <div class={tw`grid grid-cols-2 gap-4 mb-4`}>

          <button class={tw`dark:bg-gray p-3 shadow-card rounded-lg border border-light-gray dark:border-snow-white focus:border-2 focus:border-blue focus:outline-none`}>
            <p class={tw`dark:text-snow-white flex items-center text-primary font-medium text-15`}>
              <span class={tw`mr-2`}><FlagIcon/></span>
              N. Virginia (us-east)
            </p>
          </button>

          <button class={tw`dark:bg-gray p-3 shadow-card rounded-lg border border-light-gray dark:border-snow-white focus:border-2 focus:border-blue focus:outline-none`}>
            <p class={tw`dark:text-snow-white flex items-center text-primary font-medium text-15`}>
              <span class={tw`mr-2`}><FlagIcon/></span>
              Singapore (asia-pac)
            </p>
          </button>

          </div>

        </div>

        <div class={tw`flex justify-between`}>
        <Button 
        class={tw`outline-none w-full mt-4`}
        variant="primary" 
        >Deploy</Button>
        </div>

      </div>  

    </div>
  )
}

export default CloudPlatformPage
