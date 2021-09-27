import { tw } from 'twind'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'
import { children, createEffect, createSignal, onMount, Show } from 'solid-js'
import ClockIcon from '../components/icons/ClockIcon'
import FlagIcon from '../components/icons/FlagIcon'
import LineChart2D from '../components/charts/LineChart2D.js'

function Instances() {

  onMount(() => { 
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    } 
    
    // // Pass CanvasID, Number of Lines (max 3), array of colors (for each line), max number of intervals (optional)
    let chart = new LineChart2D("canvas", 1,["#00F"]);
    setInterval(
      function(){
        // Add data point on Y axis
        chart.addData(getRandomInt(0,100));
      }, 30);

    // Pass CanvasID, Number of Lines (max 3), array of colors (for each line), max number of intervals (optional)
    let chart2 = new LineChart2D("canvas2", 3, ["#00F", "#F00", "#0F0"]);
    setInterval(
      function(){
        // Add data point on Y axis
        chart2.addData(getRandomInt(0,30), getRandomInt(20,40), getRandomInt(40,60));
      }, 50);

      let chart3 = new LineChart2D("canvas3", 1,["#00F"]);
      setInterval(
        function(){
          // Add data point on Y axis
          chart3.addData(getRandomInt(0,100));
        }, 30);

      let chart4 = new LineChart2D("canvas4", 3, ["#00F", "#F00", "#0F0"]);
      setInterval(
        function(){
          // Add data point on Y axis
          chart4.addData(getRandomInt(0,30), getRandomInt(20,40), getRandomInt(40,60));
        }, 50);
  
    })

  const [getActiveTab, setActiveTab] = createSignal('all')

  return (
    <div className={tw`pt-12 px-32`}>

      <p class={tw`text-blue text-lg font-semibold mb-2`}>Instances</p>
      <div class={tw`flex justify-between mb-4`}>
        <p class={tw`text-primary text-2xl font-semibold`}>Instances</p>
        {/* <button class={tw`px-4 py-2 rounded-lg bg-blue font-medium text-white text-base focus:outline-none`}>Create</button> */}
        <Button variant="primary">Create</Button>
      </div>
      <Tabs activeKey={getActiveTab()} onChange={setActiveTab}>
        <TabPane key="all" tab="Active">
          
          <div class={tw`mt-8 flex`}>
            <div class={tw`p-6 pt-4 pb-3 shadow-card rounded-lg border border-light-gray mr-6`} style="width:600px">

              <div class={tw`flex justify-between border-b-1 border-light-gray`}>
                <p class={tw`text-blue font-medium text-base mr-3 py-2 pt-3 ml-0`}>
                  <span class="dot mr-3"></span>Mynewcluster
                  <span class={tw`ml-3 text-green bg-light-green rounded-lg font-semibold text-xs py-1 px-3`}>FREE</span>
                </p>
                <div class={tw`py-2 mb-2`}>
                  <button class={tw`text-secondary rounded-lg border border-light-gray font-medium text-sm py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  Connect</button>
                  <button class={tw`ml-2 text-secondary rounded-lg border border-light-gray font-medium text-sm py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  ...</button>
                </div>
              </div>

              <div class={tw`flex justify-between border-b-1 border-light-gray py-8`}>
                <div class={``}>
                  <p class={`text-secondary font-medium text-base mb-2`}>Connections: <span>5.5K</span></p>
                  <p class={`text-secondary font-medium text-xs mb-2`}>Last 1 hour</p>
                  <canvas id="canvas"
                    class={`pt-4`}
                    style="border-bottom: 1px solid #0E87D7; border-top: 1px dashed #EBEDEF; width:240px">
                  </canvas>
                </div>
                <div class={``}>
                  <p class={`text-secondary font-medium text-base mb-2`}>Data: <span>350KB</span></p>
                  <p class={`text-secondary font-medium text-xs mb-2`}>Last 1 hour</p>
                  <canvas id="canvas2"
                    class={`pt-4`}  
                    style="border-bottom: 1px solid #01c4f0; border-top: 1px dashed #EBEDEF; width:240px">
                  </canvas>
                </div>
              </div>

              <div class={tw`flex justify-between`}>
                <p class={tw`flex items-center text-secondary font-medium text-sm mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><FlagIcon/></span>
                  N. Virginia (us-east)
                </p>
                <p class={tw`flex items-center text-secondary font-medium text-sm mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><ClockIcon/></span>
                  3d ago
                </p>
              </div>
              
            </div>  

            <div class={tw`p-6 pt-4 pb-3 shadow-card rounded-lg border border-light-gray`} style="width:600px">

              <div class={tw`flex justify-between border-b-1 border-light-gray`}>
                <p class={tw`text-blue font-medium text-base mr-3 py-2 pt-3 ml-0`}>
                  <span class="dot mr-3"></span>Mynewcluster
                  <span class={tw`ml-3 text-green bg-light-green rounded-lg font-semibold text-xs py-1 px-3`}>FREE</span>
                </p>
                <div class={tw`py-2 mb-2`}>
                  <button class={tw`text-secondary rounded-lg border border-light-gray font-medium text-sm py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  Connect</button>
                  <button class={tw`ml-2 text-secondary rounded-lg border border-light-gray font-medium text-sm py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  ...</button>
                </div>
              </div>

              <div class={tw`flex justify-between border-b-1 border-light-gray py-8`}>
                <div class={``}>
                  <p class={`text-secondary font-medium text-base mb-2`}>Connections: <span>5.5K</span></p>
                  <p class={`text-secondary font-medium text-xs mb-2`}>Last 1 hour</p>
                  <canvas id="canvas3"
                    class={`pt-4`}
                    style="border-bottom: 1px solid #0E87D7; border-top: 1px dashed #EBEDEF; width:240px">
                  </canvas>
                </div>
                <div class={``}>
                  <p class={`text-secondary font-medium text-base mb-2`}>Data: <span>350KB</span></p>
                  <p class={`text-secondary font-medium text-xs mb-2`}>Last 1 hour</p>
                  <canvas id="canvas4"
                    class={`pt-4`}  
                    style="border-bottom: 1px solid #01c4f0; border-top: 1px dashed #EBEDEF; width:240px">
                  </canvas>
                </div>
              </div>

              <div class={tw`flex justify-between`}>
                <p class={tw`flex items-center text-secondary font-medium text-sm mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><FlagIcon/></span>
                  N. Virginia (us-east)
                </p>
                <p class={tw`flex items-center text-secondary font-medium text-sm mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><ClockIcon/></span>
                  3d ago
                </p>
              </div>
              
            </div>  

          </div>

        </TabPane>
        <TabPane key="drafts" tab="Inactive">
          <div class={tw`pt-4`}>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Instances


