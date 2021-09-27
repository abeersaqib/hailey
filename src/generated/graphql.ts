export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: any;
  UUID: any;
};


export type Cart = {
  __typename?: 'Cart';
  id: Scalars['UUID'];
  items: Array<CartItem>;
  cartType: Scalars['String'];
  priceBeforeDiscounts: Scalars['Float'];
  priceAfterDiscounts: Scalars['Float'];
};

export type CartInput = {
  items: Array<UpdateCartItem>;
  cartType: Scalars['String'];
  currency: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  name: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  images: Scalars['String'];
  price: Scalars['Float'];
  sku: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Checkout = {
  __typename?: 'Checkout';
  id: Scalars['UUID'];
  currency: Scalars['String'];
  email: Scalars['String'];
  itemsSubtotalPrice: Scalars['Float'];
  orderId?: Maybe<Scalars['UUID']>;
  customerId?: Maybe<Scalars['UUID']>;
  items: Array<CartItem>;
  mailingAddress: MailingAddress;
};

export type CheckoutInput = {
  customerId: Scalars['UUID'];
  currency: Scalars['String'];
  email: Scalars['String'];
  lineItems: Array<CheckoutLineItemInput>;
  mailingAddress: MailingAddressInput;
};

export type CheckoutLineItemInput = {
  sku: Scalars['String'];
  quantity: Scalars['Int'];
};

export type CheckoutPaymentInput = {
  checkoutId: Scalars['UUID'];
  paymentAmount: Scalars['Int'];
  paymentMethodId: Scalars['String'];
  currency: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  products?: Maybe<Array<Scalars['UUID']>>;
  discountPercent?: Maybe<Scalars['Int']>;
  discountFixed?: Maybe<Scalars['Float']>;
  orderPriceMin?: Maybe<Scalars['Float']>;
  usesMax?: Maybe<Scalars['Int']>;
};

export type CouponInput = {
  expiresAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  products?: Maybe<Array<Scalars['UUID']>>;
  discountPercent?: Maybe<Scalars['Int']>;
  discountFixed?: Maybe<Scalars['Float']>;
  orderPriceMin?: Maybe<Scalars['Float']>;
  usesMax?: Maybe<Scalars['Int']>;
};

export type CouponUpdate = {
  expiresAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Scalars['UUID']>>;
  discountPercent?: Maybe<Scalars['Int']>;
  discountFixed?: Maybe<Scalars['Float']>;
  orderPriceMin?: Maybe<Scalars['Float']>;
  usesMax?: Maybe<Scalars['Int']>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  acceptMarketing: Scalars['Boolean'];
  cartId?: Maybe<Scalars['UUID']>;
  defaultAddressId?: Maybe<Scalars['UUID']>;
};

export type CustomerInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  acceptMarketing: Scalars['Boolean'];
  address?: Maybe<MailingAddressInput>;
  defaultAddressId?: Maybe<Scalars['UUID']>;
};


export type GatewayCustomerInfo = {
  __typename?: 'GatewayCustomerInfo';
  customerId: Scalars['UUID'];
  gatewayCustomerId: Scalars['String'];
};

export type GatewayPaymentCustomer = {
  __typename?: 'GatewayPaymentCustomer';
  customerId: Scalars['UUID'];
  gatewayCustomerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
};

export type MailingAddress = {
  __typename?: 'MailingAddress';
  id: Scalars['UUID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  company: Scalars['String'];
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  cityCode: Scalars['String'];
  provinceCode: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type MailingAddressInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  company: Scalars['String'];
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  cityCode: Scalars['String'];
  province: Scalars['String'];
  provinceCode: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['UUID'];
  currency: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  orderNumber: Scalars['Int'];
  contactEmail: Scalars['String'];
  subtotalPrice: Scalars['Float'];
  totalPrice: Scalars['Float'];
  orderId?: Maybe<Scalars['UUID']>;
  createdAt: Scalars['DateTime'];
  canceledAt?: Maybe<Scalars['DateTime']>;
  closedAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['UUID']>;
  checkoutId?: Maybe<Scalars['UUID']>;
  items: Array<CartItem>;
  shippingAddress: MailingAddress;
  billingAddress: MailingAddress;
};

export type OrderCancelInput = {
  orderId: Scalars['UUID'];
};

export type OrderCloseInput = {
  orderId: Scalars['UUID'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['UUID'];
  name: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  comparePrice: Scalars['Float'];
  costPerItem: Scalars['Float'];
  isChargeTax?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  isVariantExist?: Maybe<Scalars['Boolean']>;
  status: Status;
  vendor?: Maybe<Vendor>;
  seo?: Maybe<Seo>;
  variants: Array<Variant>;
  variantsCount: Scalars['Int'];
};

export type ProductInput = {
  name: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  comparePrice: Scalars['Float'];
  costPerItem: Scalars['Float'];
  isChargeTax?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  isVariantExist?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Status>;
  variants?: Maybe<Array<VariantInput>>;
  seo?: Maybe<SeoInput>;
  vendorId?: Maybe<Scalars['UUID']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  createCoupon: Coupon;
  deleteCoupon: Scalars['Boolean'];
  updateCoupon: Scalars['Boolean'];
  cancelOrder: Scalars['Boolean'];
  closeOrder: Scalars['Boolean'];
  /** Just create a customer ID on Gateway Payment: Today is Stripe only */
  setupCustomerGatewayInfo: GatewayCustomerInfo;
  setupPaymentMethodToCustomer: Scalars['String'];
  setupCustomerAndCreditCard: Scalars['Boolean'];
  createCustomer: Customer;
  deleteCustomer: Scalars['Boolean'];
  createProduct: Product;
  deleteProduct: Scalars['Boolean'];
  createVendor: Vendor;
  createCart: Cart;
  addCartItem: Cart;
  updateCartItem: Cart;
  checkoutCreate: Checkout;
  checkoutCompleteWithoutGatewayInfo: Scalars['Boolean'];
  checkoutCompleteWithGatewayInfo: Scalars['Boolean'];
  checkoutCustomerAssociate: Scalars['Boolean'];
};


export type RootMutationCreateCouponArgs = {
  couponInput: CouponInput;
};


export type RootMutationDeleteCouponArgs = {
  id: Scalars['UUID'];
};


export type RootMutationUpdateCouponArgs = {
  id: Scalars['UUID'];
  couponUpdate: CouponUpdate;
};


export type RootMutationCancelOrderArgs = {
  cancelInput: OrderCancelInput;
};


export type RootMutationCloseOrderArgs = {
  closeInput: OrderCloseInput;
};


export type RootMutationSetupCustomerGatewayInfoArgs = {
  customerId: Scalars['UUID'];
};


export type RootMutationSetupPaymentMethodToCustomerArgs = {
  creditCardInput: SettingCreditCardInput;
};


export type RootMutationSetupCustomerAndCreditCardArgs = {
  settingCustomerAndCreditCard: SettingCustomerAndCreditCardInput;
};


export type RootMutationCreateCustomerArgs = {
  customerInput: CustomerInput;
};


export type RootMutationDeleteCustomerArgs = {
  id: Scalars['UUID'];
};


export type RootMutationCreateProductArgs = {
  product: ProductInput;
};


export type RootMutationDeleteProductArgs = {
  id: Scalars['UUID'];
};


export type RootMutationCreateVendorArgs = {
  vendor: VendorInput;
};


export type RootMutationCreateCartArgs = {
  cartInput: CartInput;
};


export type RootMutationAddCartItemArgs = {
  cartId: Scalars['UUID'];
  items: Array<UpdateCartItem>;
};


export type RootMutationUpdateCartItemArgs = {
  cartId: Scalars['UUID'];
  items: Array<UpdateCartItem>;
};


export type RootMutationCheckoutCreateArgs = {
  checkout: CheckoutInput;
};


export type RootMutationCheckoutCompleteWithoutGatewayInfoArgs = {
  checkoutId: Scalars['UUID'];
  checkoutPaymentInput: SettingCreditCardInput;
};


export type RootMutationCheckoutCompleteWithGatewayInfoArgs = {
  checkoutPaymentInput: CheckoutPaymentInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  coupon: Coupon;
  coupons: Array<Coupon>;
  order: Order;
  gatewayInfo: GatewayPaymentCustomer;
  /** Just check if the customer has setup done */
  checkCustomerGatewaySetup: Scalars['Boolean'];
  customer: Customer;
  products: Array<Product>;
  cart: Cart;
  checkout: Scalars['Boolean'];
};


export type RootQueryCouponArgs = {
  id: Scalars['UUID'];
};


export type RootQueryOrderArgs = {
  orderId: Scalars['UUID'];
};


export type RootQueryGatewayInfoArgs = {
  customerId: Scalars['UUID'];
};


export type RootQueryCheckCustomerGatewaySetupArgs = {
  customerId: Scalars['UUID'];
};


export type RootQueryCustomerArgs = {
  id: Scalars['UUID'];
};


export type RootQueryProductsArgs = {
  status?: Maybe<Status>;
};


export type RootQueryCartArgs = {
  id: Scalars['UUID'];
};


export type RootQueryCheckoutArgs = {
  id: Scalars['UUID'];
};

export type Seo = {
  __typename?: 'Seo';
  id: Scalars['UUID'];
  productId: Scalars['UUID'];
  auto: Scalars['Boolean'];
  pageTitle: Scalars['String'];
  description: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type SeoInput = {
  productId?: Maybe<Scalars['UUID']>;
  auto?: Maybe<Scalars['Boolean']>;
  pageTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type SettingCreditCardInput = {
  cvc: Scalars['Int'];
  cardNumber: Scalars['String'];
  brand: Scalars['String'];
  expiryMonth: Scalars['Int'];
  expiryYear: Scalars['Int'];
  customerId: Scalars['UUID'];
  paymentAmount: Scalars['Int'];
};

export type SettingCustomerAndCreditCardInput = {
  displayName: Scalars['String'];
  phone: Scalars['String'];
  company: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
  cvc: Scalars['Int'];
  cardNumber: Scalars['String'];
  brand: Scalars['String'];
  expiryMonth: Scalars['Int'];
  expiryYear: Scalars['Int'];
  customerId?: Maybe<Scalars['UUID']>;
};

export enum Status {
  Draft = 'draft',
  Public = 'public',
  Archived = 'archived'
}


export type UpdateCartItem = {
  sku: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['UUID'];
  productId: Scalars['UUID'];
  skuVariant: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type VariantInput = {
  productId?: Maybe<Scalars['UUID']>;
  skuVariant?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['UUID'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type VendorInput = {
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "RootQuery"
    },
    "mutationType": {
      "name": "RootMutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Cart",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "cartType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "priceBeforeDiscounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "priceAfterDiscounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CartItem",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "images",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "sku",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Checkout",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "itemsSubtotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "customerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "mailingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddress",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Coupon",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "products",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            },
            "args": []
          },
          {
            "name": "discountPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "discountFixed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orderPriceMin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usesMax",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Customer",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "displayName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "acceptMarketing",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cartId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultAddressId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GatewayCustomerInfo",
        "fields": [
          {
            "name": "customerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "gatewayCustomerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GatewayPaymentCustomer",
        "fields": [
          {
            "name": "customerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "gatewayCustomerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "paymentMethodId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MailingAddress",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "phone",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "company",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "address1",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "address2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "city",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "province",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "cityCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "provinceCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "latitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "longitude",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Order",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orderNumber",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "contactEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "subtotalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalPrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "canceledAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "closedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "customerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "checkoutId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CartItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "shippingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddress",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "billingAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "MailingAddress",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "subCategory",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "images",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "comparePrice",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "costPerItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isChargeTax",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sku",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isVariantExist",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "vendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "Seo",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variants",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Variant",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "variantsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RootMutation",
        "fields": [
          {
            "name": "createCoupon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Coupon",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "couponInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCoupon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateCoupon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "couponUpdate",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "cancelOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "cancelInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "closeOrder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "closeInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "setupCustomerGatewayInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GatewayCustomerInfo",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "customerId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "setupPaymentMethodToCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "creditCardInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "setupCustomerAndCreditCard",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "settingCustomerAndCreditCard",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "customerInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteCustomer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "product",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createVendor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Vendor",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "vendor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCart",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Cart",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cartInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "addCartItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Cart",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "items",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "updateCartItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Cart",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cartId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "items",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCreate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Checkout",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "checkout",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCompleteWithoutGatewayInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "checkoutId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "checkoutPaymentInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCompleteWithGatewayInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "checkoutPaymentInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkoutCustomerAssociate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RootQuery",
        "fields": [
          {
            "name": "coupon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Coupon",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "coupons",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Coupon",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Order",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "orderId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "gatewayInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GatewayPaymentCustomer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "customerId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkCustomerGatewaySetup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "customerId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "customer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Customer",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "status",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "cart",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Cart",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "checkout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Seo",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "productId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "auto",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pageTitle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Variant",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "productId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "skuVariant",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Vendor",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;