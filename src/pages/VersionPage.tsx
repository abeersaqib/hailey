import { tw } from 'twind'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'
import StarterIcon from '../components/icons/StarterIcon'
import CheckIcon from '../components/icons/CheckIcon'

function VersionPage() {
  return (
    <div className={tw`grid justify-items-center py-8 text-center`}>

      <p class={tw`font-semibold text-13 text-blue mb-2`}>GET STARTED</p>
      <p class={tw`font-semibold text-23 text-primary mb-4`}>Choose your version</p>
      <p class={tw`font-normal text-17 text-primary`}>Fastest IoT DB is ready for you. Choose your deployment version</p>

      <div class={tw`mt-8 w-1/4 dark:bg-gray p-6 shadow-card rounded-lg border border-light-gray dark:border-snow-white`}>

        <div class={tw`text-left border-b-1 border-light-gray dark:border-snow-white`}>
          <p class={tw`flex font-semibold text-19 text-primary mb-4`}><span class={tw`mr-3`}><StarterIcon/></span>Starter</p>
          <p class={tw`font-normal text-15 text-secondary mb-4`}>Perfect for startups and medium sized operations.
          No compromise performance.</p>

          <div class={tw`mb-3`}>
            <p class={tw`flex font-semibold text-15 text-secondary mb-2`}><span class={tw`mr-3 justify-center py-2`}><CheckIcon/></span>1 Million connections</p>
            <p class={tw`flex font-semibold text-15 text-secondary mb-2`}><span class={tw`mr-3 justify-center py-2`}><CheckIcon/></span>5GB storage</p>
            <p class={tw`flex font-semibold text-15 text-secondary mb-2`}><span class={tw`mr-3 justify-center py-2`}><CheckIcon/></span>ANSI-SQL console</p>
            <p class={tw`flex font-semibold text-15 text-secondary mb-2`}><span class={tw`mr-3 justify-center py-2`}><CheckIcon/></span>Real time visualization</p>
            <p class={tw`flex font-semibold text-15 text-secondary mb-2`}><span class={tw`mr-3 justify-center py-2`}><CheckIcon/></span>8/5 technical support</p>
          </div>

        </div>

        <div class={tw`text-left border-b-1 border-light-gray dark:border-snow-white py-1`}>
          <p class={tw`text-23 font-semibold text-primary`}>Free</p>
        </div>

        <div class={tw`flex justify-between`}>
        <Button 
        class={tw`outline-none w-full mt-4`}
        variant="primary" 
        >Next</Button>
        </div>

      </div>  

    </div>
  )
}

export default VersionPage
