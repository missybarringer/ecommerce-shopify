import React, { useState } from "react"
import Img from "gatsby-image"
import ShopifyBuy from "@shopify/buy-button-js"

const client = ShopifyBuy.buildClient({
  domain: 'web-wabi-sabi.store.myshopify.com',
  storefrontAccessToken: '50c676159b0e37611699ecd324eae2c2'
});
const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])
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
