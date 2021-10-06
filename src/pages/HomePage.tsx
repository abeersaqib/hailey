import { tw } from 'twind'
import GSRow1 from '../components/icons/GSRow1'
import GSRow2 from '../components/icons/GSRow2'
import GSRow3 from '../components/icons/GSRow3'
import GSRow4 from '../components/icons/GSRow4'
import GSRow5 from '../components/icons/GSRow5'

function HomePage() {
  return (
    <>
    <style>
      {`
      // .marquee-wrapper{
      //   // background:#2F394C;
      //   // text-align:center;
      // }
      .marquee-wrapper .container{
        overflow:hidden;
        // margin:0 auto !important;
        // text-align:center;
      }
      .marquee-inner span{
        height:50%;
      }
      .marquee-wrapper .marquee-block{
        // width: 400px;
        height: 250px;
        // overflow: hidden;
        // box-sizing: border-box;
        position: relative;
        // margin: 20px 0 20px 220px;
        // background:#1B2531;
        // padding: 30px 0;
        // float:left;
      }
      .marquee-inner{
        display: block;
        height: 200%;
        // width:400px;
        position: absolute;
        // margin:20px 0 20px 70px;
      }
      .marquee-item p{
        font-weight: 800;
        font-size: 30px;
        padding:100px;
        font-family: cursive;
      }
      .marquee-inner.to-left{
        right: 0;
        animation: marqueeTop 25s linear infinite;
      }
      // .marquee-inner.to-right{
      //   animation: marqueeBottom 25s linear infinite;
      // }
      .marquee-item{
        // width: 100px;
        // height: 50px;
        display: block;
        margin:10px;
        transition: all .2s ease-out;
        // background:#00cc00;
      }
      @keyframes marqueeTop{
        0% {
          top: 0;
        }
        100% {
          top: -100%;
        }
      }
      // @keyframes marqueeBottom{
      //   0% { 
      //     top: -100%; 
      //   }
      //   100% {
      //    top: 0; 
      //   }
      // }
      
      `}
    </style>
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
          <div class="marquee-wrapper">
            <div class="container">
              <div class="marquee-block">
                <div class="marquee-inner to-left">
                  <span>
                    <div class="marquee-item">
                    <span><GSRow1/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow2/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow3/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow4/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow5/></span>
                    </div>
                  </span>
                  <span>
                    <div class="marquee-item">
                    <span><GSRow1/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow2/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow3/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow4/></span>
                    </div>
                    <div class="marquee-item">
                    <span><GSRow5/></span>
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

        <div class={tw`mt-8 p-8`}>
          

        </div>
      </div>

    </div>
    </>
  )
}

export default HomePage
