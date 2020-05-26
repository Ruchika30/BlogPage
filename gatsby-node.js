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


  const blogTemplate = path.resolve(`src/pages/BlogPage/BlogPage.js`)
  queryResults.data.allStrapiBlog.nodes.map(item => {
    createPage({
      path: `/blogs/${item.id}`,
      component: blogTemplate,
      context: {
        // This time the entire product is passed down as context
        blog: item,
      },
    })
  })

   const categoryQueryResults = await graphql(`
     query {
       allStrapiCategory {
         nodes {
           blogs {
             Title
             Description
             id
           }
         }
       }
     }
   `)

   const categoryBlogTemplate = path.resolve(`src/pages/BlogPage/BlogPage.js`)
   categoryQueryResults.data.allStrapiCategory.nodes.map(item => {
     item.blogs.map((item) =>
     createPage({
       path: `/blogs/${item.id}`,
       component: categoryBlogTemplate,
       context: {
         // This time the entire product is passed down as context
         blog: item,
       },
     })
     )


   })


}
