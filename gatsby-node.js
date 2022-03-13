const path = require('path')
const { GraphQLString } = require('gatsby/graphql')

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'ContentfulSiteMeta') {
    return {
      siteDescription: {
        type: GraphQLString,
        resolve: () => { return ' ' }
      }
    }
  }

  if(type.name === 'ContentfulPageDefault') {
    return {
      linkedItems: {
        type: GraphQLString,
        resolve: () => { return ' ' }
      },
      socialImage: {
        type: GraphQLString,
        resolve: () => { return ' ' }
      }
    }
  }

  // by default return empty object
  return {}
}

exports.createPages = async ({ graphql, actions }) => {
  const {createPage } = actions
  const defaultPageTemplate = path.resolve(`src/templates/defaultPage/defaultPage.js`)
  const result = await graphql(`
    query{
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
  
  result.data.allContentfulPageDefault.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: defaultPageTemplate,
      context: {
        title: edge.node.title
      }
    })
  })

}
