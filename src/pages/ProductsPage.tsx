import { createEffect, createSignal, Show } from 'solid-js'
import { tw } from 'twind'

import { Button, Heading, TabPane, Tabs } from '@launch/solid'

import ProductsTable from '../components/layout/products/ProductsTable'
import { listProducts } from '../services/products/createProducts'

function ProductsPage() {
  const [getActiveTab, setActiveTab] = createSignal('all')
  // const [isLoading, setIsLoading] = createSignal(true)
  // const [products, productsState] = listProducts()

  // createEffect(() => {
  //   JSON.stringify(products())
  //   if (products()) {
  //     console.log(JSON.parse(JSON.stringify(products())))
  //   }
  // })

  return (
    <div class={tw`px-4 py-8`}>
      <div class={tw`mb-8 flex justify-between`}>
        <Heading level={5} weight="bold">
          Products
        </Heading>

        <Button variant="primary">Add Product</Button>
      </div>

      <Tabs activeKey={getActiveTab()} onChange={setActiveTab}>
        <TabPane key="all" tab="All">
          <div class={tw`pt-4`}>
            <ProductsTable />
          </div>
        </TabPane>
        <TabPane key="drafts" tab="Drafts 55">
          <div class={tw`pt-4`}>
            <ProductsTable status="drafts" />
          </div>
        </TabPane>
        <TabPane key="published" tab="Published 210">
          <div class={tw`pt-4`}>
            <ProductsTable status="published" />
          </div>
        </TabPane>
        <TabPane key="archived" tab="Archived">
          <div class={tw`pt-4`}>
            <ProductsTable status="archived" />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ProductsPage
