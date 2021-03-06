import { tw } from 'twind'
import { Button, Heading, TabPane, Tabs } from '@launch/solid'
import { createSignal, onMount } from 'solid-js'
import ClockIcon from '../components/icons/ClockIcon'
import FlagIcon from '../components/icons/FlagIcon'
import LineChart2D from '../components/charts/LineChart2D.js'
import SettingsIcon from '../components/icons/SettingsIcon'
import { io } from 'socket.io-client'

function Instances() {

  onMount(() => { 

    let chart = new LineChart2D("canvas", 1,["#00F"]);
    let chart2 = new LineChart2D("canvas2", 3, ["#00F", "#F00", "#0F0"]);
    let chart3 = new LineChart2D("canvas3", 1,["#00F"]);
    let chart4 = new LineChart2D("canvas4", 3, ["#00F", "#F00", "#0F0"]);

    const socket = io("http://52.33.89.229:3001");

    socket.on('redpanda', (data) => {
      chart.addData(data.chart);
      chart2.addData(data.chart2[0], data.chart2[1], data.chart2[2]);
      chart3.addData(data.chart3);
      chart4.addData(data.chart4[0], data.chart4[1], data.chart4[2]);
    })

    // // Pass CanvasID, Number of Lines (max 3), array of colors (for each line), max number of intervals (optional)
    // let chart = new LineChart2D("canvas", 1,["#00F"]);
    // setInterval(
    //   function(){
        // Add data point on Y axis
        // chart.addData(chartVals.chart);
      // }, 30);

    // Pass CanvasID, Number of Lines (max 3), array of colors (for each line), max number of intervals (optional)
    // let chart2 = new LineChart2D("canvas2", 3, ["#00F", "#F00", "#0F0"]);
    // setInterval(
    //   function(){
        // Add data point on Y axis
        // chart2.addData(chartVals.chart2[0], chartVals.chart2[1], chartVals.chart2[2]);
      // }, 50);

      // let chart3 = new LineChart2D("canvas3", 1,["#00F"]);
      // setInterval(
      //   function(){
          // Add data point on Y axis
          // chart3.addData(chartVals.chart3);
        // }, 30);

      // let chart4 = new LineChart2D("canvas4", 3, ["#00F", "#F00", "#0F0"]);
      // setInterval(
      //   function(){
          // Add data point on Y axis
          // chart4.addData(chartVals.chart4[0], chartVals.chart4[1], chartVals.chart4[2]);
        // }, 50);
  
    })

  const [getActiveTab, setActiveTab] = createSignal('all')

  return (
    <div className={tw`pt-12 px-32 dark:bg-dark h-screen`}>

      <p class={tw`text-blue text-13 font-semibold mb-2`}>Instances</p>
      <div class={tw`flex justify-between mb-4`}>
        <p class={tw`text-primary text-23 font-semibold dark:text-sidebar-gray`}>Instances</p>
        <Button 
        class={tw`outline-none`}
        variant="primary" 
        >Create</Button>
      </div>
      <Tabs activeKey={getActiveTab()} onChange={setActiveTab} class={tw`first:border-b-1 border-blue`}>

        <TabPane key="all" tab="Active">
          
          <div class={tw`pt-8 flex grid grid-cols-2 gap-4 border-b-1 border-t-1 border-light-gray`}>
            <div class={tw`dark:bg-gray px-6 pt-2 shadow-card rounded-lg border border-light-gray dark:border-snow-white`}>

              <div class={tw`flex justify-between border-b-1 border-light-gray dark:border-snow-white`}>
                <p class={tw`text-blue font-medium text-15 mr-3 pt-3 ml-0`}>
                  <span class="dot mr-3"></span>Mynewcluster
                  <span class={tw`ml-3 text-green bg-light-green dark:bg-gray dark:border dark:border-green rounded-lg font-semibold text-11 py-1 px-3`}>FREE</span>
                </p>
                <div class={tw`flex py-2`}>
                  <button class={tw`dark:text-snow-white text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  Connect</button>
                  <button class={tw`dark:text-snow-white ml-2 text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 px-3
                    hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                    `}><span><SettingsIcon/></span>
                    </button>
                </div>
              </div>

              <div class={tw`flex justify-between border-b-1 border-light-gray dark:border-snow-white py-6 grid grid-cols-2 gap-4`}>
                <div class={``}>
                  <p class={`dark:text-snow-white text-secondary font-medium text-15 mb-1`}>Connections: <span>5.5K</span></p>
                  <p class={`dark:text-snow-white text-secondary font-medium text-11 mb-2`}>Last 1 hour</p>
                  <canvas id="canvas"
                    class={tw`pt-4 border-b-1 border-blue w-64`}
                    style="border-top: 1px dashed #EBEDEF;">
                  </canvas>
                </div>
                <div class={``}>
                  <p class={`dark:text-snow-white text-secondary font-medium text-15 mb-1`}>Data: <span>350KB</span></p>
                  <p class={`dark:text-snow-white text-secondary font-medium text-11 mb-2`}>Last 1 hour</p>
                  <canvas id="canvas2"
                    class={tw`pt-4 border-b-1 border-light-blue w-64`}  
                    style="border-top: 1px dashed #EBEDEF;">
                  </canvas>
                </div>
              </div>

              <div class={tw`flex justify-between mb-2`}>
                <p class={tw`dark:text-snow-white flex items-center text-secondary font-medium text-13 mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><FlagIcon/></span>
                  N. Virginia (us-east)
                </p>
                <p class={tw`dark:text-snow-white flex items-center text-secondary font-medium text-13 mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><ClockIcon/></span>
                  3d ago
                </p>
              </div>
              
            </div>  

            <div class={tw`dark:bg-gray px-6 pt-2 shadow-card rounded-lg border border-light-gray dark:border-snow-white`}>

              <div class={tw`flex justify-between border-b-1 border-light-gray dark:border-snow-white`}>
                <p class={tw`text-blue font-medium text-15 mr-3 pt-3 ml-0`}>
                  <span class="dot mr-3"></span>Mynewcluster
                  <span class={tw`ml-3 text-green bg-light-green dark:bg-gray dark:border dark:border-green rounded-lg font-semibold text-11 py-1 px-3`}>FREE</span>
                </p>
                <div class={tw`flex py-2`}>
                  <button class={tw`dark:text-snow-white text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 px-3
                  hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                  `}>
                  Connect</button>
                  <button class={tw`dark:text-snow-white ml-2 text-secondary rounded-lg border dark:border-snow-white border-light-gray font-medium text-13 py-1 px-3
                    hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
                    `}><span><SettingsIcon/></span>
                    </button>
                </div>
              </div>

              <div class={tw`flex justify-between border-b-1 border-light-gray dark:border-snow-white py-6 grid grid-cols-2 gap-4`}>
                <div class={``}>
                  <p class={`dark:text-snow-white text-secondary font-medium text-15 mb-1`}>Connections: <span>5.5K</span></p>
                  <p class={`dark:text-snow-white text-secondary font-medium text-11 mb-2`}>Last 1 hour</p>
                  <canvas id="canvas3"
                    class={tw`pt-4 border-b-1 border-blue w-64`}
                    style="border-top: 1px dashed #EBEDEF;">
                  </canvas>
                </div>
                <div class={``}>
                  <p class={`dark:text-snow-white text-secondary font-medium text-15 mb-1`}>Data: <span>350KB</span></p>
                  <p class={`dark:text-snow-white text-secondary font-medium text-11 mb-2`}>Last 1 hour</p>
                  <canvas id="canvas4"
                    class={tw`pt-4 border-b-1 border-light-blue w-64`}  
                    style="border-top: 1px dashed #EBEDEF;">
                  </canvas>
                </div>
              </div>

              <div class={tw`flex justify-between mb-2`}>
                <p class={tw`dark:text-snow-white flex items-center text-secondary font-medium text-13 mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><FlagIcon/></span>
                  N. Virginia (us-east)
                </p>
                <p class={tw`dark:text-snow-white flex items-center text-secondary font-medium text-13 mr-3 py-2 pt-3 ml-0`}>
                  <span class={tw`mr-2`}><ClockIcon/></span>
                  3d ago
                </p>
              </div>
              
            </div>  

          </div>

        </TabPane>
        <TabPane key="drafts" tab="Inactive">
          <div class={tw`pt-8 border-t-1 border-light-gray`}>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Instances
