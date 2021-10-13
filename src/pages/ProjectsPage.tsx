import { tw } from 'twind'
import { Button, Heading, TabPane, Tabs, Table } from '@launch/solid'
import { createSignal, onMount } from 'solid-js'
import { createStore } from 'solid-js/store';

function ProjectsPage() {

  const [state, setState] = createStore({
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
	  });

  const [getActiveTab, setActiveTab] = createSignal('hailey')

  return (
	  <>
	  <style>{`
	  	.pink-tabs > div > button {
			color: #D15390 !important;
		  }
	  `}
	  </style>
    <div className={tw`pt-12 px-32 dark:bg-dark h-screen`}>

      <p class={tw`text-pink text-13 font-semibold mb-2`}>Projects</p>
      <div class={tw`flex justify-between mb-4`}>
        <p class={tw`text-23 font-semibold text-sidebar-gray`}>Projects</p>
        <Button
        class={tw`outline-none bg-pink text-white`}
        variant="pink" 
        >Create</Button>
      </div>
      <Tabs activeKey={getActiveTab()} onChange={setActiveTab} class={tw`pink-tabs`}>

        <TabPane class={tw`text-pink`} key="hailey" tab="Hailey">
          
        <div class={tw`pt-8 border-t-1 border-snow-white`}>
              {/* <Table
              class={tw`text-pink`}
              block={true}
              columns={state.tableFields}
              data={state.tableData}
              rowSelection={{
                "type": "checkbox",
                "rowKey": "id"
              }
              }
            ></Table> */}
          </div>

        </TabPane>
        <TabPane key="avatar" tab="Avatar">
          <div class={tw`pt-8 border-t-1 border-snow-white`}>
          </div>
        </TabPane>
      </Tabs>
    </div>
	</>
  )
}

export default ProjectsPage
