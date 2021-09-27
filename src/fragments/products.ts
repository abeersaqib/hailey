import { gql } from 'solid-urql'

export const FRAGMENT_PRODUCT_WITH_VARIANTS = gql`
  fragment ProductData on Product {
    id
    name
    category
    description
    subCategory
    images
    price
    comparePrice
    costPerItem
    isChargeTax
    sku
    quantity
    isVariantExist
    status
    variants {
      id
    }
    variantsCount
    seo {
      id
    }
  }
`

export const FRAGMENT_PRODUCT_WITH_VARIANT_COUNT = gql`
  fragment ProductData on Product {
    id
    name
    category
    description
    subCategory
    images
    price
    comparePrice
    costPerItem
    isChargeTax
    sku
    quantity
    isVariantExist
    status
    vendor {
      id
      name
      image
    }
    seo {
      id
    }
    variantsCount
  }
`
