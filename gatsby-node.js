/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query {
      allStrapiBlog {
        nodes {
          id
          Title
          Description
          Content
        }
      }
    }
  `)

  const productTemplate = path.resolve(`src/pages/BlogPage/BlogPage.js`)

  queryResults.data.allStrapiBlog.nodes.map(item => {
    createPage({
      path: `/blogs/${item.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        blog: item,
      },
    })
  })


};
