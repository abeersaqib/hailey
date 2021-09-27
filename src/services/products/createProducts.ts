import { createQuery, gql } from 'solid-urql'

import { FRAGMENT_PRODUCT_WITH_VARIANT_COUNT } from '../../fragments/products'
import type { Product, Status } from '../../generated/graphql'

const QUERY_PRODUCTS = gql`
  ${FRAGMENT_PRODUCT_WITH_VARIANT_COUNT}
  query listProducts($status: Status) {
    products(status: $status) {
      ...ProductData
    }
  }
`

interface Options {
  status?: Status
}

export function listProducts(options: Options = {}) {
  const val = createQuery<Product[]>({
    query: QUERY_PRODUCTS,
    variables: options,
  })

  return val
}
