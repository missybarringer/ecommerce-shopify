/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const pages = await graphql(`
    {
        allShopifyProduct {
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `);
    pages.data.allShopifyProduct.edges.forEach(edge => {
       createPage({
         path: `/products/${edge.node.handle}`,
         component: path.resolve('./src/templates/ProductPageTemplate.js'),
         context: {
             id: edge.node.id,
             handle: edge.node.handle
         }
       })
    })
}
