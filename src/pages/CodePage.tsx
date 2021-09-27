import { createStore } from 'solid-js/store';
import { tw } from 'twind'
import MonacoEditor from '../components/layout/MonacoEditor'
import * as SolidUI from "@launch/solid";
import { createSignal, onMount } from 'solid-js';
import $ from "jquery";
import "jqueryui";
import "jquery.ui.layout";
import { TabPane, Tabs } from '@launch/solid'
import DownloadIcon from '../components/icons/DownloadIcon'

function CodePage() {

  const [getActiveTab, setActiveTab] = createSignal('all')

  onMount(() => {
    $(document).ready(function () {
      $('#container').layout({
        closable: false,
        applyDemoStyles: true,
        resizable: true,
        resizeWhileDragging: true,
        slidable: true
      });
      // $('.ui-layout-resizer').addClass('fa fa-solid fa-grip-dots');

    });    
  });
  
	const [state, setState] = createStore({
		// open: false,
		data: [
			{
				id: 0,
				open: false,
				name: "User",
				fields: ['id', 'email', 'timestamp']
			},
			{
				id: 1,
				open: false,
				name: "Account",
				fields: ['id', 'ledgers', 'timestamp']
			},
			{
				id: 2,
				open: false,
				name: "Admin",
				fields: ['id', 'role', 'permissions']
			}
		],
		tableFields: [
			{
				title: "ID",
				dataIndex: "id"
			},
			{
				title: "Email",
				dataIndex: "email"
			},
			{
				title: "Timestamp",
				dataIndex: "timestamp"
			},
		],
		tableData: [ 
			{
				id: "21",
				email: "abc@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
			{
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      {
				id: "22",
				email: "xyz@test.com",
				timestamp: "2000-06-05T00:00:00.000000Z",
			},
      
		]
	  }),
	  handleExpand = (entry) => {
		setState("data", entry.id, "open", !entry.open);
	  },

	  handleValue = (entry) => {
		// textModel.setValue(entry.name);
		// console.log(textModel.getValue())
	  };

  return (
    
    <div id="container" className={tw`h-screen`} style="height: calc(100vh - 95px)">
      <style>
        {`
        .ui-layout-resizer {
          background: #EBEBEB !important;
        }
        .ui-layout-resizer-south {
          height: 10px !important;
        }
        .ui-layout-resizer-west {
          width: 10px !important;
        }
        .ui-layout-west {
          border: 1px solid #EBEDEF !important;
          padding: 0 !important;
        }
        .ui-layout-center {
          border: 1px solid #EBEDEF !important;
        }
        .ui-layout-south {
          border: 1px solid #EBEDEF !important;
        }
        .header{
          cursor: pointer;
          border: solid 1px #f2f2f2;
          padding: 15px;
          background-color: #272822;
          color: #FFF;
          font-family: monospace;
        }
        .content{
          cursor: pointer;
          color: #FFF;
          background-color: #5d5d5d;
          border-left: solid 1px #f2f2f2;
          border-right: solid 1px #f2f2f2;
          border-bottom: solid 1px #f2f2f2;
          border-radius: 0 0 5px 5px;
          padding: 15px;
          font-family: monospace;
          font-size: 14px;
        }
        html,body, .container{height:100%}
        `}
      </style>
      <div class={tw`ui-layout-west flex flex-wrap content-between`}>

        {/* <div class={tw`border-b-1 border-light-gray`}>
          <p class={tw`p-2 pl-4 text-secondary`}>New Table</p>
        </div>

        <div class={`h-64 overflow-auto p-3`}>
        <For each={state.data}>
          {(entry) => {
            const { name, fields } = entry;
            return (
            <div>
              <div style="display: flex;">
                <div style="width: 80%" onClick={(e) => handleExpand(entry)} className="header">
                  {name}
                </div>
                <button style="width: 20%" onClick={(e) => handleValue(entry)}>+</button>
              </div>

              {entry.open ? 
                <For each={fields}>
                {(f) => {
                  return (
                    <div class={tw`content`}>{f}</div>
                  );
                }}
                </For>
              : null}
            </div>
            );
          }}
        </For>
        </div>

        <div class={tw`flex justify-end border-t-1 border-light-gray p-2 pr-4 pb-3 absolute w-full`} style="bottom: 0">

          <p class={tw`text-secondary font-medium text-sm py-1 px-3
          `}>Cancel</p>

          <button class={tw`text-secondary bg-light-gray rounded-lg border border-light-gray font-medium text-sm py-1 px-3
          hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
          `}>
          Create</button>

        </div> */}
      </div>
      
      <div class={tw`ui-layout-center h-full`}>
        <MonacoEditor/>
      </div>
      
      <div class={tw`ui-layout-south`}>

        {/* <Tabs activeKey={getActiveTab()} onChange={setActiveTab}>
          <TabPane key="all" tab="Results">
            <div class={`p-3 flex justify-end border-b-1 border-t-1 border-light-gray`}>
            <p class={tw`ml-2 text-secondary font-medium text-sm py-1 px-3`}>2,056 rows in 0.56s</p>
            <button class={tw`flex text-secondary rounded-lg border border-light-gray font-medium text-xs py-1 px-3
            hover:text-primary focus:text-primary focus:bg-light-gray focus:outline-none focus:rounded-lg
            `}><span><DownloadIcon/></span><span class={`ml-2`}>CSV</span>
            </button>

            </div>
            <div class={tw`h-64 overflow-auto`}>
              <SolidUI.Table
              block={true}
              columns={state.tableFields}
              data={state.tableData}
            ></SolidUI.Table>
            </div>
            </TabPane>
          <TabPane key="drafts" tab="Visualize">
            <div class={tw`pt-4`}>
            </div>
          </TabPane>
        </Tabs> */}

      </div>

    </div>
  )
}

export default CodePage
