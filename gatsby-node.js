/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
  query{
  allStrapiBlog {
    nodes {
      Title
      Content
      id
    }
  }
  }`)

  console.log("queryResults", queryResults)

  const productTemplate = path.resolve(`src/pages/BlogPage/test.js`)

  queryResults.data.allStrapiBlog.nodes.forEach(node => {
    createPage({
      path: `/blogs/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    })
  })
};
