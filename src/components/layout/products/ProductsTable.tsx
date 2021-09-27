import { Component, Switch, Match, createEffect } from 'solid-js'
import { tw } from 'twind'

import { Table, Text } from '@launch/solid'

import { Status, Vendor } from '../../../generated/graphql'
import { listProducts } from '../../../services/products/createProducts'
import intl from '../../../utils/intl'

interface Product {
  id: string
  name: string
  stock: number
  variants: number
  vendor: string
  revenue: number
  status: 'draft' | 'published' | 'archived'
}

const products: Product[] = [
  {
    id: 'new-bonsai-plant',
    name: 'New Bonsai Plant',
    stock: 26,
    variants: 5,
    vendor: 'ABC Acme',
    revenue: 58.09,
    status: 'draft',
  },
  {
    id: 'awesome-cool-product',
    name: 'Awesome Cool Product',
    stock: 5500,
    variants: 24,
    vendor: 'New Town Prod...',
    revenue: 18.26,
    status: 'draft',
  },
  {
    id: 'great-red-lights',
    name: 'Great Red Lights',
    stock: 100,
    variants: 2,
    vendor: 'Indo New Corp',
    revenue: 561.87,
    status: 'published',
  },
  {
    id: 'super-skies',
    name: 'Super Skies',
    stock: 652,
    variants: 9,
    vendor: 'Wholesale New',
    revenue: 1224.45,
    status: 'draft',
  },
  {
    id: 'lettuce-juice',
    name: 'Lettuce Juice',
    stock: 224,
    variants: 12,
    vendor: 'Acme Inc',
    revenue: 198.16,
    status: 'published',
  },
  {
    id: 'canyon-magic',
    name: 'Canyon Magic',
    stock: 875,
    variants: 36,
    vendor: 'New Era Supplies',
    revenue: 97.04,
    status: 'archived',
  },
  {
    id: 'home-sofa',
    name: 'Home Sofa',
    stock: 14,
    variants: 3,
    vendor: 'New Era Supplies',
    revenue: 65.45,
    status: 'published',
  },
  {
    id: 'comfy-bed',
    name: 'Comfy Bed',
    stock: 163,
    variants: 1,
    vendor: 'Acme Inc',
    revenue: 52.47,
    status: 'published',
  },
]

type ProductsTableProps = {
  status?: 'all' | 'drafts' | 'published' | 'archived'
}

const ProductsTable: Component<ProductsTableProps> = (props) => {
  const [products, productsState] = listProducts({
    status:
      props.status === 'all' || props.status == null
        ? undefined
        : {
            drafts: Status['Draft'],
            published: Status['Public'],
            archived: Status['Archived'],
          }[props.status],
  })

  createEffect(() => {
    console.log(JSON.parse(JSON.stringify(products() || [])))
  })

  return (
    <Switch>
      <Match when={productsState().fetching}>
        <p>Loading...</p>
      </Match>
      <Match when={productsState().error}>
        <p>Something went wrong... {productsState().error?.toString()}</p>
      </Match>
      <Match when={products() != null}>
        <Table
          // data={props.status ? products()!.filter(({}) => true) : products()!}
          data={products()!}
          block
          rowSelection={{
            rowKey: 'id',
            type: 'checkbox',
          }}
          columns={[
            {
              title: 'Product',
              dataIndex: 'name',
              key: 'product',
              sorter: (a, b) => {
                var nameA = a.name.toUpperCase()
                var nameB = b.name.toUpperCase()

                if (nameA < nameB) {
                  return -1
                }
                if (nameA > nameB) {
                  return 1
                }

                return 0
              },
              render: (data, record) => (
                <div class={tw`flex items-center`}>
                  <img
                    class={tw`mr-2 h-10 w-10`}
                    src={`/products/${record.name
                      .toLowerCase()
                      .split(' ')
                      .join('-')}.png`}
                    alt={`${record.name} product`}
                  />
                  <span>{record.name}</span>
                </div>
              ),
            },
            {
              title: 'Stock',
              dataIndex: 'quantity',
              key: 'quantity',
              sorter: (a, b) => (a.quantity || 0) - (b.quantity || 0),
              render: (data: number, record) => {
                let variantsSuffix = ''
                if (record.variantsCount > 0) {
                  variantsSuffix = ` in ${intl.formatNumber(
                    record.variantsCount || 0
                  )} variant${record.variantsCount === 1 ? '' : 's'}`
                }

                return `${intl.formatNumber(data, {
                  notation: 'compact',
                })} left${variantsSuffix}`
              },
            },
            {
              title: 'Vendor',
              dataIndex: 'vendor',
              key: 'vendor',
              sorter: (a, b) => {
                var vendorA = a.vendor?.name.toUpperCase() || ''
                var vendorB = b.vendor?.name.toUpperCase() || ''

                if (vendorA < vendorB) {
                  return -1
                }
                if (vendorA > vendorB) {
                  return 1
                }

                return 0
              },
              render: (vendor?: Vendor) => {
                if (vendor) {
                  return vendor.name
                }
                return (
                  <Text class={tw`text-gray-400`} type="caption">
                    None
                  </Text>
                )
              },
            },
            // {
            //   title: 'Revenue',
            //   dataIndex: 'revenue',
            //   key: 'revenue',
            //   sorter: (a, b) => a.revenue - b.revenue,
            //   render: (data: number) =>
            //     intl.formatNumber(data, {
            //       style: 'currency',
            //       currency: 'USD',
            //     }),
            // },
          ]}
        />
      </Match>
    </Switch>
  )
}

export default ProductsTable
