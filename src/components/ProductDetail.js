import React, { useState, useLayoutEffect } from "react"
import Img from "gatsby-image"
import ShopifyBuy from '@shopify/buy-button-js'

console.log(ShopifyBuy.UI)

const client = ShopifyBuy.buildClient({
  domain: 'web-wabi-sabi.myshopify.com',
  storefrontAccessToken: '50c676159b0e37611699ecd324eae2c2',
})
const ui = ShopifyBuy.UI.init(client)

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])

  useLayoutEffect = (() => {
    const client = ShopifyBuy.buildClient({
      domain: 'web-wabi-sabi.myshopify.com',
      storefrontAccessToken: '50c676159b0e37611699ecd324eae2c2',
    })
    const ui = ShopifyBuy.UI.init(client)
    console.log('ui', ui);
   return () => {
     effect
   },
   []
  })

  return (
    <div>
      <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>{product.description}</p>
      <p>${selectedVariant.price}</p>
      <select
        onChange={e => {
          const selected = product.variants.filter(
            variant => variant.sku === e.target.value
          )
          setVariant(selected[0])
        }}
        value={selectedVariant.sku}
      >
        {product.variants.map(variant => (
          <option key={variant.id} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProductDetail
