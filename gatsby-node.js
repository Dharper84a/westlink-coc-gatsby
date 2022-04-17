const path = require("path")
const { GraphQLString } = require("gatsby/graphql")

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === "ContentfulSiteMeta") {
    return {
      siteDescription: {
        type: GraphQLString,
        resolve: () => {
          return " "
        },
      },
    }
  }

  if (type.name === "ContentfulPageDefault") {
    return {
      linkedItems: {
        type: GraphQLString,
        resolve: () => {
          return " "
        },
      },
      socialImage: {
        type: GraphQLString,
        resolve: () => {
          return " "
        },
      },
    }
  }

  // by default return empty object
  return {}
}

// // exports.createPages = async function({ actions, graphql}) {
// //   const {data} = await graphql(`
// //     query {
// //       allContentfulPageDefault {
// //         edges {
// //           node {
// //             slug
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   data.allContentfulPageDefault.edges.forEach(edge => {
// //     const slug = edge.node.slug;
// //     actions.createPage({
// //       path: slug,
// //       component: require.resolver('./src/templates/defaultPage/defaultPage.js'),
// //       context: {slug: slug},
// //     })
// //   })
// // }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const defaultPageTemplate = path.resolve(
    `src/templates/dynamic/DefaultTemplate/DefaultTemplate.js`
  )
  const defaultPageResult = await graphql(`
    query {
      allContentfulPageDefault {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  const peoplePageTemplate = path.resolve(
    `src/templates/dynamic/PeopleTemplate/PeopleTemplate.js`
  )
  const peoplePageResult = await graphql(`
    query {
      allContentfulPagePeople {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  defaultPageResult.data.allContentfulPageDefault.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: defaultPageTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
      },
    })
  })

  peoplePageResult.data.allContentfulPagePeople.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: peoplePageTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
      },
    })
  })
}