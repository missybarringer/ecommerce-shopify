import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
  domain: 'web-wabi-sabi.store.myshopify.com',
  storefrontAccessToken: '50c676159b0e37611699ecd324eae2c2'
})

export const StoreContext = React.createContext({
  client,
})
