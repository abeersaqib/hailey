import { tw } from 'twind'

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
                      <button class={tw`py-2 px-4 text-white rounded-lg bg-blue hover:bg-blue`}>Start free</button>
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
      </div>

    </div>
  )
}

export default HomePage
